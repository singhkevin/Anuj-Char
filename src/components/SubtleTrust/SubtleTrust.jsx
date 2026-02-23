import React, { useState, useEffect } from "react";
import celebrities from "../../data/celebrities";
import AnimatedCopy from "../AnimatedCopy/AnimatedCopy";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./SubtleTrust.css";

const SubtleTrust = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1024);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <section className="subtle-trust-section">
            <div className="subtle-trust-header">
                <AnimatedCopy tag="h2">Celebrities We Have Worked With</AnimatedCopy>
                <p>Moments of connection and energy, captured across diverse stages.</p>
            </div>

            <div className="trust-carousel-wrapper">
                <Swiper
                    slidesPerView={1.2}
                    slidesPerGroup={1}
                    speed={1500}
                    spaceBetween={20}
                    loop={true}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}
                    pagination={{ clickable: true }}
                    modules={[Autoplay, Pagination]}
                    breakpoints={{
                        640: {
                            slidesPerView: 2.5,
                            slidesPerGroup: 2,
                            spaceBetween: 25,
                        },
                        1024: {
                            slidesPerView: 5,
                            slidesPerGroup: 5,
                            spaceBetween: 30,
                        },
                        1440: {
                            slidesPerView: 6,
                            slidesPerGroup: 6,
                            spaceBetween: 35,
                        }
                    }}
                    className="trust-swiper"
                >
                    {celebrities.map((celeb) => (
                        <SwiperSlide key={celeb.id}>
                            <div className="subtle-trust-card">
                                <div className="image-container">
                                    <img src={celeb.image} alt={celeb.name || "Celebrity"} />
                                    <div className="soft-overlay"></div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default SubtleTrust;
