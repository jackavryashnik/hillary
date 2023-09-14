import React from "react";
import TestimonialsCard from "./TestimonialsCard";
import { SectionTitleWithBR } from "../../components";
import { testimonialsData } from "../../constants";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Testimonials.css";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
                ...style,
                zIndex: 5,
                color: "#ffffff",
                height: "26px",
                width: "26px",
                right: "1.6%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: "rgba(173, 173, 173, 0.64",
                borderRadius: "50%",
            }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
                ...style,
                zIndex: 5,
                color: "#ffffff",
                height: "26px",
                width: "26px",
                left: "1.6%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: "rgba(173, 173, 173, 0.64",
                borderRadius: "50%",
            }}
            onClick={onClick}
        />
    );
}

const Testimonials = () => {
    var settings = {
        arrows: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: false,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 960,
                settings: {
                    slidesToShow: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="testimonials">
            <SectionTitleWithBR
                startText={"Відгуки "}
                boldText={"задоволених "}
                endText={"покупців"}
            />
            <div className="testimonials__content">
                <div className="testimonials__content-text">
                    <p>
                        Ми отримуємо сотні вдячних відгуків щодня.
                        <br /> Сподіваємося, що
                        <b> Ви залишитеся задоволені</b>
                        <br />
                        замовленням та повернетесь до нас знову!
                    </p>
                </div>
            </div>
            <div className="testimonials__content-testimonials">
                <Slider {...settings}>
                    {testimonialsData.map((testimonial) => (
                        <TestimonialsCard
                            key={testimonial.id}
                            text={testimonial.text}
                            userName={testimonial.userName}
                            stars={testimonial.stars}
                        />
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Testimonials;
