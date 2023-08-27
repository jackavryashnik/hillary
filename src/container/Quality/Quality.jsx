import React from "react";
import { useInView } from 'react-intersection-observer';
import { SectionTitle } from "../../components";
import { images } from "../../constants";
import "./Quality.css";

const Quality = () => {
    const { ref, inView } = useInView({
        threshold: 0,
        triggerOnce: true,
    })

    return (
        <div className="quality">
            <SectionTitle
                boldText={"Технологія"}
                endText={"та"}
                secondBoldText={"якість"}
            />

            <section className="quality__content">
                <div className="content__img">
                    <img  ref={ref} className={`content__img-img ${inView ? 'animation-rotate' : ''}`} src={images.guasha4} alt="gushua scraper"/>
                </div>

                <div className="content__text">
                    <p>
                        <b>Дерев’яний шкребок Гуаша</b> для масажу тіла Hillary
                        виготовлений з деревини натурального дуба за спеціальною
                        технологією: суха деревина, що проходить через 4 види
                        шліфування та має спеціальне покриття - комбінація олії
                        з твердим воском <b>OSMO TopOil 3028,</b> яка
                        кристалізує верхній шар деревини.
                    </p>
                    <p>
                        <b>Олії і віск</b> глибоко проникають у дерев'яні
                        поверхні надаючи їм водо - і брудовідштовхувальні
                        властивості, міцність та зносостійкість. При цьому
                        деревина зберігає свою здатність дихати
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Quality;
