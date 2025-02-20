import React from "react";

function About({about, image="https://via.placeholder.com/215Links"}){
    return (
        <aside>
            <img src={image} alt="blog logo"></img>
            <p>{about}</p>
        </aside>
    )
}

export default About