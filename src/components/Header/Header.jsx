import { NavLink } from "react-router-dom";
import "./Header.css";
import { useContext } from "react";
import { NewsContext } from "../Context API/NewsContext";


function Header() {
  const { setSearch, fetchData } = useContext(NewsContext);




  const handleInput = (e) => {
    console.log(e.target.value);
    setSearch(e.target.value);
  };

  return (
    <nav>
      <div className="txtDiv">
        <h1 className="navDiv">A</h1>
      </div>
      <ul className="navbar">
        <li>
          <NavLink to="/">News</NavLink>
        </li>
        <l>
          <NavLink to="/About">About</NavLink>
        </l>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
      <div className="btns">
        <input className="search-bar" type="text" onChange={handleInput} />
        <button onClick={fetchData} className="search">
          search
        </button>
      </div>
    </nav>
  );
}

export default Header;
