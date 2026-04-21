import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({ children }) => {
  return (
    <span className="inline-block bg-blue-100 border border-black px-2 py-0.5 text-xs font-semibold rounded shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] mr-2 mb-2">
      {children}
    </span>
  );
};