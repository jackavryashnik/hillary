import React from "react";
import "./SectionTitle.css";

const SectionTitle = ({ startText, boldText, endText, secondBoldText }) => {
    return (
        <div className="section-title flex__center">
            <p>
                {startText}
                <b> {boldText} </b>
                {endText}
                <b> {secondBoldText} </b>
            </p>
        </div>
    );
};

export default SectionTitle;
