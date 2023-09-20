const Meal = ({ meal }) => {
  console.log(meal);
  const des = meal.strCategoryDescription;
  const sliceDes = des.slice(0, 150);

  return (
    <div>
      <div className="bg-gray-900 border text-white rounded-xl p-5">
        <img
          className="w-full"
          src={meal.strCategoryThumb}
          alt={`${meal.strCategory} image`}
        />
        <h2 className="text-3xl text-red-500 font-semibold border-b pb-3">
          {meal.strCategory}
        </h2>
        <p className="font-medium mt-3">{sliceDes}</p>
      </div>
    </div>
  );
};

export default Meal;
