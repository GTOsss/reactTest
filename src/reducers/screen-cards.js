import LocalStorage from '../local-storage';

const initialState = {
  screensCard: UpdateCards(),
}

function UpdateCards() {
  let boards = LocalStorage.GetStorage('boards');
  if (boards === null || boards === undefined) {
    boards = [];
  }

 let cardsObj = boards.map((el) => {
    let boofCards = LocalStorage.GetStorage('cardsBoard' + el.id);
    if (boofCards === null || boofCards === undefined) {
      boofCards = [];
    }
    return {
      idBoard: el.id,
      cards: boofCards
    };
  });
  return cardsObj;
}

export default function screenCards(state = initialState, action) {
  switch (action.type) {
    case 'CHANGE_CARDS':
      state = {
        ...state,
        screensCard: [...state.screensCard, ...UpdateCards()]
      };
      break;
  }
  return state;
}