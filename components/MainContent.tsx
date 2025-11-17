
import React from 'react';
import type { Experience, Education } from '../types';
import ExperienceCard from './ExperienceCard';
import { BriefcaseIcon, AcademicCapIcon } from './icons';

interface MainContentProps {
  summary: string;
  experiences: Experience[];
  education: Education;
}

const MainContent: React.FC<MainContentProps> = ({ summary, experiences, education }) => {
  return (
    <div className="space-y-12">
      <section id="about" className="bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-slate-800 mb-4">About Me</h2>
        <p className="text-slate-600 leading-relaxed">{summary}</p>
      </section>

      <section id="experience">
        <div className="flex items-center mb-8">
            <BriefcaseIcon className="w-8 h-8 text-sky-600"/>
            <h2 className="text-3xl font-bold text-slate-800 ml-3">Experience</h2>
        </div>
        <div className="relative border-l-2 border-slate-200 pl-8 space-y-10">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} experience={exp} />
          ))}
        </div>
      </section>

      <section id="education" className="bg-white p-8 rounded-xl shadow-lg">
         <div className="flex items-center mb-4">
            <AcademicCapIcon className="w-8 h-8 text-sky-600"/>
            <h2 className="text-2xl font-bold text-slate-800 ml-3">Education</h2>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-slate-900">{education.institution}</h3>
          <p className="text-md text-slate-700">{education.degree}</p>
          <p className="text-sm text-slate-500 mt-1">{education.duration}</p>
        </div>
      </section>
    </div>
  );
};

export default MainContent;
