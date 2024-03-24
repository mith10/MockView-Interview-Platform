import React from 'react';
import logoImage from '../assets/logo.png'; // Replace 'logo.png' with the actual path to your logo image

const Navbar = () => {
  return (
    <nav style={{ backgroundColor: '#f5f5f5', marginTop: '0px', color: '#000', padding: '20px', boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.1)' }}> {/* Lighter background for perceived darker text */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <img src={logoImage} alt="Logo" style={{ height: '110px' }} /> {/* Adjust height as needed */}
        </div>
        <ul style={{ listStyleType: 'none', marginLeft:'60px', margin: '0 20px', padding: '0', display: 'flex', fontFamily: 'Poppins, sans-serif', gap: '60px', flexGrow: 1, justifyContent: 'left', alignItems: 'center' }}>
          <li><a href="#" style={{ textDecoration: 'none', color: '#000', fontWeight: 'bold', fontSize: '1.2rem' }}>Practitioner</a></li>
          <li><a href="#" style={{ textDecoration: 'none', color: '#000', fontWeight: 'bold', fontSize: '1.2rem' }}>Find</a></li>
          <li><a href="#" style={{ textDecoration: 'none', color: '#000', fontWeight: 'bold', fontSize: '1.2rem' }}>Job</a></li>
          <li><a href="#" style={{ textDecoration: 'none', color: '#000', fontWeight: 'bold', fontSize: '1.2rem' }}>Interviewee</a></li>
        </ul>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <button style={{ backgroundColor: 'transparent', color: '#000', fontWeight: 'bold', padding: '15px 30px', border: '2px solid #000', borderRadius: '8px', cursor: 'pointer', marginRight: '10px' }}>Login</button>
          <button style={{ backgroundColor: '#000', color: '#fff', fontWeight: 'bold', padding: '15px 30px', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>Join Now</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
