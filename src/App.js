import React from 'react';
import logo from './logo.svg';
import './App.css';
import Avatar from './components/Avatar';

function App() {
  return (
    <div className="App">
      <Avatar url="https://fyf.tac-cdn.net/images/products/large/BF89-11K.jpg?auto=webp&quality=60" width="250px" shape={true} />
    </div>
  );
}

export default App;
