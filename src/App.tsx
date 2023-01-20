import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "/node_modules/flag-icons/css/flag-icons.min.css";

function App() {
  const renderFlag = (flag: string) => {
    return <span className={`fi fi-${flag} fis`}></span>;
  };
  return (
    <div className='App'>
      <header className='App-header'>
        <span className='fi fi-gr'></span> {renderFlag("fr")}
      </header>
    </div>
  );
}

export default App;
