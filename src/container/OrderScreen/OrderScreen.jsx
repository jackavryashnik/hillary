import React from "react";
import { useInView } from 'react-intersection-observer';
import { BottomOrderWidget } from "../../components";
import "./OrderScreen.css";

const OrderScreen = () => {    
    const { ref, inView } = useInView({
        threshold: 0,
        triggerOnce: true,
    })

    return (
        <div ref={ref} className="order-screen section__padding" id="order2">
                <div className={`${inView ? 'bottom-order-widget-active' : ''}`}>
                    <BottomOrderWidget />
                </div>
        </div>
    );
};

export default OrderScreen;
