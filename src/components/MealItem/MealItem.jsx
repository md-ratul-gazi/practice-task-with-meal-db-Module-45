import { Link, useNavigate } from "react-router-dom";

const MealItem = ({ mealItem }) => {
  const {
    idMeal,
    strMeal,
    strCategory,
    strArea,
    strInstructions,
    strMealThumb,
    strYoutube,
  } = mealItem;
  const slice = strInstructions.slice(0, 130);

  const navigate = useNavigate();

  const handleShowDetails = () => {
    navigate(`/meal/${strMeal}/${idMeal}`);
  };

  return (
    <div className="bg-gray-900 border text-white rounded-xl p-5 flex flex-col">
      <img
        className="w-full rounded-xl mb-4"
        src={strMealThumb}
        alt={`${strCategory} image`}
      />
      <h2 className="flex-grow text-xl font-semibold text-indigo-400">
        Food Name: {strMeal.slice(0, 24)}
      </h2>

      <p className="text-xl  text-red-500 font-semibold my-2">
        Category: {strCategory}
      </p>
      <p className="border-b pb-3 font-medium text-lg">{strArea} Food</p>

      <p className="font-medium flex-grow mt-3">{slice}</p>
      <button
        className="text-2xl bg-red-500 px-3 py-1 rounded-lg
          text-white font-medium mt-3"
        onClick={handleShowDetails}
      >
        Show Details
      </button>
    </div>
  );
};

export default MealItem;
