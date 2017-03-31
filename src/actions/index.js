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

export function cardSave(idBoard, idCard, title, text) {
  return {
    type: 'SAVE_CARD',
    payload: {
      idBoard: idBoard,
      idCard: idCard,
      title: title,
      text: text
    }
  }
}