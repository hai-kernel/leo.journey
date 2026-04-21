import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  icon,
  ...props 
}) => {
  const baseStyles = "inline-flex items-center gap-2 font-bold py-3 px-6 border-2 border-black rounded-lg transition-all duration-300 active:translate-x-[2px] active:translate-y-[2px] active:shadow-none";
  
  const variants = {
    primary: "bg-black text-white hover:bg-gray-800 shadow-[4px_4px_0px_0px_rgba(74,222,128,1)] hover:-translate-y-1", 
    // Secondary: Used for 'Let's Talk'. turns dark cyan (#db2777) on hover including border and shadow
    secondary: "bg-white text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:text-[#db2777] hover:border-[#db2777] hover:shadow-[6px_6px_0px_0px_#db2777] hover:-translate-y-1",
    outline: "bg-transparent text-black border-2 border-black hover:bg-black hover:text-white"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
      {icon && <span>{icon}</span>}
    </button>
  );
};