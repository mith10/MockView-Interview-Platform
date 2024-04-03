import React from 'react';
import './AppSection.css'; // Import CSS file for styling
import svgImage from '../../assets/interview.svg'; // Relative path to the SVG image

const AppSection = () => {
  return (
    <div className="app-section-container">
      <div className="app-section-content">
        <h1 className="app-section-heading">Say Goodbye to Interview Jitters: Embrace MOCKVIEW for Confidence.</h1>
        <h1 className="app-section-heading">Be Interview-Ready Anytime, Anywhere with MOCKVIEW.</h1>
        <h1 className="app-section-heading">Master the Art of Interviewing with MOCKVIEW: Land Your Dream Job.</h1>
        <p className="app-section-paragraph">
          MOCKVIEW is the ultimate platform designed to help you conquer your interview fears and excel in your job search. With our innovative features, you can practice interviews anytime, anywhere, and gain the confidence needed to land your dream job. Start your journey to success with MOCKVIEW today!
        </p>
      </div>
      <img src={svgImage} alt="Floating Image" className="app-section-image" />
    </div>
  );
};

export default AppSection;
