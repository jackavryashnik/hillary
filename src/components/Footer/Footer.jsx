import React, { useState } from "react";
import { PrivacyPolicy } from "../../components";
import "./Footer.css";

const Footer = () => {
    const [showModal, setShowModal] = useState(false);

    const handleShowModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <div className="footer">
            <div className="footer__content">
                <p>
                    Україна, Пирогівці, Хмельницька область, 31343 вул. Гайдара{" "}
                </p>
                <p>ТОВ "Аркадія"</p>
                <div className="footer__privacy" onClick={handleShowModal}>
                    Політика конфіденційності
                </div>
                <b>
                    <span role="img" aria-label="Heart">
                        ❤️
                    </span>
                    HiLLARY
                </b>
                {showModal && <PrivacyPolicy onClose={handleCloseModal} />}
            </div>
        </div>
    );
};

export default Footer;
