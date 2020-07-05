const _increment = () => ({
  type: 'INCREMENT'
});

const _decrement = () => ({
  type: 'DECREMENT'
});

const _joke = () => ({
  type: 'GET_JOKE'
});

export function incrementAsync() {
  return async dispatch => {
    setTimeout(() => {
      dispatch(_increment());
    }, 5000);
  };
}

export function decrementAsync() {
  return async dispatch => {
    setTimeout(() => {
      dispatch(_decrement());
    }, 5000);
  };
}

export const getJoke = () => async (dispatch, getState) => {
  try {
    const res = await fetch('https://api.chucknorris.io/jokes/random');
    const data = await res.json();
    console.log(data);
    dispatch({ _joke, payload: data });
  } catch (error) {
    console.error('error');
  }
};
