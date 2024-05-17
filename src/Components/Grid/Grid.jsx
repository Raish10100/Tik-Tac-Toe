import { useState } from "react";
import './Grid.css'
import Card from "../Card/Card";
import isWinner from "../../helper/isWinner";

export default function Grid({numberOfCards}){
const [todos, setTodos] = useState(Array(numberOfCards).fill(""))
const [turn, setTurn] = useState(false)// if true then 'o' or 'x'
const [winner, setWinner] = useState('')

function handleCLick(index){
        todos[index] = (turn) ? 'O' : 'X';
        const win = isWinner(todos, turn ? 'O' : 'X');
        if(win){
            setWinner(win);
        }
        setTodos([...todos])
        setTurn(!turn);
}


    return(

        <div className="gridWrapper">
            {
                winner && (
                    <>
                        <h1 className="result">Winner is {winner}</h1>
                        <button className="reset" onClick={() => {setTodos(Array(numberOfCards).fill("")); setWinner('')}}>Reset</button>
                    </>
                )
            }

            <>
                <h1 className="turn">Current Turn:{(turn) ? 'O' : 'X'} </h1>
                <div className="grid">
                { todos.map((item, idx) => <Card gameEnd={winner ? true: false} key={idx} turn={handleCLick} player={item} pIndex={idx}/> )}
                </div>
            </>
        </div>
    )
}