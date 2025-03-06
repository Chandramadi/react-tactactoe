import { useEffect, useState } from "react";
import Grid from "../grid/Grid";
import "./MainGrid.css";
import resultChecker from "../resultChecker";

function MainGrid() {

    const [isTurn, setTurn] = useState(true); // true = X
    const [gridState, setGridState] = useState(Array(9).fill(null));
    const [winner, setWinner] = useState(null); // winner = X or O or null

    function clickHandler(index) {
        if (gridState[index] || winner) return; // Prevent overwriting

        setGridState((prevGrid) => {
            const newGrid = [...prevGrid]; // Copy the old state
            newGrid[index] = isTurn ? "X" : "O"; // Update the clicked cell
            return newGrid; // Return the new updated state
        });
        setTurn(!isTurn);

    }

    function findWinner() {
        const result = resultChecker(gridState);
        if(result) {
            const win = isTurn ? "O" : "X";
            setWinner(win);
        }
    }

    function resetGame() {
        setGridState(Array(9).fill(null));
        setTurn(true);
        setWinner(null);
    }

    useEffect(()=>{
        findWinner();
    },[gridState]);

    return (
        <div className="mainGrid-wrapper">
            <div className="mainGrid-startGame">
                <h1>Tic-Tac-Toe</h1>
                {
                    winner && <h1>{winner}wins!</h1>
                }
            </div>
            {
                !winner && <h2>{isTurn ? "X" : "O"}</h2>
            }
            <div className="mainGrid-Grids">
                {
                    gridState.map((value, index)=>
                    <Grid 
                        key={index} // props
                        value={value} // props
                        onClick={()=>{clickHandler(index)}} // props
                    ></Grid>) 
                }
            </div>
            <div>
                <button className="mainGrid-reset-button" onClick={()=>{resetGame()}}>Reset</button>
            </div>
        </div>
    )
}

export default MainGrid;