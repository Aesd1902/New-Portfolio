
import React from 'react';
import type { PersonalDetails, ContactInfo } from '../types';
import { EmailIcon, PhoneIcon, LinkedInIcon, PortfolioIcon, LocationIcon } from './icons';

interface SidebarProps {
  personalDetails: PersonalDetails;
  contactInfo: ContactInfo;
  skills: string[];
  certifications: string[];
}

const Sidebar: React.FC<SidebarProps> = ({ personalDetails, contactInfo, skills, certifications }) => {
  return (
    <aside className="lg:sticky lg:top-8 lg:h-[calc(100vh-4rem)] bg-white rounded-xl shadow-lg p-6 flex flex-col">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-slate-900">{personalDetails.name}</h1>
        <h2 className="text-md font-medium text-sky-600 mt-1">{personalDetails.title}</h2>
      </div>

      <div className="mt-8 border-t border-slate-200 pt-6">
        <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500 mb-4">Contact</h3>
        <ul className="space-y-3 text-sm text-slate-600">
          <li className="flex items-center">
            <EmailIcon className="w-5 h-5 mr-3 text-slate-400" />
            <a href={`mailto:${contactInfo.email}`} className="hover:text-sky-600 transition-colors">{contactInfo.email}</a>
          </li>
          <li className="flex items-center">
            <PhoneIcon className="w-5 h-5 mr-3 text-slate-400" />
            <span>{contactInfo.phone}</span>
          </li>
          <li className="flex items-center">
            <LocationIcon className="w-5 h-5 mr-3 text-slate-400" />
            <span>{contactInfo.location}</span>
          </li>
          <li className="flex items-center">
            <LinkedInIcon className="w-5 h-5 mr-3 text-slate-400" />
            <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-sky-600 transition-colors">LinkedIn Profile</a>
          </li>
          <li className="flex items-center">
            <PortfolioIcon className="w-5 h-5 mr-3 text-slate-400" />
            <a href={contactInfo.portfolio} target="_blank" rel="noopener noreferrer" className="hover:text-sky-600 transition-colors">Portfolio Website</a>
          </li>
        </ul>
      </div>

      <div className="mt-8 border-t border-slate-200 pt-6">
        <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500 mb-4">Top Skills</h3>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span key={index} className="bg-sky-100 text-sky-800 text-xs font-medium px-2.5 py-1 rounded-full">{skill}</span>
          ))}
        </div>
      </div>

      <div className="mt-8 border-t border-slate-200 pt-6 flex-grow overflow-y-auto">
        <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500 mb-4">Certifications</h3>
        <ul className="space-y-3 text-sm text-slate-600 list-disc list-inside">
          {certifications.map((cert, index) => (
            <li key={index}>{cert}</li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
