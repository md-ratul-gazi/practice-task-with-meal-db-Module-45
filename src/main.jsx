import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// import react router
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import Meal from "./components/Meals/Meals.jsx";
import MealCategory from "./components/MealCategory/MealCategory.jsx";
import ErrorMessage from "./components/Error/ErrorMessage.jsx";
import ShowDetails from "./components/ShowDetails/ShowDetails.jsx";

// Create browser router path
const router = createBrowserRouter([
  {
    path: "/",
    loader: () =>
      fetch("https://www.themealdb.com/api/json/v1/1/categories.php"),
    element: <Home></Home>,
    errorElement: <ErrorMessage></ErrorMessage>,
    children: [
      {
        path: "/meal",
        loader: () =>
          fetch("https://www.themealdb.com/api/json/v1/1/categories.php"),
        element: <Meal></Meal>,
      },
      {
        path: "/meal/:mealId",
        loader: ({ params }) =>
          fetch(
            `https://www.themealdb.com/api/json/v1/1/search.php?s=${params.mealId}`
          ),
        element: <MealCategory></MealCategory>,
      },
      {
        path: "/meal/:str/:id",
        loader: ({ params }) =>
          fetch(
            `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.id}`
          ),
        element: <ShowDetails></ShowDetails>
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
