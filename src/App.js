import React, { useEffect, useState } from "react";
import "./App.css";
import {
    AddProduct,
    Effects,
    HowToOrder,
    Introduction,
    MainScreen,
    Massage,
    OrderScreen,
    Procedure,
    Quality,
    Testimonials,
    Usage,
} from "./container";
import { TopLine, Marquee, Header, Footer, StickyWidget } from "./components";

function App() {
    const [
        shouldRenderComponent,
        setShouldRenderComponent,
    ] = useState(false);
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            let isIntersecting = false;

            entries.forEach((entry) => {
                if (
                    entry.target.id === "order" ||
                    entry.target.id === "order2"
                ) {
                    isIntersecting = isIntersecting || entry.isIntersecting;
                }
            });

            setShouldRenderComponent(!isIntersecting);
        });

        const orderElement = document.getElementById("order");
        const order2Element = document.getElementById("order2");

        if (orderElement) {
            observer.observe(orderElement);
        }
        if (order2Element) {
            observer.observe(order2Element);
        }

        return () => {
            if (orderElement) {
                observer.unobserve(orderElement);
            }
            if (order2Element) {
                observer.unobserve(order2Element);
            }
        };
    }, []);

    return (
        <div className="App">
            <Header />
            <Marquee />
            {shouldRenderComponent ? <StickyWidget /> : null}
            <MainScreen />
            <TopLine />
            <Introduction />
            <Effects />
            <Procedure />
            <AddProduct />
            <Usage />
            <Massage />
            <Quality />
            <Testimonials />
            <HowToOrder />
            <Marquee />
            <OrderScreen />
            <Footer />
        </div>
    );
}

export default App;