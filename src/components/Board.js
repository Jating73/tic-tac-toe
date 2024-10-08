import React, { useState } from 'react'

// Components
import Square from './Square';

// Helper
import { calculateWinner } from '../utils/helper';

function Board() {

    const [squares, setSquares] = useState(Array(9).fill(null));
    const [isXNext, setIsXNext] = useState(true);

    const winner = calculateWinner(squares);

    const handleClick = (i) => {
        if (squares[i] || winner) {
            return;
        }

        const newSquares = squares.slice();
        newSquares[i] = isXNext ? 'X' : 'O';

        setSquares(newSquares);
        setIsXNext(!isXNext);
    }

    const renderSquare = (i) => {
        return <Square value={squares[i]} onClick={() => handleClick(i)} />
    }

    let status;
    if (winner) {
        status = `Winner: ${winner}`
    } else {
        status = `Next Player: ${isXNext ? 'X' : 'O'}`;
    }

    return (
        <div>
            <div className='status'>{status}</div>
            <div className='board-row'>
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className='board-row'>
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className='board-row'>
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
        </div>
    )
}

export default Board
