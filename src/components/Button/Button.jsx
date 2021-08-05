import React from 'react';

import './Button.scss';

function Button({ label, onClick }) {
  return (
    <button className="default-button" onClick={onClick}>{label}</button>
  );
}

export { Button }