import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./style.css";
import { SiApacheairflow } from "react-icons/si";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(0);
  const location = useLocation();

  const trackScreenWidth = () => {
    const width = window.innerWidth;
    setScreenWidth(width);
    if (width > 600) {
      setOpen(true);
    }
  };

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

  return (
    <nav className="navbar">
      <div className="nav-wrapper">
        <div className="logo">
          <Link to="/">
            <img
              src="https://private-user-images.githubusercontent.com/143042471/283332087-01ed7784-7020-4781-8046-248ff70284c9.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MDAxMTYwODYsIm5iZiI6MTcwMDExNTc4NiwicGF0aCI6Ii8xNDMwNDI0NzEvMjgzMzMyMDg3LTAxZWQ3Nzg0LTcwMjAtNDc4MS04MDQ2LTI0OGZmNzAyODRjOS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBSVdOSllBWDRDU1ZFSDUzQSUyRjIwMjMxMTE2JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDIzMTExNlQwNjIzMDZaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0xNjAxMjBkZGU2NzUwNDEzMWNiNjQ0ZWJjMGQ3MGNkMGViYzNlMzMwODFkOTk1Y2RhYzhlOTI1MWY5OGQwNzlkJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.3woIxp0nDMnkQipMUI7oS8OWQ20Orkr1OLrV8T6j_Gs"
              alt="leaf"
            />
          </Link>
        </div>
        <div className="list-wrapper">
          <img
            src="https://github.com/DwinaTech/public-images/blob/main/menu-bars.png?raw=true"
            alt="Menu bars"
            style={{ opacity: !open ? 1 : 0 }}
            onClick={() => {
              setOpen(!open);
            }}
          />
          <img
            src="https://github.com/DwinaTech/public-images/blob/main/cross-menu-icon.png?raw=true"
            alt="Menu cross"
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
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
