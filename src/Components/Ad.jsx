import React from "react";
import "./Ad.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTag } from "@fortawesome/free-solid-svg-icons";

const Ad = () => {
    return (
        <div className="ad-container">
            <FontAwesomeIcon icon={faTag} className="tag-icon" />
            <h3 className="ad-text">
                Members save <span className="colored-text">10% or more</span> on over
                <span className="colored-text"> 100,000 hotels </span> worldwide when signed in. <span className="colored-text"> Special offers with PAYPAL </span>
            </h3>
        </div>
    );
};

export default Ad;
