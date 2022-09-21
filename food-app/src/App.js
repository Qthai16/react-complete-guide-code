import React, { useState, useEffect } from "react";
import Header from "./components/Layout/Header/Header";
import Meals from "./components/Meals/Meals";

function App() {
  const [items, setItems] = useState([]);
  const addItemHandler = (item) => {
    setItems((prevItems) => {
      return [...prevItems, item ] ;
    });
  };
  useEffect(() => {
    console.log(items);
  }, [items]);

  return (
    <>
      <Header label="ReactMeals"/>
      <Meals
        name="Sushi"
        description="Finest fish and veggies"
        prices="$22.99"
        onAddMeal={addItemHandler}
      />
      <Meals
        name="Schnitzel"
        description="A german specialty"
        prices="$16.50"
        onAddMeal={addItemHandler}
      />
    </>
  );
}

export default App;
