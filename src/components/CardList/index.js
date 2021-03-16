import React, { useState, useContext } from 'react';
import { Container, GridList } from './styles';
import CardItem from '../CardItem';
import PropagateLoader from "react-spinners/PropagateLoader";
import { useTask } from '../../hooks/task';
import Modal from '../Modal';
import { ThemeContext } from "styled-components";

function CardList({ tasks }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [task, setTask] = useState(null);
  const { loading, deleteTask, updateTask } = useTask();
  const theme = useContext(ThemeContext);

  function handleOpenModal(task) {
    setTask(task);
    setModalIsOpen(true);
  }

  return <Container>
    {!loading ? (
      tasks.length > 0 ? (
        <>
          {modalIsOpen && (<Modal updateTask={(task) => updateTask(task)} task={task} deleteTask={() => deleteTask(task.id)} modalIsOpen={modalIsOpen} closeModal={() => setModalIsOpen(false)} />)}
          <GridList>
            {tasks.map(task => (
              <CardItem updateTask={() => handleOpenModal(task)}  key={task.id} task={task} />
            ))}
          </GridList>
        </>
      ) : (
        <span>Que pena! Nenhuma tarefa encontrada :(</span>
      )
    ):(
      <div id="loading">
        <PropagateLoader color={theme.colors.loadingColor} loading={true} size={20} />
      </div>
    )}
  </Container>;
}

export default CardList;