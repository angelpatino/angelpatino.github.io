// chessboard-init.js

$(document).ready(function() {
  var board = Chessboard('board1', {
    draggable: true,
    dropOffBoard: 'trash',
    position: 'rnbqkbnr/pppppppp/8/8/1P6/8/P1PPPPPP/RNBQKBNR w KQkq - 0 1'
  });

});
