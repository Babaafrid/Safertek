import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import MainBlock from './components/Main';
import Footer from './components/Footer';

const GradebookApp = () => {
  const [showStatistics, setShowStatistics] = useState(false);
  
  return (
    <div className="gradebook-app">
      <Header />
      <MainBlock 
        showStatistics={showStatistics}
        toggleStatistics={() => setShowStatistics(!showStatistics)}
      />
      <Footer />
    </div>
  );
};

export default GradebookApp;
