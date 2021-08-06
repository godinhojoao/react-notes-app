import React, { useState } from 'react';

import { useAddCards } from './../../hooks/useAddCards';
import { Button } from './../Button/Button';

import './AddCard.scss';

function AddCard() {
  const createCard = useAddCards();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  function handleChangeTitle(e) {
    setTitle(e.target.value);
  }

  function handleChangeDescription(e) {
    setDescription(e.target.value);
  }

  function handleSubmitData(e) {
    e.preventDefault();
    if (title.length > 0 && description.length > 0) {
      const newTask = { title, description };
      createCard(newTask);
      setTitle('');
      setDescription('');
    }
  }

  return (
    <div className="create-new-card">
      <form onSubmit={handleSubmitData}>
        <input
          type="text"
          className="default-input"
          placeholder="Título"
          value={title}
          onChange={handleChangeTitle}
        />

        <input
          type="text"
          className="default-input textarea"
          placeholder="Descrição"
          value={description}
          onChange={handleChangeDescription}
        />

        <Button onClick={handleSubmitData} label="Adicionar Card" />
      </form>
    </div>
  );
}

export { AddCard }