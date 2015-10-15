/*****************
*	My Little Pony™ and Connect4™ ©Hasbro, Inc.
*	Author: Kyle Gorjanc
*	Date: 10/15/2015
*****************/
$(function(){
console.log('Lock \'n load, everypony!')


// To play the game you need two players, a game board, and some chips. Let's make those.
//if 1 player mode, Player 2 === computer.
Player = function(name, pony){
	this.name = name;
	this.pony = pony;
}

Player1 = new Player(Player1, getPony());
Player2 = new Player(Player2, getPony());

//A cell needs to have a value
// accept a new value when played
// not accept new values when not played
Cell = function() {
	this.value = 0;
	this.getValue = function() {
	}
	this.canPlay = function() {

	}
}

//A column needs to have 6 cells.
//if all 6 are full, it must tell you "no more!"
//else if !full...
//A column will only have one cellInPlay: the bottom-most cell.

Column = function() {
	this.canPlay = true;
	this.cells = [];
	this.cellInPlay = cells[0];
}

//A board must have 7 Columns.
//must determine if 1 player mode or 2 player mode
//must start with Player 1 as the current player.
//must place a click event on a Column.
//The click will put the current player's chip on that Column's cell in play.
//The click will remove the cell in Play from the Column.cells array.
//The board will check for a Winner
	//if winner is found, show the Winner Board
//The current player will switch to the other player.

Board = function() {
	this.columns = [];
	this.cells = [];
	this.playerMode = playerMode;
	this.currentPlayer = "";
	this.winner = "";
}

Board.prototype.makeBoard = function(){
	var $colDivs = $('.column');
	if (this.columns = []) {
		$cellDivs.each(value){
			this.cells.push(new Column);
		};
	} 
}





//at the start, there is a start screen that covers the game board. 
//This screen will have "1 player start" and "2 player start" buttons.
//We'll call this Screen 1.
var startScreen = function(){
	var field = $(<div>).overlay.attr('id', 'start');
	var onePlayerButton = $(<button>).button.attr('id', 'onePlayerButton');
	var twoPlayerButton = $(<button>).button.attr('id', 'twoPlayerButton');
	field.append(onePlayerButton);
	field.append(twoPlayerButton);
}
// Screen 2  //Player1Choose
	//Player 1 chooses a pony.
	//getPony = function() {
		// all four ponies are shown. 
		// Player 1 clicks a pony
		// that pony becomes assigned to the 'pony' attribute of Player 1. 
// Screen Player2Choose - only shown if 2 player selected. Else, computer will randomly pick a pony.
	//Player 2 chooses a pony.
	// three ponies are shown: all ponies less the player 1 pony.
	// Player 2 clicks a pony and that becomes assigned to the 'pony' attribute of Player 2.
// Screen 4 - game play.
// Screen 5 WinnerScreen- announce the winner, ask 'do you want to play again?'
//			If yes - back to screen 2.  Else, load the MLP homepage.





})