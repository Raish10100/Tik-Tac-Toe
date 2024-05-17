import Icon from "../Icon/Icon";
import "./Card.css";

export default function Card({turn, todo, pIndex}){



    return (
        <div className="card" onClick={()=>turn(pIndex)}>
            <Icon  player={todo}/>
        </div>
    )
}