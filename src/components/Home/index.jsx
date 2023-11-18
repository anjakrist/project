import { Link } from "react-router-dom"; // This import allows the button ability, being able to navigate between pages
import "./style.css";

const Home = () => {
    return ( // nesting a bunch of divs together - first for the home page in general, one div for the title, and another for the button!
        <div className="home">
            <div className="title">
                <span className="font-link">
                    <h1>
                    <p>Hi-</p>
                    <p>I'm Anja!</p> 
                    <p>Want to know more about me?</p>
                    </h1>
                </span>
                <Link to="about"> 
                    <button>Click this button!</button>
                </Link>
            </div>
            <div >
                <img
                    src="/dansk.jpeg"
                    width = "500 pmx"
                    className="photo"
                    alt="React"
                />
            </div>
        </div>
    );
};



export default Home;