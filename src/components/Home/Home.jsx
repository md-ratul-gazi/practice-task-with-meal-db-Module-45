import { NavLink, Outlet, useLoaderData } from "react-router-dom";
import Header from "../Header/Header";

const Home = () => {
  const meal = useLoaderData();
  const allMealData = meal.categories;
  return (
    <div className="mx-7 mt-7">
      <Header></Header>
      <div className="flex flex-wrap justify-center gap-4 my-4">
        {allMealData.map((meal) => (
          <NavLink
            className="bg-red-500 rounded-lg px-4 py-1 text-xl font-semibold text-white"
            key={meal.idCategory}
            to={`/meal/${meal.strCategory}`}
          >
            {meal.strCategory}
          </NavLink>
        ))}
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default Home;
