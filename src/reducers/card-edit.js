import LocalStorage from '../local-storage';

const initialState = {

}

export default function editCard(state = initialState, action) {
  switch (action.type) {
    case 'SAVE_CARD':
      LocalStorage.UpdateCard('cardsBoard'+action.payload.idBoard,
                              action.payload.idCard,
                              action.payload.title,
                              action.payload.text)
      state = {
        ...state,

      }

      console.log(state);
  }

  return state;
}