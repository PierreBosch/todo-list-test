import React, { useState, useContext } from 'react';
import vialaserLogo from '../../assets/images/logo.png';
import CardList from '../../components/CardList';
import { Container, Content, Header, FilterOption, FilterList, Input } from './styles';
import { ThemeContext } from "styled-components";
import rightElement from '../../assets/elements/right-element-light.svg';
import leftElement from '../../assets/elements/left-element-light.svg';
import darkrightElement from '../../assets/elements/right-element.svg';
import darkleftElement from '../../assets/elements/left-element.svg';
import { FiSun, FiMoon, FiPower } from 'react-icons/fi';
import { useTask } from '../../hooks/task';
import GithubUser from '../../components/GithubUser';

function Home({ changeTheme }) {
  const [description, setTaskDescription] = useState("");
  const [topic, setTaskTopic] = useState("");

  const { addTask, step, tasks, filterTasks, logout, filterOption, doneCounter, todoCounter} = useTask();
  const theme = useContext(ThemeContext);

  function handleSubmit() {
    addTask({ description, topic });
    setTaskDescription("");
    setTaskTopic("");
  }

  return (
    <Container className="icon-orange" leftElement={theme.description === "dark" ? darkleftElement: leftElement} rightElement={theme.description === "dark" ? darkrightElement: rightElement}>
      <Content>
       {step === 2 ? (
         <>
           <Header>
            <div id="header-title">
              <h1>Adicionar novo todo</h1>
              <div className="theme">
                <img src={vialaserLogo} alt="vialaser-logo"/>
                <button onClick={() => changeTheme()}>
                  {theme.description === "dark" ? (<FiSun size={20} />) : (<FiMoon size={20} />)}
                </button>

                <button onClick={() => logout()}>
                  <FiPower size={20} />
                </button>
              </div>
            </div>

            <div id="header-form">
              <Input>
                <label className="label-control" autoComplete="off" htmlFor="task-description">Descrição da tarefa</label>
                <div className="input-container">
                  <input value={description} id="task-description" onChange={e => setTaskDescription(e.target.value)} placeholder="Dê uma descrição da sua tarefa a fazer" type="text"/>
                </div>
              </Input>

              <Input>
                <label htmlFor="task-topic" autoComplete="off">Tópico</label>
                <div className="input-container">
                  <input value={topic} onChange={e => setTaskTopic(e.target.value)} placeholder="Ex: #ProjectUI" id="task-topic" type="text"/>
                </div>
              </Input>

              <button disabled={description === "" || topic === ""} onClick={() => handleSubmit()}>
                Adicionar
              </button>
            </div>

            <div id="filter">
              <span>Filtro:</span>

              <FilterList>
                <FilterOption backgroundColor={theme.colors.allColor} onClick={() => filterTasks(null,null)} selected={filterOption === null}>Todas <span>{ doneCounter + todoCounter }</span></FilterOption>
                <FilterOption backgroundColor={theme.colors.doneColor} onClick={() => filterTasks(true, "done")} selected={filterOption === "done"}>Feitas <span>{ doneCounter }</span></FilterOption>
                <FilterOption backgroundColor={theme.colors.todoColor} onClick={() => filterTasks(false, "todo")} selected={filterOption === "todo"}>A Fazer <span>{ todoCounter }</span></FilterOption>
              </FilterList>
            </div>
          </Header>

          <CardList tasks={tasks} />
         </>
       ) : (
         <GithubUser />
       )}
      </Content>
    </Container>
  );
}

export default Home;