import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({ sushi, setStartSlice, setEndSlice, startSlice, endSlice, setPlates, plates, moneyRemaining, setMoneyRemaining }) {

  // Can I set up a variables to keep track of index? 

  function handleMoreSushi () {
    setStartSlice(startSlice+4)
    setEndSlice(endSlice+4)
  }
  


  return (
    <div className="belt">
      {sushi.map(sushi => {
        return < Sushi 
          key={sushi.id} 
          sushi={sushi} 
          setPlates={setPlates} 
          plates={plates}
          moneyRemaining={moneyRemaining}
          setMoneyRemaining={setMoneyRemaining} />
      })}
      <MoreButton handleMoreSushi={handleMoreSushi}/>
    </div>
  );
}

export default SushiContainer;
