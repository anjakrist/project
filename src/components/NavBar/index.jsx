import { useState, useEffect } from "react"; // this import allows to use 'useState' hook for managing state and 'useEffect' for handling side effects
import { Link, useLocation } from "react-router-dom"; // link for navigation, button usage, useLocation for locating the current location of an objact in a react component.
import "./style.css";


const NavBar = () => { // setting up use for navbar
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
              src="https://private-user-images.githubusercontent.com/143042471/283524696-593c8c42-0dc3-4055-9da7-fe7084cbebfa.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MDAxNjQ1NTUsIm5iZiI6MTcwMDE2NDI1NSwicGF0aCI6Ii8xNDMwNDI0NzEvMjgzNTI0Njk2LTU5M2M4YzQyLTBkYzMtNDA1NS05ZGE3LWZlNzA4NGNiZWJmYS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBSVdOSllBWDRDU1ZFSDUzQSUyRjIwMjMxMTE2JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDIzMTExNlQxOTUwNTVaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT02ZThkZDc5YzdkOTNlZTgwMWYxNmVhMGY3OTY2Mjk2Y2FmZTgwM2Y2OWNjNzU3ZjE1ZTMzY2VjOTAzYmZmN2YwJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.E5ByOE3M5ArkcKjouRUpll7pqgepixmlwCVZNz4x0Ys"
              width=" 30pmx"
              alt="sunshine"
            />
          </Link>
        </div>
        <div className="list-wrapper">
          <img
            src="https://private-user-images.githubusercontent.com/143042471/283527627-f08585eb-56cb-4c63-b69a-e5db74f7ceb7.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MDAxNTI4NDEsIm5iZiI6MTcwMDE1MjU0MSwicGF0aCI6Ii8xNDMwNDI0NzEvMjgzNTI3NjI3LWYwODU4NWViLTU2Y2ItNGM2My1iNjlhLWU1ZGI3NGY3Y2ViNy5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBSVdOSllBWDRDU1ZFSDUzQSUyRjIwMjMxMTE2JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDIzMTExNlQxNjM1NDFaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0wY2RhNDIwMTY2NGM5Njc2MzRkZmJmMzMwYTIzODY3ZjU1OGFlYjQ4ZTY2NjYzOWNmMDlhMTAxNjhkZGMyNjUxJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.TLCQzwzoMlNQAHDYAxjMGZl2KATgnszBniYRwbMBBXs"
            alt="Menu bars"
            style={{ opacity: !open ? 1 : 0 }}
            onClick={() => {
              setOpen(!open);
            }}
          />
          <img
            src="https://private-user-images.githubusercontent.com/143042471/283528165-4b36a96e-983a-4d7f-a925-f97059ff74dd.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MDAxNTI5MTksIm5iZiI6MTcwMDE1MjYxOSwicGF0aCI6Ii8xNDMwNDI0NzEvMjgzNTI4MTY1LTRiMzZhOTZlLTk4M2EtNGQ3Zi1hOTI1LWY5NzA1OWZmNzRkZC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBSVdOSllBWDRDU1ZFSDUzQSUyRjIwMjMxMTE2JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDIzMTExNlQxNjM2NTlaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT01NmFhMmI5YWU3MTI3ODE0M2U5MjZmYmMyOWFkZDAxYmY5Y2RmMDQ3NGEyZDM3ZjdlNDk4YTA2OWNiYmY4MTUwJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.fiHt_FbDquAguSrUrMY1lZ2wYm5EjhTCO6AhCguGSWg"
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
