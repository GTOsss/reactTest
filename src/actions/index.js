export function boardsChange(boards, numberBoards) {
  return {
    type: 'CHANGE_BOARDS',
    payload: {
      boards: boards,
      numberBoard: numberBoards
    }
  }
}

export function cardsChange(idBoard, cards) {
  return {
    type: 'CHANGE_CARDS',
    payload: {
      idBoard: idBoard,
      cards: cards
    }
  }
}