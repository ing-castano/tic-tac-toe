import React from 'react'
import Grid from '../components/Grid/Grid'
import History from '../components/History/History'

const TictactoeView = () => {
  return (
    <>
        <div style={{
            display: "flex",
            border: "1px solid white",
            width: "300px",
            justifyContent: "space-between",
            alignItems: "center",
        }}>
            <Grid />
            <History />
        </div>
    </>
  )
}

export default TictactoeView