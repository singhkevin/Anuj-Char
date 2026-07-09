import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./ModernCarousel.css";

const slides = Array.from({ length: 21 }, (_, i) => ({
    id: i + 1,
    image: `/moments-captured/${i + 1}.jpg`,
    title: "Moments Captured",
}));

import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

const ModernCarousel = () => {
    return (
        <section className="modern-carousel-container">
            <div className="modern-carousel-header">
                <h2 className="modern-carousel-title">Moments Captured</h2>
                <div className="title-underline"></div>
            </div>

            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                loop={true}
                speed={1000}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                coverflowEffect={{
                    rotate: 15,
                    stretch: 0,
                    depth: 300,
                    modifier: 1,
                    slideShadows: false,
                }}
                pagination={{ clickable: true }}
                navigation={true}
                modules={[Autoplay, EffectCoverflow, Pagination, Navigation]}
                className="modern-swiper"
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id} className="modern-slide">
                        {({ isActive }) => (
                            <div className={`slide-content ${isActive ? 'modern-slide-active' : ''}`}>
                                <img src={slide.image} alt={slide.title} />
                            </div>
                        )}
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="modern-carousel-cta">
                <Link to="/gallery" className="cta-button">
                    Explore Full Gallery <FiArrowRight className="cta-icon" />
                </Link>
            </div>
        </section>
    );
};

export default ModernCarousel;
