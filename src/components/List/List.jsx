import React from 'react';

import { Button } from './../Button/Button';

import './List.scss';

function List({ card, onDelete }) {
  return (
    <>
      {
        <div className="list__item">
          <header className="list__item__header">{card.title}</header>
          <p className="list__item__content">{card.description}</p>
          <Button onClick={() => onDelete(card.id)} label="Deletar Item" />
        </div>
      }
    </>
  );
};

export { List };