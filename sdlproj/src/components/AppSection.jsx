// components/AppSection.jsx
import React from 'react';
import svgImage from '../assets/interview.svg'; // Relative path to the SVG image

const AppSection = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px' }}>
      <div style={{ flex: '1', paddingRight: '50px' }}>
        <h1 style={{ fontSize: '3rem', margin: '0', fontWeight: 'bold', fontFamily: 'Arial, sans-serif', color: '#333', letterSpacing: '1px' }}>Say Goodbye to Interview Jitters: Embrace MOCKVIEW for Confidence.</h1>
        <h1 style={{ fontSize: '3rem', margin: '20px 0', fontWeight: 'bold', fontFamily: 'Arial, sans-serif', color: '#333', letterSpacing: '1px' }}>Be Interview-Ready Anytime, Anywhere with MOCKVIEW.</h1>
        <h1 style={{ fontSize: '3rem', margin: '20px 0', fontWeight: 'bold', fontFamily: 'Arial, sans-serif', color: '#333', letterSpacing: '1px' }}>Master the Art of Interviewing with MOCKVIEW: Land Your Dream Job.</h1>
        <p style={{ fontSize: '1.5rem', margin: '20px 0', fontFamily: 'Arial, sans-serif', textAlign: 'justify', color: '#666' }}>
          MOCKVIEW is the ultimate platform designed to help you conquer your interview fears and excel in your job search. With our innovative features, you can practice interviews anytime, anywhere, and gain the confidence needed to land your dream job. Start your journey to success with MOCKVIEW today!
        </p>
      </div>
      <img src={svgImage} alt="Floating Image" style={{ width: '700px', height: 'auto' }} />
    </div>
  );
};

export default AppSection;
