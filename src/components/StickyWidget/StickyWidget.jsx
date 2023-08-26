import React, { useState } from "react";
import { Timer } from "../../components";
import "./StickyWidget.css";

const StickyWidget = () => {
    const [showWidget, setShowWidget] = useState(false);

    // Встановлюємо таймер, який через певний час показує віджет
    // (в даному прикладі, через 1 секунду)
    React.useEffect(() => {
        const timer = setTimeout(() => {
            setShowWidget(true);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    // Якщо showWidget === false, повертаємо null, щоб нічого не відображати
    if (!showWidget) {
        return null;
    }

    // Якщо showWidget === true, відображаємо віджет
    return (
        <div className="sticky-widget__wrapper">
            <div className="sticky-widget">
                <Timer />
                <div className="stiky-order__button btn-pulse">
                    <i className="fa-solid fa-cart-plus"></i>{" "}
                    <span>Замовити</span>
                </div>
            </div>
        </div>
    );
};

export default StickyWidget;
