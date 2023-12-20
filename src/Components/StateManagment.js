import React from "react";
import { createStore } from "redux";

let initialState = 0;
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "inc":
      return state + 1;

    case "dec":
      if ((state = 0)) {
        alert("you can not decrease 0");
      } else {
        return state - 1;
      }
    default:
      return state;
  }
};

const store = createStore(reducer);
console.log(store.getState());

store.subscribe(() => {
  console.log(store.getState());
});

const handler = ({typeOfbutton}) => {
  if (typeOfbutton === "increment") {
    return store.dispatch({ type: "inc" });
  } else {
    return 0;
  }
};

const Statemanagment = () => {
  return (
    <div>
      <div>Counter:{store.getState()}</div>
      <button onClick={}>
        increment
      </button>
      <button onClick={handler("decrement")}>decrement</button>
    </div>
  );
};

export default Statemanagment;

//  DARSIM BOR
