import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import AnimatedCopy from "../../components/AnimatedCopy/AnimatedCopy";
import eventDetails from "../../data/eventDetails";

import Footer from "../../components/Footer/Footer";
import ReactLenis from "lenis/react";
import "./Event.css";
import Transition from "../../components/Transition/Transition";

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

                <Footer />
            </div>
        </ReactLenis>
    );
};

export default Transition(Event);
