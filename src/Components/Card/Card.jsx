import Icon from "../Icon/Icon";
import "./Card.css";

export default function Card({turn, pIndex, player}){



    return (
        <div className="card" onClick={()=>turn(pIndex)}>
            <Icon  player={player}/>
        </div>
    )
}