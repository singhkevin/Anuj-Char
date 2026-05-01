import React, { useState, useEffect } from "react";
import celebrities from "../../data/celebrities";
import AnimatedCopy from "../AnimatedCopy/AnimatedCopy";
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

            <div className="marquee-wrapper">
                <div className="marquee-track">
                    {[...celebrities, ...celebrities].map((celeb, index) => (
                        <div className="subtle-trust-card" key={`${celeb.id}-${index}`}>
                            <div className="image-container">
                                <img src={celeb.image} alt={celeb.name || "Celebrity"} />
                                <div className="soft-overlay"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SubtleTrust;
