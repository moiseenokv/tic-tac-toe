class TicTacToe {
    constructor() {
        this.player = 'x';
        this.step = 0;
        this.field = [[null, null, null],
                      [null, null, null],
                      [null, null, null]];
    }

    changePlayer(){
        if(this.player=='x'){
            this.player='o'
        }else{
            this.player='x';
        }
    }

    getCurrentPlayerSymbol() {
      return this.player;
    }

    nextTurn(rowIndex, columnIndex) {
        if(this.field[rowIndex][columnIndex]===null){
            if(this.player=='x'){
                this.field[rowIndex][columnIndex]=1;
            }else{
                this.field[rowIndex][columnIndex]=0;
            }
            this.step++;
            this.changePlayer();
        }
    }

    isFinished() {
        const winner= this.getWinner();
        if(winner !== null || this.step >=9){
            return true;
        }else{
            return false;
        }
    }

    getWinner() {
        if(
            (this.field[0][0]==1  && this.field[0][1]==1 && this.field[0][2]==1) ||
            (this.field[1][0]==1  && this.field[1][1]==1 && this.field[1][2]==1) ||
            (this.field[2][0]==1  && this.field[2][1]==1 && this.field[2][2]==1) ||

            (this.field[0][0]==1  && this.field[1][0]==1 && this.field[2][0]==1) ||
            (this.field[0][1]==1  && this.field[1][1]==1 && this.field[2][1]==1) ||
            (this.field[0][2]==1  && this.field[1][2]==1 && this.field[2][2]==1) ||

            (this.field[0][0]==1  && this.field[1][1]==1 && this.field[2][2]==1) ||
            (this.field[0][2]==1  && this.field[1][1]==1 && this.field[2][0]==1)
            ){
                return 'x';
            }else if(
                (this.field[0][0]==0  && this.field[0][1]==0 && this.field[0][2]==0) ||
                (this.field[1][0]==0  && this.field[1][1]==0 && this.field[1][2]==0) ||
                (this.field[2][0]==0  && this.field[2][1]==0 && this.field[2][2]==0) ||

                (this.field[0][0]==0  && this.field[1][0]==0 && this.field[2][0]==0) ||
                (this.field[0][1]==0  && this.field[1][1]==0 && this.field[2][1]==0) ||
                (this.field[0][2]==0  && this.field[1][2]==0 && this.field[2][2]==0) ||

                (this.field[0][0]==0  && this.field[1][1]==0 && this.field[2][2]==0) ||
                (this.field[0][2]==0  && this.field[1][1]==0 && this.field[2][0]==0)
            ){
                return 'o';
            }
        return null;
    }

    noMoreTurns() {
        if(this.step < 9){
            return false;
        }else{
            return true;
        }
    }

    isDraw() {
        if(this.isFinished() == false || this.getWinner() != null){
            return false
        }else{
            return true;
        }
    }

    getFieldValue(rowIndex, colIndex) {
        if(this.field[rowIndex][colIndex]==1){
            return 'x'
        }else if(this.field[rowIndex][colIndex]==0){
            return 'o'
        }else{
            return null;
        }
        
    }
}

module.exports = TicTacToe;
