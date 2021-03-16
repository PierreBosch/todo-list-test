import React, { useState, useRef, useEffect } from 'react';
import { useTask } from '../../hooks/task';
import { Container, Input } from './styles';

function GithubUser() {
  const ref = useRef(null);
  const { getGithubUser, error } = useTask();
  const [githubUser, setGithubUser] = useState("");

  useEffect(() => {
    ref.current.focus();
  }, []);
  
  return (
    <Container>
        <Input >
          <label className="label-control" autoComplete="off" htmlFor="task-description">Digite o usuário do seu github</label>
          <div className="input-container">
            https://github.com/
            <input ref={ref} value={githubUser} id="task-description" onChange={e => setGithubUser(e.target.value)} placeholder="Github username"/>
          </div>
          {error?.type === 'githubuser' && <span>{error.message}</span>}
        </Input>

        <button onClick={() => getGithubUser(githubUser)}>Entrar</button>
    </Container>
  );
}

export default GithubUser;