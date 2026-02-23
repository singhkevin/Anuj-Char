import React from "react";
import "./Gallery.css";
<<<<<<< HEAD
import galleryData from "../../data/galleryData";
import AnimatedCopy from "../../components/AnimatedCopy/AnimatedCopy";
import ContactForm from "../../components/ContactForm/ContactForm";
import Footer from "../../components/Footer/Footer";
import ReactLenis from "lenis/react";
=======

import Gallery3 from "../../components/Gallery2/Gallery3";
import ContactForm from "../../components/ContactForm/ContactForm";
import Footer from "../../components/Footer/Footer";

import ReactLenis from "lenis/react";

>>>>>>> origin/main
import Transition from "../../components/Transition/Transition";

const Gallery = () => {
    return (
        <ReactLenis root>
<<<<<<< HEAD
            <div className="gallery-page">
                <section className="gallery-hero">
                    <div className="hero-content">
                        <AnimatedCopy tag="h1">Gallery</AnimatedCopy>
                        <p>A visual journey through moments of prestige, energy, and connection.</p>
                    </div>
                </section>

                <section className="gallery-section">
                    <div className="section-header">
                        <AnimatedCopy tag="h2">Captivating Moments</AnimatedCopy>
                        <div className="header-line"></div>
                    </div>
                    <div className="image-grid">
                        {galleryData.images.map((img) => (
                            <div key={img.id} className="image-item">
                                <div className="image-wrapper">
                                    <img src={img.url} alt={img.title} />
                                    <div className="image-overlay">
                                        <span>{img.title}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="gallery-section">
                    <div className="section-header">
                        <AnimatedCopy tag="h2">Dynamic Energy</AnimatedCopy>
                        <div className="header-line"></div>
                    </div>
                    <div className="video-grid">
                        {galleryData.videos.map((vid) => (
                            <div key={vid.id} className="video-item">
                                <div className="video-wrapper">
                                    <iframe
                                        src={vid.url}
                                        title={vid.title}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                                <h4>{vid.title}</h4>
                            </div>
                        ))}
                    </div>
                </section>

=======
            <div className="page gallery">
                <Gallery3 />
>>>>>>> origin/main
                <ContactForm />
                <Footer />
            </div>
        </ReactLenis>
    );
};

export default Transition(Gallery);
