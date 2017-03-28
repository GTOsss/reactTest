import LocalStorage from '../local-storage';

const initialState = {
  title: 'Board',
  cards: LocalStorage.GetStorage('boards')
}

export default function board(state = initialState, action) {
  switch(action.type) {
    case 'CHANGE_CARDS':
      state = {
        ...state,
        cards: action.payload.cards,
        numberCards: action.payload.numberCards
      }
  }
  return state;
}

