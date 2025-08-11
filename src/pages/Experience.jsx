// src/pages/Experience.jsx
import React from "react";

const experiences = [
  {
    company: "Hackta Connect",
    duration: "6 Months",
    description: "Worked on generating and optimizing website traffic through SEO, content marketing, and social media outreach. Improved engagement metrics and drove consistent traffic growth."
  },
  {
    company: "Halfur Tech",
    duration: "6 Months",
    description: "Provided customer support for US-based clients, resolving queries efficiently and ensuring high customer satisfaction."
  },
  {
    company: "Papa John’s",
    duration: "2 Years",
    description: "Handled cashier responsibilities, processed payments, and maintained friendly customer interactions in a fast-paced environment."
  },
  {
    company: "California Kitchen Assistant",
    duration: "1 Year",
    description: "Assisted with meal preparation, maintained kitchen hygiene, and supported chefs in a busy restaurant environment."
  }
];

const Experience = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8 text-center">Experience</h1>
      <div className="relative border-l border-gray-300">
        {experiences.map((exp, index) => (
          <div key={index} className="mb-10 ml-6">
            <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-blue-500 rounded-full ring-8 ring-white"></span>
            <h3 className="text-xl font-semibold">{exp.company}</h3>
            <p className="text-sm text-gray-500">{exp.duration}</p>
            <p className="mt-2 text-gray-700">{exp.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
