import React, { createContext } from 'react';

import { useCard } from './hooks/useCard';

const Context = createContext();

function CardProvider({ children }) {
  const { cards, setCards, createCard, deleteCard } = useCard();

  return (
    <Context.Provider value={{ cards, setCards, createCard, deleteCard }}>
      {children}
    </Context.Provider>
  );
}

export { Context, CardProvider }