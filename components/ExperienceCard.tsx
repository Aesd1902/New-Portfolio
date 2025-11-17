
import React from 'react';
import type { Experience } from '../types';

interface ExperienceCardProps {
  experience: Experience;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  return (
    <div className="relative">
      <div className="absolute -left-[3.2rem] top-1.5 w-4 h-4 bg-white border-2 border-sky-600 rounded-full"></div>
      <div className="bg-white p-6 rounded-xl shadow-md transition-shadow hover:shadow-lg">
        <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-2">
          <h3 className="text-lg font-bold text-slate-900">{experience.role}</h3>
          <p className="text-sm font-medium text-sky-600 mt-1 sm:mt-0">{experience.company}</p>
        </div>
        <div className="flex flex-col sm:flex-row justify-between text-xs text-slate-500 mb-4">
          <span>{experience.duration}</span>
          <span>{experience.location}</span>
        </div>
        <ul className="space-y-2 text-sm text-slate-600 list-disc list-inside">
          {experience.points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceCard;
