function ticTacToe(moves){
    let board = [[false, false, false],
                [false, false, false],
                [false, false, false]];
    let playerOne = true;
    for(let move of moves){
        let splitMove = move.split(' ');
        let x = Number(splitMove[0]);
        let y = Number(splitMove[1]);
        let isThereFalseFields = false;
        for(let arr of board){
            if(arr.some(x => x === false)){
                isThereFalseFields = true;
            }
        }
        if(!isThereFalseFields){
            console.log("The game ended! Nobody wins :(")
            printBoard(board);
            return;
        } else if(board[x][y] != false){
             console.log('This place is already taken. Please choose another!')
        } else if(isThereFalseFields){
            let mark;
            if(playerOne){
                mark = 'X';
            }else{
                mark = 'O';
            }
            board[x][y] = mark;
            let isWinner = false;
            //check rows
            for (let row = 0; row < board.length; row++) {
                   if(board[row][0] == mark &&
                    board[row][1] == mark &&
                    board[row][2] == mark){
                        isWinner = true;
                    }
            }
            //check cols
            for (let col = 0; col < board.length; col++) {
                if(board[0][col] == mark &&
                 board[1][col] == mark &&
                 board[2][col] == mark){
                     isWinner = true;
                 }
            }
            //check diagonals
            if(board[0][0] === mark && board[1][1] === mark && board[2][2] === mark){
                isWinner = true;
            }
            else if(board[0][2] === mark && board[1][1] === mark && board[2][0] === mark){
                isWinner = true;
            }

            if(isWinner){
                console.log(`Player ${mark} wins!`)
                printBoard(board);
                return;
             }

            playerOne = !playerOne;
        }
        
    }

    function printBoard(board){
        for(arr of board){
            console.log(arr.join('\t'));
        }
    }
}
ticTacToe(["0 1",
            "0 0",
            "0 2",
            "2 0",
            "1 0",
            "1 2",
            "1 1",
            "2 1",
            "2 2",
            "0 0"])

ticTacToe(
["0 1",
"0 0",
"0 2", 
"2 0",
"1 0",
"1 1",
"1 2",
"2 2",
"2 1",
"0 0"]
)
ticTacToe(["0 0",
"0 0",
"1 1",
"0 1",
"1 2",
"0 2",
"2 2",
"1 2",
"2 2",
"2 1"]
)
ticTacToe(["0 1",
"0 0",
"0 2",
"2 0",
"1 0",
"1 2",
"1 1",
"2 1",
"2 2",
"0 0"]
)