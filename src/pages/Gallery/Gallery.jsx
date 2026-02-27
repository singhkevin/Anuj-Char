import React from "react";
import "./Gallery.css";
import galleryData from "../../data/galleryData";
import AnimatedCopy from "../../components/AnimatedCopy/AnimatedCopy";
import ContactForm from "../../components/ContactForm/ContactForm";
import Footer from "../../components/Footer/Footer";
import ReactLenis from "lenis/react";
import Transition from "../../components/Transition/Transition";

const VideoCard = ({ vid }) => {
    const [isPlaying, setIsPlaying] = React.useState(false);

    // Extract YouTube ID to get thumbnail
    const getYouTubeId = (url) => {
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        const match = url.match(regExp);
        return (match && match[2].length === 11) ? match[2] : null;
    };

    const videoId = getYouTubeId(vid.url);
    const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

    return (
        <div className={`video-item ${isPlaying ? 'is-playing' : ''}`}>
            <div className="video-wrapper" onClick={() => setIsPlaying(true)}>
                {!isPlaying ? (
                    <div className="video-custom-overlay">
                        <img src={thumbnailUrl} alt={vid.title} className="video-thumb" />
                        <div className="overlay-content">
                            <div className="play-button">
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 6L17 12L7 18V6Z" fill="currentColor" />
                                </svg>
                            </div>
                            <h3>{vid.title}</h3>
                        </div>
                    </div>
                ) : (
                    <iframe
                        src={`${vid.url}${vid.url.includes('?') ? '&' : '?'}autoplay=1`}
                        title={vid.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                )}
            </div>
        </div>
    );
};

const Gallery = () => {
    return (
        <ReactLenis root>
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
                            <VideoCard key={vid.id} vid={vid} />
                        ))}
                    </div>
                </section>

                <ContactForm />
                <Footer />
            </div>
        </ReactLenis>
    );
};

export default Transition(Gallery);
