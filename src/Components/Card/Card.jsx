import Icon from "../Icon/Icon";
import "./Card.css";

export default function Card({gameEnd, turn, pIndex, player}){



    return (
        <div className="card" onClick={()=> !gameEnd && player=="" && turn(pIndex)}>
            <Icon  player={player}/>
        </div>
    )
}