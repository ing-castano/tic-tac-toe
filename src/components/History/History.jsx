import React from 'react'

const History = ({history, onJump}) => {
  return (
    <ol>
        {history.map((square, index) => {
                return (
                    <li key={'move'+index}>
                        <button 
                            onClick = {() => {onJump(index + 1)}}
                        > 
                            {(index === 0) ? 'Jump to Start' : 'Jump to ' + index + ' move' }
                        </button>
                    </li>
                );
        })}
    </ol>
  )
}

export default History