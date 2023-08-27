import React from "react";
import { useInView } from 'react-intersection-observer';
import { SectionTitle, RoundItem } from "../../components";
import { images } from "..//../constants";
import "./Effects.css";

const Effects = () => {
    const { ref, inView } = useInView({
        threshold: 0,
        triggerOnce: true,
    })

    return (
        <div className="effects">
            <SectionTitle startText={"ефекти від"} boldText={"масажу гуаша"} />
            <div ref={ref}
                className={`effects__items ${inView ? 'effects__items-active' : ''}`}>
                <RoundItem
                    className={`${inView ? 'effects__item' : ''}`}
                    image={images.themeEffects1}
                    alt={"healthy body"}
                    text={"Розслаблені м’язи, відсутність набряків"}
                />
                <RoundItem
                    className={`${inView ? 'effects__item' : ''}`}
                    image={images.themeEffects2}
                    alt={"picture of massage"}
                    text={"Ефективна боротьба з целюлітом"}
                />
                <RoundItem
                    className={`${inView ? 'effects__item' : ''}`}
                    image={images.themeEffects3}
                    alt={"healthy body"}
                    text={"Стимулює підшкірну рідину, включаючи лімфу"}
                />
                <RoundItem
                    className={`${inView ? 'effects__item' : ''}`}
                    image={images.themeEffects4}
                    alt={"healthy body"}
                    text={"Зменшення підшкірних жирових відкладень"}
                />
            </div>
        </div>
    );
};

export default Effects;
