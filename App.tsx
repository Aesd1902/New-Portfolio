
import React from 'react';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import { CONTACT_INFO, SKILLS, CERTIFICATIONS, SUMMARY, EXPERIENCES, EDUCATION, PERSONAL_DETAILS } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-100">
      <main className="container mx-auto max-w-7xl p-4 sm:p-6 lg:p-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4 xl:col-span-3">
            <Sidebar
              personalDetails={PERSONAL_DETAILS}
              contactInfo={CONTACT_INFO}
              skills={SKILLS}
              certifications={CERTIFICATIONS}
            />
          </div>
          <div className="lg:col-span-8 xl:col-span-9 mt-12 lg:mt-0">
            <MainContent
              summary={SUMMARY}
              experiences={EXPERIENCES}
              education={EDUCATION}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
