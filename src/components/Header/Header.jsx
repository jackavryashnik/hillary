import React from "react";
import { images } from "../../constants";

const header = () => {
    const styles = {
        padding: "10px",
        position: "sticky",
        top: 0,
        backgroundColor: "rgba(227, 227, 227, 0.6)",
        zIndex: 5
    };

    return (
        <div className="header flex__center" style={styles}>
            <img
                className="header__logo"
                src={images.logoMiniBlack}
                alt="logo"
                width={100}
            />
        </div>
    );
};

export default header;
