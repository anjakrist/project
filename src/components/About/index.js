import './style.css'; // Importing styling from the .css folder
import React from "react";
import { Link } from "react-router-dom"; // using this to make a word linked to the knitting page


// code for displaying text and image for the 'About' page

const About = () => {
    return (
        <div className="about">
            <div>
                <img 
                    src="/mountains.jpeg"
                    width ="1300 pmx"
                    className="photo"
                    alt="Anja's Mountain "
                />
            </div> 
            <br/> 
            <h1>About Me</h1>
            <p>
                Hi! My name is Anja Kristoffersen, and I am a freshman at UNC-Chapel Hill. I intend to major in Computer Science and minor in MEMS.
            </p>
            <br/>
            <p>
            I was born in Scottsdale, Arizona, and moved to Wake Forest, North Carolina when I was two years old. I went to Wake Forest High School, where I ran Cross-Country and Track, and also competed in Science Olympiad. After high school, I took a year off to study in Norway before beginning university at UNC.
            </p> 
            <br/>
            <p>

            I am currently taking five courses: Norwegian 201, Comp 110, English 105, College Thriving, Beginning Jogging.
            Next semester, I will take English 128 (Modern American Authors), Comp 210, Math 381, The Art and Science of Expertise, and SPGH 81.
            </p>
            <br/>
            <p>
            Outside of school, I enjoy hiking, <Link to ="Knitting">knitting</Link>, and talking with friends. Fun Fact! I get paid to 'test knit' knitting patterns for knitting designers - it's a really niche way to make a bit of extra cash!
            </p>
        
        </div>
    )
}

export default About