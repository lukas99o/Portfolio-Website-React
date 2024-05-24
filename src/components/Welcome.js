import React from "react";
import { useHistory } from "react-router-dom";

function Welcome() {
    const history = useHistory();

    const handleGetStartedClick = () => {
        history.push("/Me");
    };

    return (
        <div className="welcome-container">
            <div className="welcome-content">
                <h1>Welcome to My Website!</h1>
                <h2>Explore, learn, and connect with me.</h2>
                <p>
                I'm glad you're here! This website is a showcase of my projects,
                skills, and experiences. Feel free to navigate through the different
                sections using the links in the navbar above.
                </p>
                <p>
                Whether you're here to learn more about my work, get in touch, or just
                browse around, I hope you find everything you need.
                </p>
                <button className="welcome-button" onClick={handleGetStartedClick}>Get Started</button>
            </div>
        </div>
    );
}

export default Welcome;