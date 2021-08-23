import React, { createContext, useState, useEffect } from 'react';

const CardContext = createContext();

function CardProvider({ children }) {
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
    <CardContext.Provider value={{ cards, setCards, createCard, deleteCard }}>
      {children}
    </CardContext.Provider>
  );
}

export { CardContext, CardProvider }