import React, { useState } from 'react'
import Grid from '../components/Grid/Grid'
import History from '../components/History/History'

const TictactoeView = () => {
    // states must be here to let the app be able to register history movements and re-render any of them
    const [xIsNext, setxIsNext] = useState(true);
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const currentSquares = history[history.length - 1];

    const handlePlay = (nextSquares) => {
        // re-render DOM
        setHistory([...history, nextSquares])
        // move turn
        setxIsNext(!xIsNext);
    }

    const jumpTo = (move) => {
        const nextHistory = history.slice(0, move)
        setHistory(nextHistory);
        setxIsNext(move % 2 != 0);
    }

  return (
    <>
        <div style={{
            display: "flex",
            border: "0px solid white",
            width: "400px",
            justifyContent: "space-between",
            alignItems: "center",
        }}>
            <Grid 
                xIsNext = {xIsNext} 
                squares = {currentSquares}
                onPlay = {handlePlay}
            />
            <ol>
                <History history={history} onJump = {jumpTo} />
            </ol>
        </div>
    </>
  )
}

export default TictactoeView