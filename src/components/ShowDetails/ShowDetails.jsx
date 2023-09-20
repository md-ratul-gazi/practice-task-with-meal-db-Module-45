import { Link, useLoaderData, useNavigate } from "react-router-dom";

const ShowDetails = () => {
  const data = useLoaderData();
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(-1);
  };
  const allData = data.meals[0];
  const { strMealThumb, strYoutube, strMeal } = allData;
  return (
    <div className="text-white flex justify-center items-center my-40 bg-indigo-950 py-5 rounded-xl border">
      <img className="w-1/3 rounded-xl" src={strMealThumb} alt={strMeal} />
      <div className="w-1/2 font-semibold ml-5">
        <h2 className="text-4xl">Food Name: {strMeal}</h2>
        <div>
          <a
            className="text-3xl"
            href={strYoutube}
            target="_blank"
            rel="noreferrer"
          >
            See Overview
          </a>
        </div>
        <button
          className="text-2xl bg-red-500 px-3 py-1 rounded-lg
          text-white font-medium mt-3"
          onClick={handleNavigate}
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default ShowDetails;
