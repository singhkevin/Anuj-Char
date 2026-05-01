import React, { useEffect, useRef } from "react";
import "./About.css";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ReactLenis, { useLenis } from "lenis/react";

import AnimatedCopy from "../../components/AnimatedCopy/AnimatedCopy";
import ContactForm from "../../components/ContactForm/ContactForm";
import Footer from "../../components/Footer/Footer";
import Transition from "../../components/Transition/Transition";
import { FiArrowUpRight } from "react-icons/fi";
import galleryData from "../../data/galleryData";

gsap.registerPlugin(ScrollTrigger);

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

const VideoCard = ({ vid, isBento = true }) => {
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
        <div className={`video-item ${isPlaying ? 'is-playing' : ''} ${isBento ? 'bento-video' : ''}`}>
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

const About = () => {
  const imgs = galleryData.images;
  const vids = galleryData.videos;

  useEffect(() => {
    // Staggered reveal for bento items
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray(".bento-item");
      items.forEach((item) => {
        gsap.fromTo(
          item,
          { y: 50, opacity: 0, scale: 0.95 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 90%",
            },
          }
        );
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <ReactLenis root>
      <ScrollFix />
      <div className="page about-v2">
        {/* NEW HEADER */}
        <section className="about-v2-header">
          <div className="header-container">
            <AnimatedCopy tag="h1" delay={0.2}>
              Anuj Char
            </AnimatedCopy>
            <AnimatedCopy tag="h2" delay={0.4}>
              Master of Ceremonies
            </AnimatedCopy>
          </div>
        </section>

        {/* BENTO GRID */}
        <section className="bento-container">
          <div className="bento-grid">
            
            {/* ROW 1 & 2 */}
            <div className="bento-item bento-bio bento-col-2 bento-row-2">
              <AnimatedCopy tag="h3">
                Anchor All The Way
              </AnimatedCopy>
              <p>
                Anuj Char is a professional emcee, anchor, and event host based in Bengaluru and Mumbai. With a career spanning over 10 years and 1000+ shows globally, the stage is his second home. He eats, sleeps, and breathes events.
              </p>
              <p>
                His repertoire includes everything from high-stakes corporate conferences and gala dinners to music concerts, fashion shows, and luxury weddings.
              </p>
            </div>

            <div className="bento-item bento-img bento-col-1 bento-row-2">
              <img src={imgs[0]?.url || "/home/hero-img2.jpg"} alt="Anuj Char on Stage" />
            </div>

            <div className="bento-item bento-img bento-col-1 bento-row-1">
              <img src={imgs[1]?.url || "/home/carousel-1-min.jpg"} alt="Live Performance" />
            </div>

            <div className="bento-item bento-expertise bento-col-1 bento-row-1">
              <h4>Expertise</h4>
              <ul>
                <li>Weddings & Socials</li>
                <li>Corporate Events</li>
                <li>Sports Events</li>
                <li>Theater & Voice Overs</li>
              </ul>
            </div>

            {/* ROW 3 & 4 */}
            <div className="bento-item bento-vid bento-col-2 bento-row-2">
              {vids[0] && <VideoCard vid={vids[0]} />}
            </div>

            <div className="bento-item bento-stars bento-col-2 bento-row-1">
              <h4>Stints with Stars</h4>
              <p>
                Anuj has shared the stage and energy with Bollywood legends like Amitabh Bachchan, Vidya Balan, Anil Kapoor, Anupam Kher, Raveena Tandon, and Kiara Advani.
              </p>
            </div>

            {/* ROW 5 & 6 */}
            <div className="bento-item bento-vid bento-col-2 bento-row-1">
               {vids[1] && <VideoCard vid={vids[1]} />}
            </div>
            
            <div className="bento-item bento-img bento-col-1 bento-row-1">
              <img src={imgs[4]?.url || "/home/carousel-5-min.jpg"} alt="Event Highlight" />
            </div>
            
            <div className="bento-item bento-img bento-col-1 bento-row-1">
              <img src={imgs[5]?.url || "/home/carousel-6-min.jpg"} alt="Event Highlight" />
            </div>

            <div className="bento-item bento-inspiration bento-col-2 bento-row-1">
              <h4>Inspired by Greatness</h4>
              <p>
                A massive Shah Rukh Khan fan, Anuj takes inspiration from King Khan's unparalleled stage presence and hopes to host alongside his mentor one day.
              </p>
            </div>

            {/* ROW 6 & 7 */}
            <div className="bento-item bento-img bento-col-1 bento-row-2">
              <img src={imgs[6]?.url || "/home/carousel-7-min.jpg"} alt="Event Highlight" />
            </div>

            <div className="bento-item bento-vid bento-col-2 bento-row-2">
              {vids[2] && <VideoCard vid={vids[2]} />}
            </div>

            <div className="bento-item bento-img bento-col-1 bento-row-1">
              <img src={imgs[7]?.url || "/home/carousel-8-min.jpg"} alt="Event Highlight" />
            </div>

            <div className="bento-item bento-img bento-col-1 bento-row-1">
              <img src={imgs[0]?.url || "/home/hero-img2.jpg"} alt="Event Highlight" />
            </div>

            {/* ROW 8 & 9 */}
            <div className="bento-item bento-vid bento-col-2 bento-row-2">
               {vids[3] && <VideoCard vid={vids[3]} />}
            </div>

            <div className="bento-item bento-vid bento-col-2 bento-row-2">
               {vids[4] && <VideoCard vid={vids[4]} />}
            </div>

          </div>
        </section>

        <ContactForm />
        <Footer />
      </div>
    </ReactLenis>
  );
};

export default Transition(About);
