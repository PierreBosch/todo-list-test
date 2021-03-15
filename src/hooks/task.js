import { createContext, useContext, useState, useEffect } from "react";
import api from '../services/api';
const TaskContext = createContext();

const TaskProvider = ({ children }) => {
  const initialTasks = [];
  const [tasks, setTasks] = useState(initialTasks);
  const [loading, setLoading] = useState(true);
  const [todoCounter, setTodoCounter] = useState(0);
  const [doneCounter, setDoneCounter] = useState(0);
  const [filterOption, setFilterOption] = useState(null);

  useEffect(() => {
    api.get(`/tasks`)
      .then(response => {
        setTasks(response.data.tasks)
        setLoading(false)
      });
  }, []);

  useEffect(() => {
    api.get(`/tasks`)
    .then(response => {
      setDoneCounter(response.data.tasks.filter(task => task.done).length);
      setTodoCounter(response.data.tasks.filter(task => !task.done).length);
    });
  }, [tasks]);

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

    api.post('/tasks', {...task})
      .then(response => {

        setTasks([...tasks, response.data.task]);
      });

    setTasks([...tasks, task]);
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
    .then(response => {
      setTasks(tasks.filter(task => id !== task.id));
    });
  }

  return (
    <TaskContext.Provider value={{ tasks, addTask, deleteTask,doneCounter, todoCounter, updateTask, changeTaskStatus, filterTasks, filterOption, loading }}>
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