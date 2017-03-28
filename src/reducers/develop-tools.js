const initialState = {
  title: 'Developer Tools!'
}

export default function devTools(state = initialState, action) {
  switch (action.type) {
    case 'SET_VALUE':
      state = {
        ...state,
        title: action.payload
      }
  }

  return state;
}