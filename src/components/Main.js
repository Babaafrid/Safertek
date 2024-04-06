import React from 'react';
import StudentTable from './StudentTable';

const Main = ({ showStatistics, toggleStatistics }) => {
  return (
    <div className="main-block">
      <div className="options">
        <button onClick={toggleStatistics}>
          {showStatistics ? 'Hide Statistics' : 'Show Statistics'}
        </button>
      </div>
      <StudentTable showStatistics={showStatistics} />
    </div>
  );
};

export default Main;
