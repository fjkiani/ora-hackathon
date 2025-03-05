import React, { useState } from 'react';

function InteractiveTutorial({ topic }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [userProgress, setUserProgress] = useState({});
  
  // Example tutorial content
  const tutorialSteps = [
    {
      title: "Understanding Liquidity Pools",
      content: "Liquidity pools are...",
      quiz: {
        question: "What is the main purpose of a liquidity pool?",
        options: [
          "To store tokens securely",
          "To enable decentralized trading",
          "To generate governance tokens",
          "To reduce gas fees"
        ],
        answer: 1
      }
    },
    // More steps...
  ];
  
  const handleQuizAnswer = (stepIndex, answerIndex) => {
    const isCorrect = tutorialSteps[stepIndex].quiz.answer === answerIndex;
    
    setUserProgress(prev => ({
      ...prev,
      [stepIndex]: isCorrect
    }));
    
    if (isCorrect && stepIndex < tutorialSteps.length - 1) {
      // Move to next step if answer is correct
      setTimeout(() => setCurrentStep(stepIndex + 1), 1000);
    }
  };
  
  return (
    <div className="interactive-tutorial">
      <h3>{tutorialSteps[currentStep].title}</h3>
      
      <div className="tutorial-content">
        {tutorialSteps[currentStep].content}
      </div>
      
      <div className="tutorial-quiz">
        <p>{tutorialSteps[currentStep].quiz.question}</p>
        <div className="quiz-options">
          {tutorialSteps[currentStep].quiz.options.map((option, index) => (
            <button 
              key={index}
              onClick={() => handleQuizAnswer(currentStep, index)}
              className={userProgress[currentStep] !== undefined ? 
                (index === tutorialSteps[currentStep].quiz.answer ? 'correct' : 'incorrect') : ''}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
      
      <div className="tutorial-navigation">
        {/* Navigation buttons */}
      </div>
    </div>
  );
}

export default InteractiveTutorial; 