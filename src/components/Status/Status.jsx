import React from 'react'

const Status = ({winner, next}) => {
  let status = "";
  if (winner)
    status = 'Winner is ' + winner;
  else
    status = "Next Player: " + (next ? 'X' : 'O');

  return (
    <div>{status}</div>
  )
}

export default Status