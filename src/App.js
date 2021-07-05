import { useEffect, useState } from 'react';

import { List } from './components/List/List';
import { AddCard } from './components/AddCard/AddCard';

import './main.scss';

export default function App() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const savedCards = JSON.parse(localStorage.getItem('cards'));
    if (savedCards) {
      setCards([...savedCards]);
    }
  }, []);

  function createCard(newItem) {
    let currentId = cards[cards.length - 1] ? cards[cards.length - 1].id : 0;
    const newCard = { id: ++currentId, ...newItem };
    setCards([...cards, newCard]);

    localStorage.setItem('cards', JSON.stringify([...cards, newCard]));
  }

  function deleteCard(cardId) {
    const updatedCards = cards.filter(card => card.id !== cardId);
    setCards([...updatedCards]);

    localStorage.setItem('cards', JSON.stringify([...updatedCards]));
  }

  return (
    <>
      <div className="main-container">
        <AddCard onCreate={createCard} />

        <div className="list">
          {
            cards.map(card => {
              return (<List card={card} key={card.id} onDelete={deleteCard} />);
            })
          }
        </div>
      </div >
    </>
  );
}