import React from 'react';

import { Container, Input } from './styles';

function TextInput({prefixText, width = 100, noMargin = false, ...props}) {
  return (
    <Container width={width} noMargin={noMargin}>
        <label className="label-control" autoComplete="off" htmlFor={props.name}>{ props.label }</label>
        <div className="input-container">
            <span>{prefixText && prefixText}</span>
            <Input type="text" ref={props.inputRef} id={props.name} {...props} />
        </div>
        {props.error?.type === props.errorKey && <span>{props.error?.message}</span>}
    </Container>
  );
}

export default TextInput;
