import { useLoaderData } from "react-router-dom";
import MealItem from "../MealItem/MealItem";

const MealCategory = () => {
    const data = useLoaderData();
    const allData = data.meals;
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4
       gap-5">
        {allData.map((mealItem) => (
          <MealItem key={mealItem.idMeal} mealItem={mealItem}></MealItem>
        ))}
      </div>
    );
};

export default MealCategory;