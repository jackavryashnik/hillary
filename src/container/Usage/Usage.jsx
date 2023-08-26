import React from "react";
import { SectionTitle } from "../../components";
import "./Usage.css";

const Usage = () => {
    return (
        <div className="usage">
            <SectionTitle startText={"Спосіб"} boldText={"застосування"} />

            <section className="usage__content">
                <div className="content__vid">
                    <iframe
                        className="content__vid-vid"
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/DcY19mVRs74"
                        title="Usage example"
                        frameBorder={0}
                        allowFullScreen
                    ></iframe>
                </div>

                <div className="usage__content-text">
                    <p>
                        Попереднє нанесення сироватки чи розігрівальної олії
                        зробить масаж приємнішим й ефективнішим.
                    </p>
                    <p>
                        <b>Дерев’яний шкребок</b> має гостріші грані, тому
                        глибше входить в шкіру й, відповідно, досягає глибших
                        м'язових шарів. Його торкання подекуди можуть бути
                        болючими, особливо у порівнянні з кам'яними масажерами.
                    </p>
                    <p>
                        Тому радимо починати з найм'якіших зон (сідниці, стегна)
                        й дуже легких натискань, збільшуючи силу дуже поступово.
                        В іншому технологія масажу нічим не відрізняється —
                        шкребок тримають під кутом<b> 45°</b>, рухаються зверху
                        вниз чи з центру до боків.
                    </p>
                    <p>
                        <b>Масувати одну лінію</b> потрібно до почервоніння, але
                        враховуй, що після особливого активного масажу часом
                        можуть залишатись синці й крововиливи (це нормально для
                        гуа-ша масажу за умови, що не відчуваєш в процесі
                        сильного болю чи дискомфорту).
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Usage;
