import React from "react";
import Card from "../UI/Card/Card";
import Meals from "./Meals";

const MealList = (props) => {
  if (props.mealItems.length === 0) {
    return <></>;
  }
  return (
    <Card>
      {props.mealItems.map((item, index) => {
        return (
          <Meals
            key={`${item.name} ${index}`}
            name={item.name}
            description={item.description}
            prices={item.prices}
            onAddMeal={props.onAddMeal}
          />
        );
      })}
    </Card>
  );
};

export default MealList;