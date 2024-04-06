  import React,{useState} from 'react';

  const StudentTable = ({ showStatistics }) => {
    const [filterOption, setFilterOption] = useState("all");
  const [sortOrder, setSortOrder] = useState("asc");
    const students = [
      {
        id: 1,
        name: "afrid",
        ticketNumber: 500,
        ratingGrade: 5,
        examGrade: 6,
      },
      {
        id: 2,
        name: "baba",
        ticketNumber: 501,
        ratingGrade: 6,
        examGrade: 6,
      },
      {
        id: 3,
        name: "ABC",
        ticketNumber: 502,
        ratingGrade: 2,
        examGrade: 4,
      },
      {
        id: 4,
        name: "DEF",
        ticketNumber: 503,
        ratingGrade: 7,
        examGrade: 6,
      },
      {
        id: 5,
        name: "GHI",
        ticketNumber: 504,
        ratingGrade: 4,
        examGrade: 4,
      },
      {
        id: 6,
        name: "JKL",
        ticketNumber: 505,
        ratingGrade: 2,
        examGrade: 7,
      },
      {
        id: 7,
        name: "MNO",
        ticketNumber: 506,
        ratingGrade: 5,
        examGrade: 7,
      },
      {
        id: 8,
        name: "PQR",
        ticketNumber: 507,
        ratingGrade: 7,
        examGrade: 6,
      },
      {
        id: 9,
        name: "STU",
        ticketNumber: 508,
        ratingGrade: 3,
        examGrade: 6,
      },
      {
        id: 10,
        name: "VWX",
        ticketNumber: 509,
        ratingGrade: 3,
        examGrade: 3,
      },
    ];

    let filteredStudents = students;
  if (filterOption === "passed") {
    filteredStudents = students.filter(student => student.examGrade * 0.6 + student.ratingGrade * 0.4 > 4);
  } else if (filterOption === "failed") {
    filteredStudents = students.filter(student => student.examGrade * 0.6 + student.ratingGrade * 0.4 <= 4);
  }

  if (sortOrder === "asc") {
    filteredStudents.sort((a, b) => a.examGrade * 0.6 + a.ratingGrade * 0.4 - b.examGrade * 0.6 + b.ratingGrade * 0.4);
  } else {
    filteredStudents.sort((a, b) => b.examGrade * 0.6 + b.ratingGrade * 0.4 - a.examGrade * 0.6 + a.ratingGrade * 0.4);
  }

    const passedStudentsCount = students.filter(student => student.examGrade * 0.6 + student.ratingGrade * 0.4 > 4).length;
    const averageGrade = students.reduce((total, student) => total + (student.examGrade * 0.6 + student.ratingGrade * 0.4), 0) / students.length;
    const maxGrade = Math.max(...students.map(student => student.examGrade * 0.6 + student.ratingGrade * 0.4));
    const minGrade = Math.min(...students.map(student => student.examGrade * 0.6 + student.ratingGrade * 0.4));
    const totalStudents = students.length;

    return (
      <div>
         <div className="options">
        <label>
          Filter:
          <select value={filterOption} onChange={e => setFilterOption(e.target.value)}>
            <option value="all">All</option>
            <option value="passed">Passed</option>
            <option value="failed">Failed</option>
          </select>
        </label>
        <label>
          Sort Order:
          <select value={sortOrder} onChange={e => setSortOrder(e.target.value)}>
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </label>
      </div>
          <table className="student-table">
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Ticket Number</th>
            <th>Rating Grade</th>
            <th>Exam Grade</th>
            <th>Final Grade</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredStudents.map((student, index) => (
            <tr key={student.id}>
              <td>{index + 1}</td>
              <td>{student.name}</td>
              <td>{student.ticketNumber}</td>
              <td>{student.ratingGrade}</td>
              <td>{student.examGrade}</td>
              <td>{student.examGrade * 0.6 + student.ratingGrade * 0.4}</td>
              <td>
                {student.examGrade * 0.6 + student.ratingGrade * 0.4 > 4 ? "Passed" : "Failed"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {showStatistics && (
        <div className="statistics-block">
          <h2>Statistics</h2>
          <p>Total Students: {students.length}</p>
          <p>Passed Students: {passedStudentsCount}</p>
          <p>Average Grade: {averageGrade.toFixed(2)}</p>
          <p>Max Grade: {maxGrade}</p>
          <p>Min Grade: {minGrade}</p>
        </div>
      )}
      </div>
      
    );
  };

  export default StudentTable;
