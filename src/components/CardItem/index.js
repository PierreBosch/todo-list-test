import React from 'react';
import CheckMark from '../CheckMark';
import { Card } from './styles';


function CardItem({ task }) {
  

  return <Card key={task.id} done={task.done}>
       <img src={task.avatar_url} alt="avatar"/>

       <div id="content">
           <strong>#{task.topic}</strong>

           <p className="content-description">{ task.description }</p>

           <span className="content-autor">
                <span>Por: </span>
                { task.author }
           </span>
       </div>

       <CheckMark checked={task.done} task={task} />
  </Card>;
}

export default CardItem;