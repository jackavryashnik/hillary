import React, { useState, useEffect } from "react";
import { useInView } from 'react-intersection-observer';
import { SectionTitle, RoundItem } from "../../components";
import { images } from "..//../constants";
import "./Massage.css";

const Massage = () => {
    const { ref, inView } = useInView({
        threshold: 0,
        triggerOnce: true,
    })

    return (
        <div className="massage">
            <SectionTitle startText={"Види"} boldText={"масажу"} />
            <div
                ref={ref}
                className={`massage__items ${inView ? 'massage__items-active' : ''}`}
            >
                <RoundItem
                    ref={ref}
                    className={`${inView ? 'massage__item' : ''}`}
                    image={images.themeMassage1}
                    alt={"picture of massage"}
                    text={"Масаж обличчя"}
                />
                <RoundItem
                    ref={ref}
                    className={`${inView ? 'massage__item' : ''}`}
                    image={images.themeMassage2}
                    alt={"picture of massage"}
                    text={"Масаж шийно-комірцевої зони"}
                />
                <RoundItem
                    ref={ref}
                    className={`${inView ? 'massage__item' : ''}`}
                    image={images.themeMassage3}
                    alt={"picture of massage"}
                    text={"Масаж голови, рук, ніг, спини"}
                />
                <RoundItem
                    ref={ref}
                    className={`${inView ? 'massage__item' : ''}`}
                    image={images.themeMassage4}
                    alt={"picture of massage"}
                    text={"Антицелюлітний"}
                />
            </div>
        </div>
    );
};

export default Massage;
