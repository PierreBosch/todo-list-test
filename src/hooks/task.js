import { createContext, useContext, useState, useEffect } from "react";
import api from '../services/api';
import axios from 'axios';
const TaskContext = createContext();

const TaskProvider = ({ children }) => {
  const initialTasks = [];
  const [tasks, setTasks] = useState(initialTasks);
  const [loading, setLoading] = useState(true);
  const [todoCounter, setTodoCounter] = useState(0);
  const [doneCounter, setDoneCounter] = useState(0);
  const [filterOption, setFilterOption] = useState(null);
  const [githubUser, setGithubUser] = useState(null);
  const [error, setError] = useState(null);
  const [step, setStep] = useState(1);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('@Tasks:githubUser'));

    if(user !== null) {
      setGithubUser(user);
      setStep(2);
    }
  }, []);

  useEffect(() => {
    api.get(`/tasks`)
      .then(response => {
        setTasks(response.data.tasks)
        setLoading(false)
      });
  }, []);

  useEffect(() => {
    if(step === 2) {
      api.get(`/tasks`)
      .then(response => {
        setDoneCounter(response.data.tasks.filter(task => task.done).length);
        setTodoCounter(response.data.tasks.filter(task => !task.done).length);
      });
    }
  }, [tasks, step]);

  function getGithubUser(username) {
     setError(null);
     axios.get(`https://api.github.com/users/${username}`)
      .then(response => {
        const user = { name: response.data.login, avatar_url: response.data.avatar_url };
        localStorage.setItem('@Tasks:githubUser', JSON.stringify(user));
        setGithubUser(user);
        setStep(2);
      }).catch(() => setError({type: 'githubuser', message: 'Usuário não encontrado'}));
  }

  function filterTasks(done = null, filterDescription) {
    setLoading(true)
    const filter = done !== null ? `?done=${done}` : ``;
    setFilterOption(filterDescription);

    setTimeout(() => {
      api.get(`/tasks${filter}`)
      .then(response => {
        setTasks(response.data.tasks)
        setLoading(false)
      });
    },500)
  }

  function addTask(task) {
    console.log(githubUser.login);
    api.post('/tasks', {...task, avatar_url: githubUser.avatar_url, author: githubUser.name})
      .then(response => {
        setTasks([response.data.task, ...tasks]);
      });
  }

  function updateTask(task) {
    api.put(`/tasks/${task.id}`, {...task})
    .then(response => {
      setTasks([...tasks, response.data.task]);
    });
  }

  function changeTaskStatus(id) {
    api.put(`/tasks/${id}/toggle-status/`)
    .then(response => {
      const newTasks = tasks.map(task => {
        if(task.id === response.data.task.id) {
          return  response.data.task;
        }
        return task;
      })

      setTasks(newTasks);
    });
  }

  function deleteTask(id) {
    api.delete(`/tasks/${id}`)
    .then(() => {
      setTasks(tasks.filter(task => id !== task.id));
    });
  }

  return (
    <TaskContext.Provider value={{step, error, setStep, tasks, getGithubUser, githubUser, addTask, deleteTask,doneCounter, todoCounter, updateTask, changeTaskStatus, filterTasks, filterOption, loading }}>
      {children}
    </TaskContext.Provider>
  );
};

function useTask() {
  const context = useContext(TaskContext);

  if (!context) {
    throw new Error("useTask need a TaskProvider");
  }
  return context;
}

export { TaskProvider, useTask };