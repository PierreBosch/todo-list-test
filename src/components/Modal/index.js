import React, { useEffect, useState } from 'react';
import { FiX } from 'react-icons/fi';
import { Container } from './styles';
import TextInput from '../TextInput';

function Modal({ task, modalIsOpen, closeModal, deleteTask, updateTask }) {
  const [fadeType, setFadeType] = useState(null);
  const [description, setTaskDescription] = useState(task.description || "");
  const [topic, setTaskTopic] = useState(task.topic || "");

  useEffect(() => {
    if(modalIsOpen) {
        setFadeType("fade-in");
        document.body.style.overflowY = "hidden";
    }
  }, [modalIsOpen])

  function handleSubmit(e) {
    e.preventDefault();
    updateTask({ description, topic, id: task.id });
    setTaskDescription("");
    setTaskTopic("");
    handleClose();
  }

  useEffect(() => {
    if(fadeType === 'fade-out') {
        setTimeout(() => {
            closeModal();
            document.body.style.overflowY = "auto";
        }, 150)
    }
  }, [fadeType, closeModal]);

  function handleClose() {
    setFadeType("fade-out");
  }

  function handleDelete() {
    deleteTask(task.id);
    handleClose();
  }

  return (
    <Container className={`modal ${fadeType}`}>
        <div className="modal-content">
            <h1>Atualizar tarefa</h1>
            <button className="modal-close" onClick={() => handleClose()} title="Cancelar">
                <FiX size={24} />
            </button>
            <section className="modal-area">
                <form onSubmit={(e) => handleSubmit(e)} id="form1">
                    <TextInput
                        label="Descrição da tarefa"
                        value={description}
                        name="description"
                        onChange={e => setTaskDescription(e.target.value)}
                        placeholder="Dê uma descrição da sua tarefa a fazer"
                    />

                    <TextInput
                        label="Tópico"
                        value={topic}
                        name="topic"
                        onChange={e => setTaskTopic(e.target.value)}
                        placeholder="Ex: #ProjectUI"
                    />
                </form>
            </section>

            <footer className="modal-footer">
                <button disabled={description === "" || topic === ""} type="submit" form="form1">
                    CONFIRMAR ALTERAÇÕES
                </button>

                <button onClick={() => handleClose()} className="transparent">
                    CANCELAR
                </button>

                <button onClick={() => handleDelete()} className="btn-delete">
                    DELETAR TAREFA
                </button>
            </footer>
        </div>
    </Container>
  );
}

export default Modal;
