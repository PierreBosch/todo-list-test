import React from 'react';
// import { FiPlus } from 'react-icons/fi';
import { Container, GridList } from './styles';
import CardItem from '../CardItem';
import PropagateLoader from "react-spinners/PropagateLoader";
import { useTask } from '../../hooks/task';

function CardList({ tasks }) {

  const { loading } = useTask();

  return <Container>
    {!loading ? (
      tasks.length > 0 ? (
        <GridList>
          {tasks.map(task => (
            <CardItem key={task.id} task={task} />
          ))}
        </GridList>
      ) : (
        <span>Que pena! Nenhuma tarefa encontrada :(</span>
      )
    ):(
      <div id="loading">
        <PropagateLoader loading={true} size={20} />
      </div>
    )}
    {/* <button>Carregar mais <FiPlus size={22} /></button> */}

   
  </Container>;
}

export default CardList;