import React from "react";
import { images } from "../../constants";
import { OrderWidget } from "../../components";
import "./MainScreen.css";

const MainScreen = ({ fetchedData }) => {
    const image = "grapeBgHeader1";
    
    return (
        <div className="main-screen" id="order">
            <div className="main-screen__img">
                <img
                    className="main-screen__img-img"
                    src={images[image]}
                    alt="product"
                />
            </div>
            <div>
                <OrderWidget fetchedData={fetchedData} />
            </div>
        </div>
    );
};

export default MainScreen;
