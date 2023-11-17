import './style.css'; // Importing styling from the .css folder
import React from "react";

// Code for displaying text and image for the 'About' page

const About = () => {
    return (
        <div className="about">
            <div>
                <img // setting up the mountain banner used
                    src="https://private-user-images.githubusercontent.com/143042471/283531067-d68e1c39-e9f4-49bd-8967-305ee4dc445d.jpg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MDAxODcxODUsIm5iZiI6MTcwMDE4Njg4NSwicGF0aCI6Ii8xNDMwNDI0NzEvMjgzNTMxMDY3LWQ2OGUxYzM5LWU5ZjQtNDliZC04OTY3LTMwNWVlNGRjNDQ1ZC5qcGc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBSVdOSllBWDRDU1ZFSDUzQSUyRjIwMjMxMTE3JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDIzMTExN1QwMjA4MDVaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1iZGRjN2JiNWIxMWU3OTM2YTY0NGNjYzAzNTQ3NjNlYmYyNWI0YWUxMDM3ZTI4Njc4ZjA2NTIxMDA1YTE3MDhhJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.JqtSygBVp8M5GWsvaNu8OWpjhQqmfdHpUqHU3SImF8I"
                    width ="1300 pmx"
                    className="photo"
                    alt="Anja's Mountain Photo"
                />
            </div> 
            <br/> 
            <h1>About Me</h1>
            <p>
                Hi! My name is Anja Kristoffersen, and I am a freshman at UNC-Chapel Hill. I intend to major in Computer Science and minor in English Literature.
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
            Outside of school, I enjoy hiking, knitting, and talking with friends. Fun Fact! I get paid to 'test knit' knitting patterns for knitting designers - it's a really niche way to make a bit of extra cash!
            </p>
        
        </div>
    )
}

export default About