const initialState = { value: 0, nameOfThing: "thing" };
export const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        value: state.value + 1,
        nameOfThing: state.nameOfThing
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
