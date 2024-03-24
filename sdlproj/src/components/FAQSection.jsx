import React, { useState } from 'react';
import arrowIcon from '../assets/arrow.png'; // Replace 'arrow.svg' with the actual path to your arrow icon
import faqImage from '../assets/faq.png'; // Import the faq.png image

const FAQSection = () => {
  const [showAnswer, setShowAnswer] = useState([]);

  const toggleAnswer = (index) => {
    const newShowAnswer = [...showAnswer];
    newShowAnswer[index] = !newShowAnswer[index];
    setShowAnswer(newShowAnswer);
  };

  const faqData = [
    { question: 'Question 1', answer: 'Answer to Question 1' },
    { question: 'Question 2', answer: 'Answer to Question 2' },
    { question: 'Question 3', answer: 'Answer to Question 3' },
    // Add more questions and answers as needed
  ];

  return (
    <div style={{ textAlign: 'center' }}>
      <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#000' }}>FREQUENTLY ASKED QUESTIONS</h2>
      <img src={faqImage} alt="FAQ Image" style={{ width: '200px', height: 'auto' }} /> {/* Add the FAQ image */}
      {faqData.map((item, index) => (
        <div key={index} style={{ textAlign: 'left', marginTop: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#000' }}>{item.question}</h3>
            <button onClick={() => toggleAnswer(index)} style={{ backgroundColor: 'transparent', border: 'none', cursor: 'pointer', marginLeft: '10px' }}>
              <img src={arrowIcon} alt="Arrow Icon" style={{ width: '20px', height: 'auto', transform: showAnswer[index] ? 'rotate(180deg)' : 'rotate(0deg)' }} />
            </button>
          </div>
          {showAnswer[index] && <p style={{ marginTop: '10px', fontSize: '1rem' }}>{item.answer}</p>}
        </div>
      ))}
    </div>
  );
};

export default FAQSection;
