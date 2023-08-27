import React from "react";
import { useInView } from 'react-intersection-observer';
import { SectionTitle } from "../../components";
import { images } from "../../constants";
import "./Procedure.css";

const Procedure = () => {
    const { ref, inView } = useInView({
        threshold: 0,
        triggerOnce: true,
    })

    return (
        <div className="procedure" id="procedure">
            <SectionTitle startText={"потужна"} boldText={"процедура"} />
            <section className="procedure__content">
                <div className="content__text">
                    <p>
                        <b>Китайський масаж Гуаша</b> з’явився приблизно в 550
                        році до нашої ери. Доказом цьому служать знайдені
                        археологами скребки — саме ними і виконується масаж
                        гуаша.{" "}
                    </p>
                    <p>
                        Назва так і перекладається — «видалити все погане».
                        Масаж гуаша має косметичний ефект.
                    </p>
                    <p>
                        <b>Дерев'яний скребок Гуаша</b> можна вважати
                        універсальним, так як він підходить для масажу різних
                        ділянок тіла, завдяки своїй довгастій формі, виступам і
                        увігнутості.
                    </p>
                    <p>
                        Щоденне використання антицелюлітної олії в поєднанні з
                        легкими масажними рухами (обов'язково) швидко принесуть
                        вам довгоочікуваний результат.
                    </p>
                    <p>
                        Продукт сприяє розсмоктуванню підшкірних жирових
                        відкладень і виведенню токсинів, робить шкіру еластичною
                        і підтягнутою.
                    </p>
                </div>
                <div className="content__img">
                    <img ref={ref}
                    className={`content__img-img ${inView ? 'rollIn' : ''}`}
                    src={images.guasha2} alt="guasha scraper"/>
                </div>
            </section>
        </div>
    );
};

export default Procedure;
