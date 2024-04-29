import React, { useState } from 'react';
import './WelcomePage.css';
import { Link } from "react-router-dom";

const WelcomePage = () => {
    // State to track if the button has been clicked
    const [buttonClicked, setButtonClicked] = useState(false);

    // Function to handle button click
    const handleButtonClick = () => {
        setButtonClicked(true);
    };

    // Render WelcomePage only if button has not been clicked
    if (!buttonClicked) {
        return (
            <div className="welcome-container">
                <div className="background-animation"></div>
                <div className="content">
                <h1>Welcome to MobileWALA</h1>
<p>Explore our wide range of fresh products</p>
<p>Dive into the latest in mobile innovation and unlock exclusive deals on the hottest smartphones and accessories!</p>

                    {/* Link to navigate to the ProductCard page */}
                    <Link to="/" onClick={handleButtonClick}>
                        <button>Shop Now</button>
                    </Link>
                </div>
            </div>
        );
    } else {
        // If button has been clicked, return null to hide the WelcomePage
        return null;
    }
}

export default WelcomePage;