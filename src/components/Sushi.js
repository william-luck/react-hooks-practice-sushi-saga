import {React, useState} from "react";

function Sushi({ sushi, setPlates, plates, moneyRemaining, setMoneyRemaining}) {

  const {name, img_url, price} = sushi

  const [eaten, setEaten] = useState(false)

  function handleEaten() {

    if (moneyRemaining >= price) {
      setEaten(!eaten) // toggles display below
    
      setPlates([...plates, true]) // Adds an element to an empty plates array
  
      setMoneyRemaining(moneyRemaining - price) // subtracts by price of sushi.
    }

   
    

    // Interesting, only do the above three if money remaning greater than/equal price.


  }

  

  return (
    <div className="sushi">
      <div className="plate" onClick={handleEaten}>
        {eaten ? null : (
          <img
            src={img_url}
            alt={name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
