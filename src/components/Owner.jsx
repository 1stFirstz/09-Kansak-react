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
          Over 1.5 years of experience as a Test Debug Engineer in the electrical field at Fabrinet Co., Ltd. Holds a Bachelor's degree in Electrical Engineering. 
          Strong in time management, planning, problem-solving, and communication. Proficient in JavaScript, React, API, SQL, MongoDB, GIT, HTML, CSS, and Python. 
          Actively seeking a Software Developer role to leverage technical and soft skills. Committed to customer focus, achievement motivation, and teamwork.
          </p>
        </div>
      </main>
    </div>
  );
}

export default Owner;
