import { Link } from "react-router-dom";
import "./style.css";

const Home = () => {
    return (
        <div className="home">
            <div className="title">
                <span className="font-link">
                    <h1>
                    <p>Hi!</p>
                    <p>I'm Anja-</p>
                    <p>And this is my site!</p>
                    </h1>
                </span>
                <Link to="about"> 
                    <button>More About Me</button>
                </Link>
            </div>
            <div>
                <img
                    src="https://camo.githubusercontent.com/5693dffcb23bddf755e49ce14b3721bfd8971284c78835c204ce83a54a3fbbcf/68747470733a2f2f692e696d6775722e636f6d2f6657595a3842512e6a7067" width = "500 pmx"
                    className="photo"
                    alt="React Image"
                />
            </div>
        </div>
    );
};



export default Home;