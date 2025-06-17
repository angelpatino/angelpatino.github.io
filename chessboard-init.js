const config1 = {
  pieceTheme: 'img/chesspieces/alpha/{piece}.png',
  position: 'rnbqkbnr/pppppppp/8/8/1P6/8/P1PPPPPP/RNBQKBNR w KQkq - 0 1'
}

const config2 = {
  pieceTheme: 'img/chesspieces/alpha/{piece}.png',
  position: 'rnbqkbnr/pppp1ppp/8/4p3/1P6/8/PBPPPPPP/RN1QKBNR b KQkq - 0 1'
}

const board1 = Chessboard2('board1', config1)
const board2 = Chessboard2('board2', config2)
