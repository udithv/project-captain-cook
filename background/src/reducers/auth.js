
export default (state = 'hi', action) => {
  switch (action.type) {
    case 'FETCH_USER':
      return action.payload || false;
    default:
      return state;
  }
};