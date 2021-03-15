import React, { useState, useContext } from 'react';
import vialaserLogo from '../../assets/images/logo.png';
import CardList from '../../components/CardList';
import { Container, Content, Header, FilterOption, FilterList } from './styles';
import { ThemeContext } from "styled-components";
import rightElement from '../../assets/elements/right-element-light.svg';
import leftElement from '../../assets/elements/left-element-light.svg';
import darkrightElement from '../../assets/elements/right-element.svg';
import darkleftElement from '../../assets/elements/left-element.svg';
import { FiMoon, FiSun } from 'react-icons/fi';
import { useTask } from '../../hooks/task';

function Home({ changeTheme }) {
  const [description, setTaskDescription] = useState("");
  const [topic, setTaskTopic] = useState("");

  const { addTask, tasks, filterTasks, filterOption} = useTask();
  const theme = useContext(ThemeContext);

  function handleSubmit() {
    addTask({ description, topic, status: "todo", author: "Pierre Boschetto" });
    setTaskDescription("");
    setTaskTopic("");
  }

  return (
    <Container className="icon-orange" leftElement={theme.description === "dark" ? darkleftElement: leftElement} rightElement={theme.description === "dark" ? darkrightElement: rightElement}>
      <Content>

        <Header>
          <div id="header-title">
            <h1>Adicionar novo todo</h1>
            <div className="theme">
              <img src={vialaserLogo} alt="vialaser-logo"/>
              <button onClick={() => changeTheme()}>
                {theme.description === "dark" ? (<FiSun size={20} />) : (<FiMoon size={20} />)}
              </button>
            </div>
          </div>

          <div id="header-form">
            <div className="form-control">
              <label className="label-control" autoComplete="off" htmlFor="task-description">Descrição da tarefa</label>
              <div className="input-container">
                <input id="task-description" onChange={e => setTaskDescription(e.target.value)} placeholder="Dê uma descrição da sua tarefa a fazer" type="text"/>
              </div>
            </div>

            <div className="form-control">
              <label htmlFor="task-topic" autoComplete="off">Tópico</label>
              <div className="input-container">
                <input onChange={e => setTaskTopic(e.target.value)} placeholder="Ex: #ProjectUI" id="task-topic" type="text"/>
              </div>
            </div>

            <button onClick={() => handleSubmit()}>
              Adicionar
            </button>
          </div>

          <div id="filter">
            <span>Filtro:</span>

            <FilterList>
              <FilterOption backgroundColor={theme.colors.allColor} onClick={() => filterTasks(null,null)} selected={filterOption === null}>Todas <span>8</span></FilterOption>
              <FilterOption backgroundColor={theme.colors.doneColor} onClick={() => filterTasks(true, "done")} selected={filterOption === "done"}>Feitas <span>3</span></FilterOption>
              <FilterOption backgroundColor={theme.colors.todoColor} onClick={() => filterTasks(false, "todo")} selected={filterOption === "todo"}>A Fazer <span>5</span></FilterOption>
            </FilterList>
          </div>
        </Header>

        <CardList tasks={tasks} />
      </Content>
    </Container>
  );
}

export default Home;