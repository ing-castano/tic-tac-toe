import React from 'react'
import Grid from '../components/Grid/Grid'

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
            <div> <Grid /> </div>
            <div>list</div>
        </div>
    </>
  )
}

export default TictactoeView