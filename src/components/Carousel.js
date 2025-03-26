import {Autoplay, Navigation, Pagination} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"



const Carousel = () =>{
    return(
    <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetwen={50}
        slidePerviev={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delaye: 3000 }}
    >
        <SwiperSlide>
            <img src="diapositiva1.jpg" alt="Slide 1" className="slide"/>
        </SwiperSlide>
        <SwiperSlide>
            <img src="diapositiva2.jpg" alt="Slide 2" className="slide"/>
        </SwiperSlide>
        <SwiperSlide>
            <img src="diapositiva3.jpg" alt="Slide 3" className="slide"/>
        </SwiperSlide>


    </Swiper>
)
};

export default Carousel;