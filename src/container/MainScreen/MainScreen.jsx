import React from "react";
import { OrderWidget } from "../../components";
import "./MainScreen.css";

const MainScreen = ({ fetchedData }) => {
    
    return (
        <div className="main-screen" id="order">
            <div>
                <OrderWidget fetchedData={fetchedData} />
            </div>
        </div>
    );
};

export default MainScreen;
