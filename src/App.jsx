import React from 'react';

import { List } from './components/List/List';
import { AddCard } from './components/AddCard/AddCard';
import { CardProvider } from './context/CardContext';

import './main.scss';

function App() {
  return (
    <CardProvider>
      <div className="main-container">
        <AddCard />

        <div className="list">
          <List />
        </div>
      </div>
    </CardProvider>
  );
}

export { App }