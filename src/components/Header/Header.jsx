import { Link, NavLink } from "react-router-dom";
import './Header.css';

const Header = () => {
  // store the handleData
  return (
    <div className="flex justify-center">
      <NavLink
        className="text-2xl bg-red-500 px-3 py-1 rounded-lg
          text-white font-medium"
        to="/Meal"
      >
        Home
      </NavLink>
    </div>
  );
};

export default Header;
