import React, { useState } from 'react'
import Square from '../Square/Square'
import { calculateWinner } from '../../helpers/calculateWinner';
import Status from '../Status/Status';

const Grid = () => {
    const [xIsNext, setxIsNext] = useState(true);
    const [squares, setSquares] = useState(Array(9).fill(null));

    const handleClick = (i) => {
        // if there is already a value, then do not trigger an event
        if (squares[i] || calculateWinner(squares)) 
            return;
        
        // Make a copy of states to guarantee inmutability
        const nextSquares = squares.slice();
        // X Player turn
        if (xIsNext)
            nextSquares[i] = 'X';
        // O Player turn
        else
            nextSquares[i] = 'O';
        // set the State to re-render DOM
        setSquares(nextSquares);
        // move turn
        setxIsNext(!xIsNext);
    }

    return (
        <div className='board'>
            <div className='row'>
                < Status winner={calculateWinner(squares)} next={xIsNext}/>
            </div>
            <div className='row'>
                < Square value={squares[0]} onSquareClick={() => handleClick(0)}/>
                < Square value={squares[1]} onSquareClick={() => handleClick(1)}/>
                < Square value={squares[2]} onSquareClick={() => handleClick(2)}/>
            </div>
            <div className='row'>
                < Square value={squares[3]} onSquareClick={() => handleClick(3)}/>
                < Square value={squares[4]} onSquareClick={() => handleClick(4)}/>
                < Square value={squares[5]} onSquareClick={() => handleClick(5)}/>
            </div>
            <div className='row'>
                < Square value={squares[6]} onSquareClick={() => handleClick(6)}/>
                < Square value={squares[7]} onSquareClick={() => handleClick(7)}/>
                < Square value={squares[8]} onSquareClick={() => handleClick(8)}/>
            </div>
        </div>
    )
}

export default Grid