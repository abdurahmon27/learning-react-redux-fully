const initialState = { value: 0 };
export const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        value: state.value + 1,
      };
    case "CUT":
      return {
        ...state,
        value: state.value + 1,
      };
    default:
      return state;
  }
};

export default Reducer;
