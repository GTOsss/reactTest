import LocalStorage from '../local-storage';

const initialState = {
  boards: startUpdateBoards(),
  numberBoard: startUpdateNumberBoard()
}

function startUpdateBoards() {
  let boards = LocalStorage.GetStorage('boards');
  if (boards === undefined || boards === null) {
    boards = [];
  }
  return boards;
}

function startUpdateNumberBoard() {
  let numberBoard = LocalStorage.GetStorage('numberBoard');
  if (numberBoard === undefined || numberBoard === null) {
    numberBoard = -1;
  }
  return numberBoard;
}

export default function table(state = initialState, action) {
  switch(action.type) {
    case 'CHANGE_BOARDS':
      state = {
        ...state,
        boards: action.payload.boards,
        numberBoard: action.payload.numberBoard
      }
  }
  return state;
}
