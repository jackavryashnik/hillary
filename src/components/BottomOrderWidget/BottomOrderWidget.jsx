import React, { useState, useEffect } from "react";
import { images } from "../../constants";
import { Timer } from "../../components";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./BottomOrderWidget.css";

const OrderWidget = ({ fetchedData }) => {
  const [selectedPayment, setSelectedPayment] = useState("novaposhta");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [valid, setValid] = useState(true);

  const [subtitle, setSubtitle] = useState("Грейпфрутова олія");
  const [newPrice, setNewPrice] = useState(697);
  const [oldPrice, setOldPrice] = useState(1161);
  const [amount, setAmount] = useState(Number(calculateAmount()));

  function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Remaining hours
    const hours = Math.floor((ms % day) / hour);

    return hours;
  }

  function calculateAmount() {
    return (24 - convertMs(Date.now())) * 3;
  }

  useEffect(() => {
    const fetchData = async () => {
      if (fetchedData.data) {
        const landingBoxPrice = fetchedData.data.data.landing_box
          ? fetchedData.data.data.landing_box.price
          : 697;
        const landingBoxOldPrice = fetchedData.data.data.landing_box
          ? fetchedData.data.data.landing_box.old_price
          : 1161;
        const landingProductTitle = fetchedData.data.data.landing_product
          ? fetchedData.data.data.landing_product.title
          : "Грейпфрутова олія";
        const remaining = fetchedData.data
          ? fetchedData.data.data.remaining
          : 1161;

        setNewPrice(landingBoxPrice);
        setOldPrice(landingBoxOldPrice);
        setSubtitle(landingProductTitle);
        setAmount(remaining);
      }
    };

    fetchData();
  }, [fetchedData]);

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
      const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;

      if (isVisible && !item.classList.contains("appear")) {
        item.classList.add("appear");
      }
    }
  }

  window.addEventListener("scroll", handleScroll);
  handleScroll();

  return (
    <div className="bottom-widget-wrapper" id="order-bottom">
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
            <span className="offer__subtitle-text">Шкребок Гуаша</span>
            <span className="plus">+</span>
            <span className="offer__subtitle-text">{subtitle}</span>
          </div>
        </div>

        <div className="price">
          <div className="price__old">
            <span className="price__title">Звичайна ціна:</span>
            <p>
              <span className="price__value">{oldPrice}</span>
              <small className="price__currency">грн.</small>
            </p>
          </div>
          <div className="price__new">
            <span className="price__title">Ціна сьогодні:</span>
            <p>
              <span className="price__value">{newPrice}</span>
              <small className="price__currency">грн.</small>
            </p>
          </div>
        </div>

        <div className="inputs">
          <form className="input-form">
            <div className="input__name">
              <input type="text" name="name" placeholder="Введіть ім'я" />
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
              {!valid && <p>Please enter a valid phone number.</p>}
            </div>
          </form>

          <div className="payment">
            <b className="payment__title">Оберіть спосіб оплати:</b>
            <div className="block-col payment_selector_field">
              <label
                className={`custom-radio ${
                  selectedPayment === "novaposhta" ? "selected" : ""
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
                <img src={images.novaPoshta} width="22" alt="Novaposhta Icon" />
                <span className="payment_title">Накладний платіж</span>
              </label>
              <label
                className={`custom-radio ${
                  selectedPayment === "wayforpay" ? "selected" : ""
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
                <img src={images.wayForPay} width="22" alt="WayForPay Icon" />
                <span className="payment_title">Онлайн оплата</span>
              </label>
            </div>
          </div>
          <div className="order__button btn-pulse">Замовити зараз</div>
        </div>

        <b className="lastpack__wrapper">
          Залишилось всього{" "}
          <span className="lastpack">
            <span className="lastpack_value">{amount} шт.</span>
          </span>{" "}
          по акції
        </b>
      </div>
    </div>
  );
};

export default OrderWidget;
