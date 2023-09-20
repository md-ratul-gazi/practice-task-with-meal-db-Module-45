import { useLoaderData } from "react-router-dom";
import Meal from "../Meal/Meal";

const Meals = () => {
  // get meal Data
  const meal = useLoaderData();
  const allMealData = meal.categories;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
      {allMealData.map((meal) => (
        <Meal key={meal.idCategory} meal={meal}></Meal>
      ))}
    </div>
  );
};

export default Meals;
