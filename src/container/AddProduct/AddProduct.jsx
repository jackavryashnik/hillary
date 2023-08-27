import React, { useState, useEffect } from "react";
import { useInView } from 'react-intersection-observer';
import { SectionTitle } from "../../components";
import { images, itemData } from "../../constants";
import "./AddProduct.css";

const AddProduct = () => {
    const image = "grapeMain";
    const [content, setContent] = useState('');
    
    const fetchedContent = itemData();
    useEffect(() => {
        const fetchData = async () => {
            if (fetchedContent.data) {
                setContent(fetchedContent.data.landing_product.active_ingredient || '');
            }
        };

        fetchData();
    }, [fetchedContent]);

    const { ref, inView } = useInView({
        threshold: 0,
        triggerOnce: true,
    })

    return (
        <div className="add-product" id="add-product">
            <SectionTitle
                startText={"Антицелюлітна олія"}
                boldText={"Грейпфрут"}
            />
            <section className="add-product__content">
                <div className="content__img">
                    <img ref={ref}
                    className={`content__img-img ${inView ? 'rollIn' : ''}`}
                    src={images[image]} alt="grape oil"/>
                </div>
                
                <div className="content__text">
                    <h3 className="content__text-subtitle">
                        Активні Інгредієнти
                    </h3>
                    <div className="description" dangerouslySetInnerHTML={{ __html: content }} />
                    <p>
                        <b>Ефірна олія грейпфрута</b> має здатність відновлювати
                        жировий обмін, тому може стати ефективним засобом для
                        зниження ваги, розбиває жирові відкладення на шкірі і
                        застосовується при лікуванні целюліту. Має хорошу
                        очищувальну здатність, вона стимулює виведення зайвої
                        рідини з організму, а також чистить кров від токсинів і
                        шлаків, що скупчуються в організмі.
                    </p>
                    <p>
                        <b>Мигдальна олія</b> не тільки заспокоює шкіру і знімає
                        запалення, а й ефективно живить, відновлює еластичність
                        і розгладжує епідерміс. Велика кількість
                        легкозасвоюваної шкірою фолієвої кислоти створює тонкий
                        захисний бар'єр, саме він не дозволяє страждати клітинам
                        шкіри від впливу зовнішніх подразників. Ніацин
                        мигдалевої олії сприяє поверненню шкірі природного,
                        рівного тону.
                    </p>
                    <p>
                        <b>Ефірна олія лайма</b> у великій кількості містить
                        речовини, які активізують вироблення колагену. Завдяки
                        цьому, у шкіри відкривається «друге дихання» - колаген
                        уповільнює процес старіння. Насичений аромат олії
                        прекрасно тонізує шкіру і є прекрасною альтернативою
                        різним зволожуючим косметичним засобам. Під час
                        антицелюлітного і тайського масажу ефірну олію лайма
                        використовують для активізації кровообігу, вирівнювання
                        шкіри. Завдяки цій олії, шкіра стає оксамитовою і
                        ніжною.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default AddProduct;
