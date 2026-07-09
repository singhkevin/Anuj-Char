import React from "react";
import "./Gallery.css";
import galleryData from "../../data/galleryData";
import AnimatedCopy from "../../components/AnimatedCopy/AnimatedCopy";

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
    const [selectedImage, setSelectedImage] = React.useState(null);
    const [cursorPos, setCursorPos] = React.useState({ x: 0, y: 0 });
    const [hoverState, setHoverState] = React.useState('none'); // 'none', 'in', 'out'
    
    const handleMouseMove = (e) => {
        setCursorPos({ x: e.clientX, y: e.clientY });
    };

    const activeCursor = selectedImage ? 'out' : hoverState;

    return (
        <ReactLenis root>
            <div 
                className={`gallery-page ${activeCursor !== 'none' ? 'hide-native-cursor' : ''}`} 
                onMouseMove={handleMouseMove}
            >
                <style>{`
                    @media (max-width: 768px) {
                        .gallery-hero {
                            padding-top: 160px !important;
                        }
                    }
                `}</style>
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
                            <div 
                                key={img.id} 
                                className="image-item" 
                                onClick={() => setSelectedImage(img)}
                                onMouseEnter={() => setHoverState('in')}
                                onMouseLeave={() => setHoverState('none')}
                            >
                                <div className="image-wrapper">
                                    <img src={img.url} alt={img.title} />
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="gallery-section">
                    <div className="section-header">
                        <AnimatedCopy tag="h2">Videos</AnimatedCopy>
                        <div className="header-line"></div>
                    </div>
                    <div className="video-grid">
                        {galleryData.videos.map((vid) => (
                            <VideoCard key={vid.id} vid={vid} />
                        ))}
                    </div>
                </section>


                <Footer />
                
                {/* Custom Magnifier Cursor */}
                <div 
                    className={`custom-magnifier ${activeCursor !== 'none' ? 'visible' : ''}`}
                    style={{
                        left: `${cursorPos.x}px`,
                        top: `${cursorPos.y}px`
                    }}
                >
                    {activeCursor === 'in' ? (
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
                        </svg>
                    ) : (
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM13.5 10.5h-6" />
                        </svg>
                    )}
                </div>
                
                {selectedImage && (
                    <div className="lightbox-overlay" onClick={() => setSelectedImage(null)}>
                        <div className="lightbox-content">
                            <img src={selectedImage.url} alt={selectedImage.title} />
                        </div>
                    </div>
                )}
            </div>
        </ReactLenis>
    );
};

export default Transition(Gallery);
