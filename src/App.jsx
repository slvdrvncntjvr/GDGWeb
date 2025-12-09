import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import QuestionCard from './components/QuestionCard';
import InvalidLink from './components/InvalidLink';
import './App.css';

const questions = {
  'x9k2mfp7qw': "Q1: Complete the famous tech saying: 'There is no cloud, it's just ______________.'",
  'n4bt8zj5vh': "Q2: I was born at Google to manage containers, and now I rule the entire cloud world. My logo is a ship's wheel. What am I?",
  'k3pm9wq5rt': "Q3: I am a Google product. I am fast, I am popular, but people make memes saying I 'eat' all your RAM.",
  'b6nz4xc8vy': "Q4: I will hold your files, photos, backups, and even your memes. What Google Cloud service am I?",
  'm2qf7ht9jw': "Q5: I can read, see, listen, and respond. Known for reasoning, multimodal skills, and powering smart chatbots across the internet."
};

function App() {
  return (
    <Router>
      <Routes>
        {Object.entries(questions).map(([path, question]) => (
          <Route
            key={path}
            path={`/${path}`}
            element={<QuestionCard question={question} />}
          />
        ))}
        <Route path="*" element={<InvalidLink />} />
      </Routes>
    </Router>
  );
}

export default App;
