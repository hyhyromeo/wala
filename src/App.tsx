import React, { useState } from "react";
import "./App.css";
import SelectBox from "./components/SelectBox.tsx";

function App() {
  const [columns, setColumns] = useState(3);
  // Options array with default values
  const options = [
    { id: "aaa", label: "aaa", checked: false },
    { id: "bbb", label: "bbb", checked: false },
    { id: "ccc", label: "ccc", checked: false },
    { id: "ddd", label: "ddd", checked: false },
    { id: "eee", label: "eee", checked: false },
    { id: "fff", label: "fff", checked: false },
    { id: "ggg", label: "ggg", checked: false },
    { id: "hhh", label: "hhh", checked: false },
    { id: "iii", label: "iii", checked: false },
    { id: "jjj", label: "jjj", checked: false },
    { id: "kkk", label: "kkk", checked: false },
    { id: "lll", label: "lll", checked: false },
    { id: "mmm", label: "mmm", checked: false },
    { id: "nnn", label: "nnn", checked: false },
    { id: "ooo", label: "ooo", checked: false },
    { id: "ppp", label: "ppp", checked: false },
    { id: "qqq", label: "qqq", checked: false },
    { id: "rrr", label: "rrr", checked: false },
    { id: "sss", label: "sss", checked: false },
    { id: "ttt", label: "ttt", checked: false },
    { id: "uuu", label: "uuu", checked: false },
    { id: "vvv", label: "vvv", checked: false },
    { id: "www", label: "www", checked: false },
    { id: "xxx", label: "xxx", checked: false },
    { id: "yyy", label: "yyy", checked: false },
    { id: "zzz", label: "zzz", checked: false },
  ];

  const handleDecreaseColumns = () => {
    // Decrease columns by 1, but not below 1
    setColumns((prev: number) => Math.max(1, prev - 1));
  };

  const handleIncreaseColumns = () => {
    // Increase columns by 1, but not above 28
    setColumns((prev: number) => Math.min(28, prev + 1));
  };

  return (
    <div className="App">
      <SelectBox options={options} columns={columns} />
      <div className="columns-control">
        <span>columns: </span>
        <button disabled={columns === 1} onClick={handleDecreaseColumns}>
          -
        </button>
        <span>{columns}</span>
        <button disabled={columns === 28} onClick={handleIncreaseColumns}>
          +
        </button>
      </div>
    </div>
  );
}

export default App;
