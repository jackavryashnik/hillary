import React, { useState, useEffect } from "react";
import { Timer } from "../../components";
import "./StickyWidget.css";

const StickyWidget = () => {
    const [showWidget, setShowWidget] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowWidget(true);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    if (!showWidget) {
        return null;
    }

    const handleButtonClick = () => {
        const element = document.getElementById("order-bottom");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="sticky-widget__wrapper">
            <div className="sticky-widget">
                <Timer />
                <div className="stiky-order__button btn-pulse" onClick={handleButtonClick}>
                    <i className="fa-solid fa-cart-plus"></i>{" "}
                    <span className="button__text">Замовити</span>
                </div>
            </div>
        </div>
    );
};

export default StickyWidget;
