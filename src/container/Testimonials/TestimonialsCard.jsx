import React from "react";
import "./TestimonialsCard.css";

const TestimonialsCard = ({ text, userName, stars }) => {
    const rate = [];

    for (let i = 0; i < stars; i++) {
        rate.push(
            <i
                key={i}
                className="fa-solid fa-star"
                style={{ color: "orange" }}
            ></i>
        );
    }

    return (
        <div className="testimonialsCard">
            <div className="testimonialsCard__content">
                <p className="testimonialsCard__content-text">{text}</p>
                <div className="testimonialsCard__content-rate">{rate}</div>
                <div className="testimonialsCard__content-name">{userName}</div>
            </div>
        </div>
    );
};

export default TestimonialsCard;
