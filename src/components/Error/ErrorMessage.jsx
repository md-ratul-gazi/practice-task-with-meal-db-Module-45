import { useNavigate } from "react-router-dom";

const ErrorMessage = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(-1);
  };
  return (
    <div className="text-7xl h-screen flex flex-col items-center justify-center text-red-600 font-semibold gap-5">
      <h5>Oops!</h5>
      <p>404 Error</p>
      <button className="bg-gray-800 text-white rounded-xl py-1 px-4" onClick={handleNavigate}>Go Back</button>
    </div>
  );
};

export default ErrorMessage;
