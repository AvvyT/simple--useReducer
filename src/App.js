import React, { useReducer } from 'react';
import './App.css';

const initialState = { count: 0 };

function Init(initialCount) {
  return { count: initialCount };
}


function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      if (state.count < 20) {
        return { count: state.count + 1 };
      } else {
        return state;
      }
    case 'decrement':
      if (state.count > 0) {
        return { count: state.count - 1 };
      } else {
        return state;
      }
    case 'reset':
      return Init(action.restart);
    default:
      return state;
  }
}

function Counter() {

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <header className="App">
        <h1>Count: {state.count}</h1>

        <button onClick={() =>
          dispatch({ type: 'reset', restart: 0 })}> Reset </button>
        <button onClick={() =>
          dispatch({ type: 'increment' })}>+</button>
        <button onClick={() =>
          dispatch({ type: 'decrement' })}>-</button>
      </header>
    </div>
  );
}

export default Counter;
