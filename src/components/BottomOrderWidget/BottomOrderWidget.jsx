import React, { useState, useEffect } from "react";
// import { images, itemData, fetchAmount } from "../../constants";
import { images, fetchAmount } from "../../constants";
import { Timer } from "../../components";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./BottomOrderWidget.css";

const OrderWidget = () => {
    const [selectedPayment, setSelectedPayment] = useState("novaposhta");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [valid, setValid] = useState(true);


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

    const handlePaymentChange = (event) => {
        setSelectedPayment(event.target.value);
    };

    const handleChange = (value) => {
        setPhoneNumber(value);
        setValid(validatePhoneNumber(value));
    };

    const validatePhoneNumber = (phoneNumber) => {
        const phoneNumberPattern = /^\+?[1-9]\d{1,14}$/;

        return phoneNumberPattern.test(phoneNumber);
    };

    const items = document.querySelectorAll(".animation-rotate");

    function handleScroll() {
        for (const item of items) {
            const rect = item.getBoundingClientRect();
            const isVisible =
                rect.top >= 0 && rect.bottom <= window.innerHeight;

            if (isVisible && !item.classList.contains("appear")) {
                item.classList.add("appear");
            }
        }
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return (
        <div className="widget-wrapper">
            <div className="bottom-order-widget flex__center">
                <Timer />

                <div className="offer">
                    <div className="offer__image">
                        <img
                            src={images.grapePlusGuasha}
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

                <div className="price">
                    <div className="price__old">
                        <span className="price__title">Звичайна ціна:</span>
                        <p>
                            <span className="price__value">
                                oldPrice
                                {/* {oldPrice} */}
                            </span>
                            <small className="price__currency">грн.</small>
                        </p>
                    </div>
                    <div className="price__new">
                        <span className="price__title">Ціна сьогодні:</span>
                        <p>
                            <span className="price__value">
                            {/* {newPrice} */}
                            newPrice
                            </span>
                            <small className="price__currency">грн.</small>
                        </p>
                    </div>
                </div>

                <div className="inputs">
                    <form className="input-form">
                        <div className="input__name">
                            <input
                                type="text"
                                name="name"
                                placeholder="Введіть ім'я"
                            />
                        </div>
                        <div className="input__phone-number">
                            <PhoneInput
                                country={"ua"}
                                value={phoneNumber}
                                onChange={handleChange}
                                inputProps={{
                                    required: true,
                                }}
                            />
                            {!valid && (
                                <p>Please enter a valid phone number.</p>
                            )}
                        </div>
                    </form>

                    <div className="payment">
                        <b className="payment__title">Оберіть спосіб оплати:</b>
                        <div className="block-col payment_selector_field">
                            <label
                                className={`custom-radio ${
                                    selectedPayment === "novaposhta"
                                        ? "selected"
                                        : ""
                                }`}
                            >
                                <input
                                    type="radio"
                                    name="payment"
                                    value="novaposhta"
                                    checked={selectedPayment === "novaposhta"}
                                    onChange={handlePaymentChange}
                                />
                                <i className="fa-solid fa-check payment_selector checkmark"></i>
                                <img
                                    src={images.novaPoshta}
                                    width="22"
                                    alt="Novaposhta Icon"
                                />
                                <span className="payment_title">
                                    Накладний платіж
                                </span>
                            </label>
                            <label
                                className={`custom-radio ${
                                    selectedPayment === "wayforpay"
                                        ? "selected"
                                        : ""
                                }`}
                            >
                                <input
                                    type="radio"
                                    name="payment"
                                    value="wayforpay"
                                    checked={selectedPayment === "wayforpay"}
                                    onChange={handlePaymentChange}
                                />
                                <i className="fa-solid fa-check payment_selector checkmark"></i>
                                <img
                                    src={images.wayForPay}
                                    width="22"
                                    alt="WayForPay Icon"
                                />
                                <span className="payment_title">
                                    Онлайн оплата
                                </span>
                            </label>
                        </div>
                    </div>
                    <div className="order__button btn-pulse">
                        Замовити зараз
                    </div>
                </div>

                <b className="lastpack__wrapper">
                    Залишилось всього{" "}
                    <span className="lastpack">
                        <span className="lastpack_value">
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