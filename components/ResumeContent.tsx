import React from 'react';
import { RESUME_DATA } from '../constants';
import { SectionHeader } from './ui/SectionHeader';
import { Badge } from './ui/Badge';
import { 
  Briefcase, 
  GraduationCap, 
  Award, 
  ScrollText, 
  MapPin, 
  Phone, 
  Mail, 
  Github, 
  User 
} from 'lucide-react';

export const ResumeContent: React.FC = () => {
  const { contact, education, experience, projects, certifications, awards, objective, name, realName, title } = RESUME_DATA;

  return (
    <div className="text-gray-900 leading-relaxed">
      {/* Header Section */}
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center border-b-4 border-black pb-6 mb-6 gap-4">
        <div>
          <h1 className="text-5xl font-extrabold mb-2 tracking-tight text-black drop-shadow-sm">
            {name}
          </h1>
          <h2 className="text-xl font-bold text-gray-600 mb-1">{realName}</h2>
          <p className="text-lg font-medium bg-yellow-200 inline-block px-2 border border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
            {title}
          </p>
        </div>
        
        <div className="flex flex-col gap-2 text-sm font-medium">
          <div className="flex items-center gap-2">
            <Phone size={16} className="text-black" />
            <span>{contact.phone}</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail size={16} className="text-black" />
            <a href={`mailto:${contact.email}`} className="hover:underline hover:text-blue-600">{contact.email}</a>
          </div>
          <div className="flex items-center gap-2">
            <Github size={16} className="text-black" />
            <a href={`https://${contact.github}`} target="_blank" rel="noreferrer" className="hover:underline hover:text-blue-600">{contact.github}</a>
          </div>
          <div className="flex items-center gap-2">
            <User size={16} className="text-black" />
            <a href={`https://${contact.linkedin}`} target="_blank" rel="noreferrer" className="hover:underline hover:text-blue-600">{contact.linkedin}</a>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={16} className="text-black" />
            <span>{contact.location}</span>
          </div>
        </div>
      </header>

      {/* Objective */}
      <section>
        <SectionHeader title="Objective" icon={<User size={24} />} />
        <p className="text-gray-800 text-justify font-medium">
          {objective}
        </p>
      </section>

      {/* Experience */}
      <section>
        <SectionHeader title="Work Experience" icon={<Briefcase size={24} />} />
        <div className="flex flex-col gap-8">
          {experience.map((exp, index) => (
            <div key={index} className="relative pl-4 border-l-2 border-gray-300">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-black border-2 border-white ring-1 ring-black"></div>
              
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-bold">{exp.company}</h3>
                  {exp.location && <span className="text-sm text-gray-600 italic">({exp.location})</span>}
                </div>
                <span className="text-sm font-bold bg-blue-200 border border-black px-2 py-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  {exp.duration}
                </span>
              </div>
              
              <p className="text-lg font-semibold text-gray-700 mb-3">{exp.role}</p>
              
              <div className="mb-3">
                {exp.technologies.map(tech => (
                  <Badge key={tech}>{tech}</Badge>
                ))}
              </div>

              {exp.description && <p className="mb-2 italic text-gray-600">{exp.description}</p>}
              
              {exp.keyFeatures && exp.keyFeatures.length > 0 && (
                <div className="mb-2">
                  <span className="font-bold underline decoration-blue-400 decoration-2">Key Features:</span>
                  <ul className="list-disc list-inside mt-1 space-y-1">
                    {exp.keyFeatures.map((feat, i) => (
                      <li key={i} className="text-gray-800">{feat}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div>
                <span className="font-bold underline decoration-blue-400 decoration-2">Key Contributions:</span>
                <ul className="list-disc list-inside mt-1 space-y-1">
                  {exp.keyContributions.map((contrib, i) => (
                    <li key={i} className="text-gray-800">{contrib}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="mt-8">
        <SectionHeader title="Projects" icon={<Github size={24} />} />
        <div className="flex flex-col gap-8">
          {projects.map((exp, index) => (
            <div key={index} className="relative pl-4 border-l-2 border-gray-300">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-black border-2 border-white ring-1 ring-black"></div>
              
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-bold">{exp.company}</h3>
                  {exp.location && <span className="text-sm text-gray-600 italic">({exp.location})</span>}
                </div>
                <span className="text-sm font-bold bg-blue-200 border border-black px-2 py-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  {exp.duration}
                </span>
              </div>
              
              <p className="text-lg font-semibold text-gray-700 mb-3">{exp.role}</p>
              
              <div className="mb-3">
                {exp.technologies.map(tech => (
                  <Badge key={tech}>{tech}</Badge>
                ))}
              </div>

              {exp.description && <p className="mb-2 italic text-gray-600">{exp.description}</p>}
              
              {exp.keyFeatures && exp.keyFeatures.length > 0 && (
                <div className="mb-2">
                  <span className="font-bold underline decoration-blue-400 decoration-2">Key Features:</span>
                  <ul className="list-disc list-inside mt-1 space-y-1">
                    {exp.keyFeatures.map((feat, i) => (
                      <li key={i} className="text-gray-800">{feat}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div>
                <span className="font-bold underline decoration-blue-400 decoration-2">Key Contributions:</span>
                <ul className="list-disc list-inside mt-1 space-y-1">
                  {exp.keyContributions.map((contrib, i) => (
                    <li key={i} className="text-gray-800">{contrib}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section>
        <SectionHeader title="Education" icon={<GraduationCap size={24} />} />
        {education.map((edu, index) => (
          <div key={index} className="mb-4 bg-gray-50 p-4 border-2 border-black rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <div className="flex justify-between items-center mb-1">
              <h3 className="text-lg font-bold">{edu.institution}</h3>
              <span className="font-mono text-sm">{edu.duration}</span>
            </div>
            <p className="font-semibold text-blue-600 mb-2">{edu.degree}</p>
            {edu.details.map((detail, i) => (
              <p key={i} className="text-sm text-gray-700">{detail}</p>
            ))}
          </div>
        ))}
      </section>

      {/* Certifications & Awards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <section>
          <SectionHeader title="Certifications" icon={<ScrollText size={24} />} />
          <ul className="space-y-4">
            {certifications.map((cert, index) => (
              <li key={index} className="flex flex-col bg-white border border-black p-3 shadow-[3px_3px_0px_0px_rgba(0,0,0,0.2)]">
                <span className="font-bold text-sm">{cert.name}</span>
                <span className="text-xs text-gray-500 mt-1 uppercase tracking-wider">{cert.date}</span>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <SectionHeader title="Honors & Awards" icon={<Award size={24} />} />
          <ul className="space-y-4">
            {awards.map((award, index) => (
              <li key={index} className="flex flex-col bg-white border border-black p-3 shadow-[3px_3px_0px_0px_rgba(0,0,0,0.2)]">
                <span className="font-bold text-sm">{award.name}</span>
                <span className="text-xs text-gray-500 mt-1 uppercase tracking-wider">{award.date}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};