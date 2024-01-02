import React from "react";
import "./SectionTitle.css";

const SectionTitleWithBR = ({ startText, boldText, endText, secondBoldText }) => {
    return (
        <div className="section-title flex__center">
            <p className="has-br">
                {startText}
                <span>
                    <b> {boldText} </b>
                    {endText}
                    <b> {secondBoldText} </b>
                </span>
            </p>
        </div>
    );
};

export default SectionTitleWithBR;
