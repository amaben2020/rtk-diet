import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import { useAppSelector, useAppDispatch } from "./redux/hooks/hooks";
import { selectCount2 } from "./redux/features/counter2/Counter2Slice";
import {
  incrementByPayload,
  incrementCount,
  decrementCount,
} from "./../src/redux/features/counter2/Counter2Slice";

function App() {
  const counter2 = useAppSelector((state) => state.counterSlice2);

  const dispatch = useAppDispatch();
  const [state, setState] = useState(0);
  const renderFlag = (flag: string) => {
    return <span className={`fi fi-${flag} fis`}></span>;
  };

  const handleChange = (event: any) => {
    setState(event.target.value);
  };

  return (
    <div className='App'>
      <input type='number' onChange={handleChange} />

      {counter2.value}
      <header className='App-header'>
        <button onClick={() => dispatch(incrementCount())}>+</button>
        <button onClick={() => dispatch(decrementCount())}>-</button>
        <span className='fi fi-gr'></span> {renderFlag("fr")}
      </header>
    </div>
  );
}

export default App;
