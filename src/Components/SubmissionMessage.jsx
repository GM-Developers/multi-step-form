import React from 'react';

const SubmissionMessage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105">
        <svg
          className="w-24 h-24 text-indigo-500 mb-6 animate-bounce"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M5 13l4 4L19 7" />
        </svg>
        <h2 className="text-2xl font-bold text-indigo-600 mb-4">Form Submitted Successfully!</h2>
        <p className="text-lg text-gray-800 text-center">Thank you for submitting the form. Your response has been received.</p>
      </div>
    </div>
  );
};

export default SubmissionMessage;
