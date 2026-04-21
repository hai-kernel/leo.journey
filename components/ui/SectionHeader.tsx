import React from 'react';

interface SectionHeaderProps {
  title: string;
  icon?: React.ReactNode;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ title, icon }) => {
  return (
    <div className="flex items-center gap-3 mb-4 mt-6 border-b-2 border-black pb-1">
      {icon && <div className="text-cyan-500">{icon}</div>}
      <h2 className="text-xl font-bold uppercase tracking-wide text-gray-900">{title}</h2>
    </div>
  );
};