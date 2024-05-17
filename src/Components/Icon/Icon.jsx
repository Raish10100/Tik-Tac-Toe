import { FaTimes, FaPen, FaRegCircle } from 'react-icons/fa';

function Icon({player}){

    if(player === "X"){
        return (<FaTimes/>)
    }
    else if(player === "O"){
        return (<FaRegCircle/>)
    }
    else{
        return (<FaPen/>)
    }
}

export default Icon;