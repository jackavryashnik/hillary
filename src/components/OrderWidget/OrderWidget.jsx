import React, { useState, useEffect } from "react";
// import { images, itemData, fetchAmount } from "../../constants";
import { images, fetchAmount } from "../../constants";
import { Timer } from "../../components";
import { useInView } from 'react-intersection-observer';
import "./OrderWidget.css";

const OrderWidget = () => {
    const image = "grapePlusGuasha";

    const [amount, setAmount] = useState(11);
    const fetchedAmount = fetchAmount();
    useEffect(() => {
        const fetchData = async () => {
            if (fetchedAmount.vars) {
                setAmount(fetchedAmount.vars.lp_remaining_grape || 11);
            }
        };

        fetchData();
    }, [fetchedAmount]);
 
    // const [newPrice, setNewPrice] = useState(697);
    // const fetchedNewPrice = itemData();
    // useEffect(() => {
    //     const fetchData = async () => {
    //         if (fetchedNewPrice.data) {
    //             setNewPrice(fetchedNewPrice.data.landing_box.price || 697);
    //         }
    //     };

    //     fetchData();
    // }, [fetchedNewPrice]);

    // const [oldPrice, setOldPrice] = useState(1161);
    // const fetchedOldPrice = itemData();
    // useEffect(() => {
    //     const fetchData = async () => {
    //         if (fetchedOldPrice.data) {
    //             setOldPrice(fetchedOldPrice.data.landing_box.old_price || 1161);
    //         }
    //     };

    //     fetchData();
    // }, [fetchedOldPrice]);

    // const [subtitle, setSubitle] = useState('Грейпфрутова олія');
    // const fetchedSubtitle = itemData();
    // useEffect(() => {
    //     const fetchData = async () => {
    //         if (fetchedSubtitle.data) {
    //             setSubitle(fetchedSubtitle.data.landing_product.title || 'Грейпфрутова олія');
    //         }
    //     };

    //     fetchData();
    // }, [fetchedSubtitle]);

    const { ref, inView } = useInView({
        threshold: 0,
        triggerOnce: true,
    })

    return (
        <div className="widget-wrapper">
            <div className="order-widget flex__center">
                <div ref={ref} className={`${inView ? 'animation-from-top' : ''}`}>
                    <Timer />
                </div>

                <h1 className="order-widget__title">
                    Шкребок Гуаша для масажу тіла
                </h1>
                <div className="offer">
                    <div className="offer__image">
                        <img
                            src={images[image]}
                            height="180"
                            alt="Шкребок Гуаша"
                        />
                    </div>
                    <div className="offer__subtitle">
                        <span className="offer__subtitle-text">
                            Шкребок Гуаша
                        </span>
                        <span className="plus">+</span>
                        <span className="offer__subtitle-text">
                            {/* {subtitle} */}
                            subtitle
                        </span>
                    </div>
                </div>

                <div className="price flex__center">
                <div ref={ref} className={`price__old ${inView ? 'animation-rotate' : ''}`}>
                        <span>Звичайна ціна:</span>
                        <p>
                            <span className="price__value">
                                {/* {oldPrice} */}
                                oldPrice
                            </span>
                            <small className="price__currency">грн.</small>
                        </p>
                    </div>
                    <div ref={ref} className={`price__new ${inView ? 'animation-rotate' : ''}`}>
                        <span>Ціна сьогодні:</span>
                        <p>
                            <span className="price__value">
                                {/* {newPrice} */}
                                newPrice
                                </span>
                            <small className="price__currency">грн.</small>
                        </p>
                    </div>
                </div>

                <div className="order__advantages">
                    <div>
                        <p>
                            <i
                                className="fa-solid fa-circle-check"
                                style={{ color: "var(--color-red)" }}
                            ></i>{" "}
                            Миттєвий дренажний ефект
                        </p>
                    </div>
                    <div>
                        <p>
                            <i
                                className="fa-solid fa-circle-check"
                                style={{ color: "var(--color-red)" }}
                            ></i>{" "}
                            Шкіра стає пружною
                        </p>
                    </div>
                    <div>
                        <p>
                            <i
                                className="fa-solid fa-circle-check"
                                style={{ color: "var(--color-red)" }}
                            ></i>{" "}
                            Зменшуються целюлітні прояви
                        </p>
                    </div>
                </div>
                <div className="order__button btn-pulse">Замовити зараз</div>
                <b className="lastpack__wrapper">
                    Залишилось всього{" "}
                    <span className="lastpack">
                        <span className="lastpack-value">
                            {amount} шт.
                        </span>
                    </span>{" "}
                    по акції
                </b>
            </div>
        </div>
    );
};

export default OrderWidget;
