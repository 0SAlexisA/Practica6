import React, { useState } from "react";
import {Autoplay, Navigation, Pagination} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "./styles.css"

const Carousel = () => {
    const [flippedIndex, setFlippedIndex] = useState(null);

    const athletes = [
        {
            name: "Sheffield",
            description: ["Es una competición que está organizada por SBD en participación con la IPF. ",
                "La competición consta de 12 atletas masculinos y 12 femeninos de la división clásica de varias categorías de peso ",
                "para competir por los récords mundiales y el primer puesto..", ],
            image: "diapositiva1.jpg",
        },
        {
            name: "Agata Sitko",
            description: [ "Nationality: Poland, Class: 69 kg",
                "Squat: 210kg (WR) + Bench: 158kg (WR)+ DeadLift: 260 (WR)",
                "Total: 628kg (WR)",],
            image: "diapositiva2.jpg",
        },
        {
            name: "Kjell Bakkelund",
            description: ["Nationality: Norway , Class: 66 kg",
                "Squat: 257kg + Bench: 195kg + DeadLift: 3175.5 (WR)",
                "Total: 770kg (WR)",] ,
            image: "diapositiva3.jpg",
        },
    ];

    return (
        <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
        >
            {athletes.map((athlete, index) => (
                <SwiperSlide key={index}>
                    <div
                        className={`flip-card ${flippedIndex === index ? "flipped" : ""}`}
                        onClick={() => setFlippedIndex(flippedIndex === index ? null : index)}
                    >
                        {/* Lado frontal */}
                        <div className="flip-card-front">
                            <img src={athlete.image} alt={athlete.name} className="slide" />
                        </div>
                        {/* Lado trasero */}
                        <div className="flip-card-back">
                            <h2>{athlete.name}</h2>
                            <p>{athlete.description}</p>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Carousel;
