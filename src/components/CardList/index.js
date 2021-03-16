import React, { useState } from 'react';
// import { FiPlus } from 'react-icons/fi';
import { Container, GridList } from './styles';
import CardItem from '../CardItem';
import PropagateLoader from "react-spinners/PropagateLoader";
import { useTask } from '../../hooks/task';
import Modal from '../Modal';

function CardList({ tasks }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [task, setTask] = useState(null);
  const { loading } = useTask();

  function handleOpenModal(task) {
    setTask(task);
    setModalIsOpen(true);
  }

  return <Container>
    {!loading ? (
      tasks.length > 0 ? (
        <>
          {modalIsOpen && (<Modal task={task} modalIsOpen={modalIsOpen} closeModal={() => setModalIsOpen(false)} />)}
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
        <PropagateLoader loading={true} size={20} />
      </div>
    )}
  </Container>;
}

export default CardList;