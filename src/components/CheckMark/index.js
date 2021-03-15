import React from 'react';
import { Container } from './styles';
import { useTask } from '../../hooks/task';


function CheckMark({ checked, task }) {
  const { changeTaskStatus } = useTask();

  return (
    <Container>
      <input onChange={() => changeTaskStatus(task.id)} className="input-checkbox" id={`checkbox${task.id}`} checked={checked} type="checkbox" style={{display: "none"}}/>
      <label className="checkbox" htmlFor={`checkbox${task.id}`}>
          <span>
              <svg width="12px" height="9px" viewBox="0 0 12 9">
              <polyline points="1 5 4 8 11 1"></polyline>
              </svg>
          </span>
          <span></span>
      </label>
    </Container>
  );
}

export default CheckMark;