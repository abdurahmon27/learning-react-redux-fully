import React, { useRef } from "react";
import { createStore } from "redux";
import Reducer from "./redux/reducer";
import { add, cut } from "./redux/action";
import Container from "./UI/Container";

const Statemanagment = () => {
  return (
    <div>
      <FirstComponent />
      <SeconComponent />
    </div>
  );
};

export default Statemanagment;

//First Component

const FirstComponent = () => {
  const refOfSpan = useRef(null);

  let initialState = 0;
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case "inc":
        return state + 1;
      case "dec":
        return state - 1;
      default:
        return state;
    }
  };

  const store = createStore(reducer);

  store.subscribe(() => {
    let state = store.getState();
    refOfSpan.current.textContent = state;
  });

  const handleInc = () => {
    store.dispatch({ type: "inc" });
  };

  const handleDec = () => {
    store.dispatch({ type: "dec" });
  };
  return (
    <div>
      <div>
        Counter: <span ref={refOfSpan}>0</span>
      </div>
      <button onClick={handleInc}>increment</button>
      <button onClick={handleDec}>decrement</button>
    </div>
  );
};

// Second Component
const SeconComponent = () => {
  const justRef = useRef(null);
  const secondStore = createStore(Reducer);
  secondStore.subscribe(() => {
    let sth = secondStore.getState().value;
    justRef.current.textContent = sth;
  });
  const handleAdd = () => {
    secondStore.dispatch(add());
  };
  return (
    <Container>
      <span ref={justRef}>0</span>
      <button onClick={handleAdd}>Add</button>
    </Container>
  );
};
