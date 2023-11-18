import { useState, useEffect } from "react"; // this import allows to use 'useState' hook for managing state and 'useEffect' for handling side effects
import { Link, useLocation } from "react-router-dom"; // link for navigation, button usage, useLocation for locating the current location of an objact in a react component.
import "./style.css";

const NavBar = () => { // setting up use for navbar
  const [open, setOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(0);
  const location = useLocation();

  // tracking the screenwidth and force opening the navbar if the tab is less than 600 pixels
  const trackScreenWidth = () => { 
    const width = window.innerWidth;
    setScreenWidth(width);
    if (width > 600) {
      setOpen(true);
    }
  };
// autoclosing the navbar if the tab is maximized
  const handleClose = () => {
    if (screenWidth < 600) {
      setOpen(false);
    }
  };

  useEffect(() => {
    trackScreenWidth();
    window.addEventListener("resize", trackScreenWidth);
    return () => window.removeEventListener("resize", trackScreenWidth);
  }, []);

  return ( // linking all things in navbar to have functionality. logo returns to home, burger opens navbar, cross closes navbar, and the three links are linked to the three pages of the site.
    <nav className="navbar">
      <div className="nav-wrapper">
        <div className="logo">
          <Link to="/"> 
            <img
              src="/sun.png"
              alt="sunshine"
            />
          </Link>
        </div>
        <div className="list-wrapper">
          <img
            src="/menu-burger.png"
            alt="Menu bars"
            width="25px"
            style={{ opacity: !open ? 1 : 0 }}
            onClick={() => {
              setOpen(!open);
            }}
          />
          <img
            src="/cross.png"
            alt="Menu cross"
            width="25px"
            style={{ opacity: open ? 1 : 0 }}
            onClick={() => {
              setOpen(!open);
            }}
          />

          <ul style={{ left: open ? "0" : "-100vw" }}>
            <li>
              <Link
                to="/"
                onClick={handleClose}
                style={{ color: location.pathname === "/" && "#4071f4" }}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                onClick={handleClose}
                style={{ color: location.pathname === "/about" && "#4071f4" }}
              >
                About Me
              </Link>
              <Link
                to="/knitting"
                onClick={handleClose}
                style={{ color: location.pathname === "/knitting" && "#4071f4" }}
              >
                Knitting
              </Link>
            </li>
          </ul>
        </div>
      </div> 
    </nav>
  );
};

export default NavBar;
