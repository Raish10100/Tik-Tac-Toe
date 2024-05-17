import { useState } from "react";
import './Grid.css'
import Card from "../Card/Card";

export default function Grid({numberOfCards}){
const [todos, setTodos] = useState(Array(numberOfCards).fill(""))
const [turn, setTurn] = useState(false)// if true then 'o' or 'x

function handleCLick(index){
    console.log(index)
    todos[index] = (turn) ? 'O' : 'X'
    // setTodos([...todos,(turn) ? 'O' : 'X'])
    setTodos(...todos)
    setTurn(!turn);
}


    return(

        <>
            <h1 className="turn">Current Turn:{(turn) ? 'O' : 'X'} </h1>
            <div className="grid">
            { todos.map((item, idx) => <Card key={idx} turn={handleCLick} player={item} pIndex={idx}/> )}
            </div>
        </>
    )
}