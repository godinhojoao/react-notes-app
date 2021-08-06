import { useContext } from 'react';
import { CardContext } from './../context/CardContext';

function useAddCards() {
  const { createCard } = useContext(CardContext);

  return createCard;
}

export { useAddCards }