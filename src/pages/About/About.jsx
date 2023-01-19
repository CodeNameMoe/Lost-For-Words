import React from "react";
import "../About/about.css";
import aboutImg from "../../Images/about-img.jpg";

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="section-title">
          <h2>About</h2>
        </div>

        <div className="about-content grid">
          <div className="about-img">
            <img src={aboutImg} alt="" />
          </div>
          <div className="about-text">
            <h2 className="about-title fs-26 ls-1">About Lost For Words</h2>
            <p className="fs-17">
              Welcome to Lost For Words, the ultimate destination for book
              lovers everywhere. Our website is dedicated to helping you find
              your next favorite read, whether you're looking for a best-selling
              novel, a classic work of literature, or a niche title that you've
              never heard of before.
            </p>
            <p className="fs-17">
              So if you're looking for your next great read, look no further
              than Lost For Words. We're here to help you find the books you'll
              love, and make your reading experience as enjoyable and rewarding
              as possible.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
