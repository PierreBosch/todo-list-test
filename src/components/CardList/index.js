import React from 'react';
import { FiPlus } from 'react-icons/fi';
import { Container, GridList } from './styles';
import CardItem from '../CardItem';

function CardList({ tasks }) {
  return <Container>
    <GridList>
      {tasks.length > 0 && tasks.map(task => (
        <CardItem key={task.id} task={task} />
      ))}
    </GridList>
    <button>Carregar mais <FiPlus size={22} /></button>
  </Container>;
}

export default CardList;