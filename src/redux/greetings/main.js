import fetchGreetings from './api';

const GET_RANDOM_GREETING = 'greetings/random';

export const getRandomGreeting = (payload) => ({
  type: GET_RANDOM_GREETING,
  payload,
});

export const fetchRandomGreeting = () => async (dispatch) => {
  const response = await fetchGreetings();
  dispatch(getRandomGreeting(response));
};

const initialState = {
  greeting: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RANDOM_GREETING:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
