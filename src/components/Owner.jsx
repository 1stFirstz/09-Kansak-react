import React from 'react';
import Nav from './Nav';

function Owner() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Nav />
      <main className="flex flex-col items-center justify-center mt-16 px-4">
        <h1 className="text-4xl font-extrabold text-gray-700 mb-8">KANSAK PITURAT</h1>
        <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-8 max-w-screen-lg">
          <div className="w-64 h-64 flex items-center justify-center mb-4 overflow-hidden rounded-full">
            <img 
              src="https://cdn.pixabay.com/photo/2016/02/10/08/59/alpaca-1191300_640.jpg" 
              alt="Owner profile" 
              className="object-cover h-full w-full"
            />
          </div>
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Short Biography</h2>
          <p className="text-center text-gray-600 leading-relaxed">
          Recent Bootcamp Generation graduate specializing in Junior Software Development. 
          I've been working as a vampire for 550 years. . Holds 99 coppies Master's degree in Electrical Engineering, Medicine, Phamacy and Law. 
          Strong in time management, planning, problem-solving, and communication. Proficient in JavaScript, React, API integration, SQL, MongoDB, Git, HTML, CSS, and Python, 
          with hands-on experience in building full-stack web applications. Familiar with cloud platforms like AWS and containerization tools like Docker. 
          Skilled in designing efficient database schemas and optimizing queries for performance. Experienced in implementing responsive and accessible user interfaces and working in agile development environments using version control and CI/CD pipelines.
          Actively seeking a Software Developer role to leverage both technical and soft skills in delivering impactful software solutions. 
          Committed to customer focus, achievement motivation, and teamwork, with a passion for continuous learning and adapting to emerging technologies.
          </p>
        </div>
      </main>
    </div>
  );
}

export default Owner;
