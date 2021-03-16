import React from 'react';

import { Container, Input } from './styles';

function TextInput(props) {
  return (
    <Container>
        <label className="label-control" autoComplete="off" htmlFor={props.name}>{ props.label }</label>
        <div className="input-container">
            <Input type="text" ref={props.inputRef} id={props.name} {...props} />
        </div>
        {props.error?.type === props.errorKey && <span>{props.error?.message}</span>}
    </Container>
  );
}

export default TextInput;