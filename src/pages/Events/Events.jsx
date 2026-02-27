import React from "react";
import { Link } from "react-router-dom";
import AnimatedCopy from "../../components/AnimatedCopy/AnimatedCopy";

import eventDetails from "../../data/eventDetails";
import { FiArrowUpRight } from "react-icons/fi";

import Footer from "../../components/Footer/Footer";
import ReactLenis from "lenis/react";
import "./Events.css";
import Transition from "../../components/Transition/Transition";

const Events = () => {
    const categories = Object.keys(eventDetails).map(key => ({
        id: key,
        ...eventDetails[key]
    }));

    return (
        <ReactLenis root>
            <div className="events-hub-page">
                <div className="events-hero">
                    <div className="events-hero-content">
                        <AnimatedCopy tag="h1">The Stage<br></br> is Set</AnimatedCopy>
                        <AnimatedCopy tag="h2">Elevating Every Event with Professionalism & Energy</AnimatedCopy>
                    </div>
                </div>



                <div className="events-grid-section">
                    <AnimatedCopy tag="h3" className="section-title">Our Expertise</AnimatedCopy>
                    <div className="events-grid">
                        {categories.map((category) => (
                            <Link to={`/events/${category.id}`} key={category.id} className="event-card">
                                <div className="event-card-image">
                                    <img src={category.images[0]} alt={category.title} />
                                    <div className="event-card-overlay">
                                        <FiArrowUpRight className="overlay-icon" />
                                    </div>
                                </div>
                                <div className="event-card-info">
                                    <div className="event-card-title-row">
                                        <h4>{category.title}</h4>
                                        <FiArrowUpRight className="title-icon" />
                                    </div>
                                    <p className="secondary.sm">{category.subtitle}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="events-cta">
                    <div className="cta-content">
                        <AnimatedCopy tag="h2">Ready to Elevate Your Event?</AnimatedCopy>
                        <Link to="/contact" className="btn">Get in Touch</Link>
                    </div>
                </div>


                <Footer />
            </div>
        </ReactLenis >
    );
};

export default Transition(Events);
