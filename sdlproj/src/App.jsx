import React from 'react';
import { useState } from 'react';
import './App.css';
import Pricing from './components/Pricing';
import Navbar from './components/Navbar';
import AppSection from './components/AppSection'; // Importing the AppSection component
import FAQSection from './components/FAQSection'; // Importing the FAQSection component

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <AppSection /> {/* Include the AppSection component below the Navbar */}
      <FAQSection /> {/* Include the FAQSection component below the AppSection */}

      <Pricing />
    </>
  );
}

export default App;


