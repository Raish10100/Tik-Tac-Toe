function isWinner(todos, symbol) {
    console.log(todos, symbol)
    if(todos[0] == todos[1] && todos[1] == todos[2] && todos[2] == symbol) return symbol;
    if(todos[3] == todos[4] && todos[4] == todos[5] && todos[5] == symbol) return symbol;
    if(todos[6] == todos[7] && todos[7] == todos[8] && todos[8] == symbol) return symbol;

    if(todos[0] == todos[3] && todos[3] == todos[6] && todos[3] == symbol) return symbol;
    if(todos[1] == todos[4] && todos[4] == todos[7] && todos[4] == symbol) return symbol;
    if(todos[2] == todos[5] && todos[5] == todos[8] && todos[5] == symbol) return symbol;

    if(todos[0] == todos[4]  && todos[4] == todos[8]  && todos[4] == symbol) return symbol;
    if(todos[2] == todos[4]  && todos[4] == todos[6]  && todos[4] == symbol) return symbol;

    return "";
}

export default isWinner;