import React from 'react';

import { useListCards } from './../../hooks/useListCards';
import { Button } from './../Button/Button';

import './List.scss';

function List() {
  const { cards, deleteCard } = useListCards();

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