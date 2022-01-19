import fetchGreetings from './api';

const GET_GREETING = 'greetings/random';

export const getRandomGreeting = (payload) => ({
  type: GET_GREETING,
  payload,
});

export const fetchRandomGreeting = () => async (dispatch) => {
  const response = await fetchGreetings();
  const max = 5;
  const min = 0;
  const a = Math.floor(Math.random() * (max - min + 1)) + min;
  dispatch(getRandomGreeting(response[a].greeting));
};

const initialState = '';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GREETING:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
