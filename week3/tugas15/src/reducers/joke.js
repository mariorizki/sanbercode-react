const initialState = {
  joke: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_JOKE':
      return {
        ...state,
        joke: action.payload
      };
    default:
      return state;
  }
};
