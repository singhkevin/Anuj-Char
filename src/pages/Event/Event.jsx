import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import AnimatedCopy from "../../components/AnimatedCopy/AnimatedCopy";
import eventDetails from "../../data/eventDetails";
import { useLenis } from "lenis/react";

import Footer from "../../components/Footer/Footer";
import ReactLenis from "lenis/react";
import "./Event.css";
import Transition from "../../components/Transition/Transition";

const ScrollFix = () => {
    useLenis(({ isScrolling }) => {
        if (isScrolling) {
            document.body.classList.add("is-scrolling");
        } else {
            document.body.classList.remove("is-scrolling");
        }
    });
    return null;
};

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

const Event = () => {
    const { id } = useParams();
    const event = eventDetails[id];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!event) {
        return (
            <div className="event-not-found">
                <h1>Event Not Found</h1>
                <Link to="/" className="btn">Back Home</Link>
            </div>
        );
    }

    return (
        <ReactLenis root>
            <ScrollFix />
            <div className="event-page">
                <div className="event-hero">
                    <div className="event-hero-content">
                        <AnimatedCopy tag="h1">{event.title}</AnimatedCopy>
                        <AnimatedCopy tag="h2">{event.subtitle}</AnimatedCopy>
                    </div>
                </div>

                <div className="event-grid-section">
                    <div className="event-image-grid">
                        {event.images && event.images.map((img, index) => (
                            <div key={index} className="event-grid-item">
                                <div className="event-grid-image">
                                    <img src={img} alt={`${event.title} ${index + 1}`} />
                                    <div className="image-hover-overlay">
                                        <span className="view-text">Moment {index + 1}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="event-details">
                    <div className="event-description">
                        <p className="primary">{event.description}</p>
                    </div>
                </div>

                {event.videos && event.videos.length > 0 && (
                    <section className="event-videos-section">
                        <div className="section-header">
                            <AnimatedCopy tag="h2">Watch the Action</AnimatedCopy>
                            <div className="header-line"></div>
                        </div>
                        <div className="video-grid">
                            {event.videos.map((vid) => (
                                <VideoCard key={vid.id} vid={vid} />
                            ))}
                        </div>
                    </section>
                )}

                <Footer />
            </div>
        </ReactLenis>
    );
};

export default Transition(Event);
