import React from 'react';
import { useState } from 'react';
import './App.css'
import FAQ from './components/FAQ/FAQ'
import Pricing from './components/Pricing/Pricing';
import AppSection from './components/AppSection/AppSection';
import Navbar from './components/Navbar/Navbar';
import Practice from './components/Practice/Practice';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <Navbar/>
      <AppSection />
      <Pricing/>
      <FAQ/>
      
      <Practice/>
    </>
  );
}

export default App;


