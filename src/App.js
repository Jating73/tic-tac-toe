import './App.css';
import { Fragment } from 'react';
import Board from './components/Board';

function App() {
  return (
    <Fragment>
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
      </div>
    </Fragment>
  );
}

export default App;
