import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header className="bg-base-200">
      <div className="navbar">
        <div className="navbar-start"></div>
        <div className="navbar-center gap-10">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>
        <div className="navbar-end"></div>
      </div>
    </header>
  );
}

export default Navbar;
