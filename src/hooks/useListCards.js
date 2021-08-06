import { useContext } from 'react';
import { CardContext } from './../context/CardContext';

function useListCards() {
  const { cards, deleteCard } = useContext(CardContext);

  return { cards, deleteCard };
}

export { useListCards };