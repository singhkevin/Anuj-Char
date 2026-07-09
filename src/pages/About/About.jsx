import React, { useEffect, useRef } from "react";
import "./About.css";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ReactLenis, { useLenis } from "lenis/react";

import AnimatedCopy from "../../components/AnimatedCopy/AnimatedCopy";

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
  const newImage = "/about-assets/3.jpg";

  useEffect(() => {
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

        <section className="bento-container">
          <div className="bento-grid">

            {/* ROW 1 & 2: PRIMARY INTRO */}
            <div className="bento-item bento-bio bento-col-3 bento-row-2">
              <AnimatedCopy tag="h3">
                International, award-winning, multi-lingual host.
              </AnimatedCopy>
              <p>
                Anuj Char is a professional emcee, anchor and event host based in Bengaluru and Mumbai. He has hosted over a 1000 shows nationally and internationally in his career which spans 10 years! The stage is his second home and he eats, sleeps and breathes events. Having hosted a varied genre of events, his repertoire includes award nights, gala dinners, product launches, conferences, music concerts, weddings, team building sessions, fashion shows and parties. He also is a prominent face in the world of theater, TV commercials and also performs many voice-overs.
                Showing his audience a good time at every event gives him utmost satisfaction and shaking a leg with Bollywood superstars like Amitabh Bachchan, Vidya Balan, Anil Kapoor, Kunal Kapoor, Chitrangadha Singh, Anupam Kher, Raveena Tandon, Kiara Advani and many others are perks of the job that he truly enjoys. Anuj Char fluency in multiple languages coupled with his strong on-stage and on-camera presence has won audience’s hearts worldwide! Striking the right balance between work and fun is the key to his success which has seen him perform on some of the biggest stages across the globe.
                Being a huge Shah Rukh Khan fan, he takes inspiration from King Khan himself and would love to host a show with his mentor anytime the opportunity comes knocking and hey, some dreams do come true so watch this space.
              </p>
            </div>

            <div className="bento-item bento-img bento-col-1 bento-row-1">
              <img src="/about-assets/20.jpg" alt="Stage Presence" />
            </div>

            <div className="bento-item bento-expertise bento-col-1 bento-row-1">
              <h4>Expertise</h4>
              <ul>
                <li>Weddings & Socials</li>
                <li>Corporate Events</li>
                <li>Sports Events</li>
                <li>Shoots & Voices</li>
              </ul>
            </div>

            {/* ROW 3 & 4: BEYOND THE MIC INTEGRATION */}
            <div className="bento-item bento-beyond bento-col-2 bento-row-2">
              <div className="beyond-content">
                <AnimatedCopy tag="h3">Beyond the Mic</AnimatedCopy>
                <p>
                  I started with a simple belief: every story, every brand, every moment deserves to be heard. From my early days to becoming an award-winning host, it’s been a journey of curiosity and commitment.
                </p>
                <p>
                  For me, it’s not just about speaking—it’s about listening, connecting, and bringing people together. I believe in the power of shared experiences and the magic that happens when everyone is truly present.
                </p>
              </div>
            </div>

            <div className="bento-item bento-vid bento-col-2 bento-row-2">
              {vids[0] && <VideoCard vid={vids[0]} />}
            </div>

            {/* ROW 5 & 6: VALUES INTEGRATION */}
            <div className="bento-item bento-img bento-col-1 bento-row-2">
              <img src={newImage} alt="Newspaper Coverage" />
            </div>

            <div className="bento-item bento-values bento-col-3 bento-row-2">
              <div className="values-content">
                <AnimatedCopy tag="h3">Core Values</AnimatedCopy>
                <div className="values-grid">
                  <div className="value-item">
                    <h4>Energy</h4>
                    <p>Bringing high-octane vibrance to every stage.</p>
                  </div>
                  <div className="value-item">
                    <h4>Empathy</h4>
                    <p>Understanding the pulse of the audience.</p>
                  </div>
                  <div className="value-item">
                    <h4>Connection</h4>
                    <p>Creating bridges between brands and people.</p>
                  </div>
                  <div className="value-item">
                    <h4>Excellence</h4>
                    <p>A relentless pursuit of perfection in every performance.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* ADDITIONAL HIGHLIGHTS */}
            <div className="bento-item bento-vid bento-col-2 bento-row-1">
              {vids[1] && <VideoCard vid={vids[1]} />}
            </div>

            <div className="bento-item bento-img bento-col-1 bento-row-1">
              <img src={imgs[2]?.url || "/home/carousel-2-min.jpg"} alt="Event Highlight" />
            </div>

            <div className="bento-item bento-img bento-col-1 bento-row-1">
              <img src={imgs[3]?.url || "/home/carousel-3-min.jpg"} alt="Event Highlight" />
            </div>

            <div className="bento-item bento-vid bento-col-2 bento-row-2">
              {vids[2] && <VideoCard vid={vids[2]} />}
            </div>

            <div className="bento-item bento-img bento-col-2 bento-row-1">
              <img src={imgs[8]?.url || "/home/carousel-4-min.png"} alt="Event Highlight" />
            </div>

            <div className="bento-item bento-img bento-col-1 bento-row-1">
              <img src={imgs[4]?.url || "/home/carousel-5-min.jpg"} alt="Event Highlight" />
            </div>

            <div className="bento-item bento-img bento-col-1 bento-row-1">
              <img src={imgs[5]?.url || "/home/carousel-6-min.jpg"} alt="Event Highlight" />
            </div>

            {/* ASYMMETRIC VIDEOS */}
            <div className="bento-item bento-vid bento-col-3 bento-row-2">
              {vids[3] && <VideoCard vid={vids[3]} />}
            </div>

            <div className="bento-item bento-vid bento-col-1 bento-row-2">
              {vids[4] && <VideoCard vid={vids[4]} />}
            </div>

            <div className="bento-item bento-img bento-col-4 bento-row-1">
              <img src={"home/about-end.jpg"} alt="Stage Highlights" style={{ objectPosition: 'top' }} />
            </div>

          </div>
        </section>


        <Footer />
      </div>
    </ReactLenis>
  );
};

export default Transition(About);
