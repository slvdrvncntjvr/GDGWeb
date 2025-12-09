import React from 'react';

function QuestionCard({ question }) {
  return (
    <div className="card">
      <p className="question-text">{question}</p>
    </div>
  );
}

export default QuestionCard;
