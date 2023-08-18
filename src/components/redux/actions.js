// eslint-disable-next-line import/prefer-default-export
export const fetchRandomGreeting = () => async (dispatch) => {
  const response = await fetch('http://localhost:3000/api/random_greeting');
  const data = await response.json();
  dispatch({ type: 'SET_GREETING', payload: data.greeting });
};
