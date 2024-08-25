import { NavLink } from "react-router-dom";

// import { logo } from "../assets/images";
import { logo } from "../assets/images";
const Navbar = () => {
  return (
    <header className="header">
      <NavLink
        to="/"
        className="w-11 h-11 rounded-lg sm:m-4 bg-gradient-to-b from-[#68daf7] to-[#cdefff] flex items-center justify-center"
      >
        <img src={logo} alt="logo" className="w-10 h-10 object-contain" />
      </NavLink>

      <nav className="flex text-lg gap-6 font-medium items-center sm:gap-3">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-blue-600" : "text-black"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? "text-blue-600" : "text-black"
          }
        >
          Projects
        </NavLink>
        <button className="bg-sky-200 hover:bg-sky-300 text-black font-bold py-1 px-4 rounded transition duration-300 ease-in-out">
          <a href="https://drive.google.com/file/d/1QbIK6T22Uy0L3cuZaS6WdWJNG_uJJhBJ/view" target="_blank">Resume</a>
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
