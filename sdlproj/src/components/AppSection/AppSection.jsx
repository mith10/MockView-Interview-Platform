// components/AppSection.jsx
import React from 'react';
import svgImage from '../../assets/interview.svg'; // Relative path to the SVG image
import secondSvg from '../../assets/secondSvg.svg'
import './AppSection.css';

const AppSection = () => {
  return (
//     <div className='container'>
//       <div className="row">
//       <div className="col-sm-5 offset-sm-2 col-md-6 offset-md-0">
//       <img src={svgImage} alt="Floating Image" style={{ width: '700px', height: 'auto' }} />
//       </div>
//       <div className="col-sm-5 col-md-6">Say Goodbye to Interview Jitters: Embrace MOCKVIEW for Confidence.
// Be Interview-Ready Anytime, Anywhere with MOCKVIEW.
// Master the Art of Interviewing with MOCKVIEW: Land Your Dream Job.</div>
//       </div>      
      
      <div className="container mt-5">
        <div className="row">
    <div className="col-sm-6">
    <img src={svgImage} alt="Floating Image" className='interview-img'/>

    </div>
    <div className="col-sm-6">
      <strong><h2>Ace Your Interviews: Expert Mock Interviews for Success</h2></strong>
      <h5 className='sub-text' style={{marginTop:"50px"}}>Prepare for your next interview with confidence using our expertly crafted mock interview simulations. Receive personalized feedback and tips from industry professionals to refine your skills and land your dream job.</h5>
    </div>
  </div>

  <div className="container mt-5">
        <div className="row">
        <div className="col-sm-6">
      <h2>Turbocharge Your Success with Aptitude Test Mastery!</h2>
      <h5 className='sub-text' style={{marginTop:"50px"}}>Unleash your full potential with our high-energy prep resources. Dive into dynamic practice exercises and focused strategies to soar to success in your aptitude tests!</h5>
    </div>
    <div className="col-sm-6">
    <img src={secondSvg} alt="Floating Image" className='interview-img'/>

    </div>
    
  </div>
    {/* </div> */}
    </div>
    {/* </div> */}
    </div>
    
    
  );
};

export default AppSection;
