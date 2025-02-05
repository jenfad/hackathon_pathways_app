"use client";

import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';

const SkillsAssessment = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const categories = [
    {
      name: "Technical Skills",
      questions: [
        "What programming languages are you proficient in?",
        "Which software tools have you used professionally?",
        "Describe your experience with databases"
      ]
    },
    {
      name: "Soft Skills",
      questions: [
        "How do you handle conflict in the workplace?",
        "Describe a successful team project you led",
        "How do you approach problem-solving?"
      ]
    },
    {
      name: "Industry Knowledge",
      questions: [
        "What industry certifications do you hold?",
        "Describe your experience in your field",
        "What are your areas of specialization?"
      ]
    }
  ];

  return (
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <CardTitle>Skills Assessment - Step {currentStep}/3</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="flex gap-2 mb-4">
            {[1, 2, 3].map(step => (
              <div
                key={step}
                className={`h-2 flex-1 rounded ${step <= currentStep ? 'bg-blue-500' : 'bg-gray-200'
                  }`}
              />
            ))}
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">
              {categories[currentStep - 1].name}
            </h3>
            {categories[currentStep - 1].questions.map((question, idx) => (
              <div key={idx} className="space-y-2">
                <p className="font-medium">{question}</p>
                <textarea
                  className="w-full p-2 border rounded-md h-24"
                  placeholder="Enter your response..."
                />
              </div>
            ))}
          </div>

          <div className="flex justify-between mt-6">
            <button
              className={`px-4 py-2 rounded ${currentStep > 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'
                }`}
              onClick={() => setCurrentStep(prev => Math.max(1, prev - 1))}
              disabled={currentStep === 1}
            >
              Previous
            </button>
            <button
              className={`px-4 py-2 rounded ${currentStep < 3 ? 'bg-blue-500 text-white' : 'bg-green-500 text-white'
                }`}
              onClick={() => setCurrentStep(prev => Math.min(3, prev + 1))}
            >
              {currentStep === 3 ? 'Submit' : 'Next'}
            </button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SkillsAssessment;
