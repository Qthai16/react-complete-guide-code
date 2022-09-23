import React, { useState, useEffect } from "react";
import Header from "./components/Layout/Header/Header";
import MealList from "./components/Meals/MealsList";
import CartModal from "./components/Modal/CartModal";

function App() {
  const availableMeals = [
    {
      name: "Sushi",
      description: "Finest fish and veggies",
      prices: "$22.99",
    },
    {
      name: "Schnitzel",
      description: "A german specialty",
      prices: "$16.50",
    },
    {
      name: "Barbecue Burger",
      description: "American, raw, meaty",
      prices: "$12.99",
    },
    {
      name: "Green Bowl",
      description: "Healthy...and green...",
      prices: "$18.99",
    },
  ];
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState({totalAmount: 0, totalPrices: 0});
  const [showCart, setShowCart] = useState(false);
  const addItemHandler = (item) => {
    setItems((prevItems) => {
      const index = prevItems.findIndex(
        (element) => element.name === item.name
      );
      if (index >= 0) {
        prevItems[index].amount += item.amount;
        return [...prevItems];
      }
      return [...prevItems, item];
    });
  };
  const showCartHandler = () => {setShowCart(true)};
  const closeCartHandler = () => {setShowCart(false)};
  useEffect(() => {
    const totalAmount = items.reduce(
      (prevVal, currVal) => prevVal + +currVal.amount,
      0
    );
    const totalPrices = items.reduce(
      (prevVal, currVal) =>
        prevVal + +(+currVal.prices.replace("$", "") * +currVal.amount),
      0
    );
    const total = { totalAmount: totalAmount, totalPrices: totalPrices };
    console.log(items);
    console.log(total);
    setTotal(total);
  }, [items]);

  return (
    <>
      <Header label="ReactMeals" totalAmount={total.totalAmount} onShowCart={showCartHandler}/>
      <MealList mealItems={availableMeals} onAddMeal={addItemHandler} />
      {showCart && (
        <CartModal
          mealItems={items}
          message="Total Amount"
          totalPrices={total.totalPrices}
          onShowCart={showCartHandler}
          onCloseCart={closeCartHandler}
          onAddMeal={addItemHandler}
        />
      )}
    </>
  );
}

export default App;
