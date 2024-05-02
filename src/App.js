import { useReducer } from "react";

function counerReducer(state, action) {
  switch (action.type) {
    case "INC":
      return state + 1;
    case "DEC":
      return state + 1;
    case "RESET":
      return 0;
    default:
      return state;
  }
}

function App() {
  const [counter, dispatch] = useReducer(counerReducer, 0);

  return (
    <div className="mt-4 d-flex">
      <button
        onClick={() => {
          dispatch({ type: "DEC" });
        }}
        className="btn btn-primary m-2"
      >
        -
      </button>
      <div className="m-2">counter:{counter}</div>
      <button
        onClick={() => {
          dispatch({ type: "INC" });
        }}
        className="btn btn-primary m-2"
      >
        +
      </button>

      <button
        onClick={() => {
          dispatch({ type: "RESET" });
        }}
        className="btn btn-danger m-2"
      >
        Reset
      </button>
    </div>
  );
}

export default App;
