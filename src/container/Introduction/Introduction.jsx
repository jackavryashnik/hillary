import React, { useState, useEffect } from "react";
import { useInView } from 'react-intersection-observer';
import { images } from "../../constants";
import { SectionTitle } from "../../components";
import "./Introduction.css";

const Introdaction = ({ fetchedData }) => {
    const image = "grapePlusGuasha";
    const anchorImage = "grapeMain";

    const [description, setDescription] = useState('description');
    const [anchor, setAnchor] = useState('Антицелюлітна олія Грейпфрут Hillary Grapefruit Anti Cellulite, 100 мл');

   useEffect(() => {
    if (fetchedData && fetchedData.data && fetchedData.data.data.landing_product) {
        setDescription(fetchedData.data.data.landing_product.description || 'description');
        setAnchor(fetchedData.data.data.landing_product.full_title || 'Антицелюлітна олія Грейпфрут Hillary Grapefruit Anti Cellulite, 100 мл');
    }
    }, [fetchedData]);
    

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

    const { ref, inView } = useInView({
        threshold: 0,
        triggerOnce: true,
    })

    return (
        <div className="introdaction">
            <SectionTitle boldText={"набір"} endText={"для масажу гуаша"} />

            <div className="introdaction__product">
                <img
                    ref={ref} className={`introdaction__product-img ${inView ? 'animation-rotate' : ''}`}
                    src={images[image]}
                    alt="grape oil plus guasha scraper"
                />

                <section className="product-description">
                <div className="description" dangerouslySetInnerHTML={{ __html: description }} />
                    <h3 className="product-description__subtitle">
                        До набору входять:
                    </h3>
                    <div className="product-description__products">
                        <div className="products__add-item">
                            <img src={images[anchorImage]} alt="grape oil" />
                            <a href="#add-product">
                                {anchor}
                            </a>
                        </div>
                        <div className="products__main-item">
                            <img src={images.guasha2} alt="scraper" />
                            <a href="#procedure">
                                Шкребок гуаша для масажу тіла дерев‘яний Hillary
                            </a>
                        </div>
                    </div>
                </section>
            </div>

            <div className="introdaction__procedure">
                <section className="procedure-description">
                    <h3 className="procedure-description__subtitle">
                        Розпочніть процедуру масажу:
                    </h3>
                    <p>
                        <b>1.</b> Нанесіть олійку на очищену шкіру проблемних
                        ділянок легкими масажними рухами;
                    </p>
                    <p>
                        <b>2.</b> Розпочніть масаж шкребком для тіла: Почніть із
                        найм'якіших зон (сідниці, стегна) й дуже легких
                        натискань, збільшуючи силу дуже поступово, тримаючи
                        шкребок під кутом 45°. Рухайте шкребком по масажних
                        лініях. Масувати одну лінію потрібно до почервоніння.
                        Після собливо активного масажу часом можуть залишатись
                        синці й крововиливи (це нормально для гуа-ша масажу за
                        умови, що не відчувається в процесі сильного болю чи
                        дискомфорту).
                    </p>
                </section>
                <img
                    src={images.themeTutorial1}
                    ref={ref} className={`introdaction__procedure-img ${inView ? 'animation-rotate' : ''}`}
                    alt="procedure tutorial"
                />
            </div>
        </div>
    );
};

export default Introdaction;
