import {React, useEffect, useState} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {

  const [sushi, SetSushi] = useState([])
  const [startSlice, setStartSlice] = useState(0)
  const [endSlice, setEndSlice] = useState(4)

  const [plates, setPlates] = useState([]) // Keeps track of empty plates

  const [moneyRemaining, setMoneyRemaining] = useState(150)

  useEffect(() => { 
    fetch("http://localhost:3001/sushis")
      .then(response => response.json())
      .then(src => src.slice(startSlice, endSlice))
      .then(sliced => SetSushi(sliced))

  }, [startSlice])


  return (
    <div className="app">
      <SushiContainer 
        sushi={sushi} 
        setStartSlice={setStartSlice} 
        setEndSlice={setEndSlice} 
        startSlice={startSlice}
        endSlice={endSlice}
        setPlates={setPlates}
        plates={plates}
        moneyRemaining={moneyRemaining}
        setMoneyRemaining={setMoneyRemaining}/>
      <Table 
        plates={plates}
        moneyRemaining={moneyRemaining}/>
    </div>
  );
}

export default App;
