export const calculateWinner = (squares) => {
    // Define all eight possible winning combinations as an Array(8) of arrays(3)
    const combinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [6, 4, 2]
    ]

    // Go through each possible combination
    for (let i = 0; i < combinations.length; i++) {
        const [a, b, c] = combinations[i];
        // check if there is a winner
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c])
            return squares[a];
    }

    return null;
}