import React, { useContext } from 'react';

import { Context } from './../../context/CardContext';
import { Button } from './../Button/Button';

import './List.scss';

function List() {
  const { cards, deleteCard } = useContext(Context);

  return (
    <>
      {
        cards.map(card => {
          return (
            <div key={card.id} className="list__item">
              <header className="list__item__header">{card.title}</header>
              <p className="list__item__content">{card.description}</p>
              <Button onClick={() => deleteCard(card.id)} label="Deletar Item" />
            </div>
          );
        })
      }
    </>
  );
}

export { List }