import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-page">
      <header className="hero">
        <h1>Master Full Stack Development</h1>
        <p>Join the best cohort to accelerate your career.</p>
        <Link to="/courses" className="cta-button">View Courses</Link>
      </header>
      <section className="features">
        <div className="feature">
          <h3>Live Classes</h3>
          <p>Interact with instructors in real-time.</p>
        </div>
        <div className="feature">
          <h3>Projects</h3>
          <p>Build real-world projects for your portfolio.</p>
        </div>
        <div className="feature">
          <h3>Mentorship</h3>
          <p>Get guidance from industry experts.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
