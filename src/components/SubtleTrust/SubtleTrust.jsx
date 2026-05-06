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

    const half = Math.ceil(celebrities.length / 2);
    const row1 = celebrities.slice(0, half);
    const row2 = celebrities.slice(half);

    return (
        <section className="subtle-trust-section">
            <div className="subtle-trust-header">
                <AnimatedCopy tag="h2">STINTS WITH STARS!</AnimatedCopy>
                <p>Moments of connection and energy, captured across diverse stages.</p>
            </div>

            <div className="marquees-container">
                <div className="marquee-wrapper">
                    <div className="marquee-track">
                        {[...row1, ...row1].map((celeb, index) => (
                            <div className="subtle-trust-card" key={`${celeb.id}-${index}`}>
                                <div className="image-container">
                                    <img src={celeb.image} alt={celeb.name || "Celebrity"} />
                                    <div className="soft-overlay">
                                        <span>{celeb.name || `Moment ${celeb.id}`}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="marquee-wrapper">
                    <div className="marquee-track reverse">
                        {[...row2, ...row2].map((celeb, index) => (
                            <div className="subtle-trust-card" key={`${celeb.id}-${index}`}>
                                <div className="image-container">
                                    <img src={celeb.image} alt={celeb.name || "Celebrity"} />
                                    <div className="soft-overlay">
                                        <span>{celeb.name || `Moment ${celeb.id}`}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SubtleTrust;
