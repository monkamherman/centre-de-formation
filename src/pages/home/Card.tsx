import React from "react";

interface CardProps {
    icon: string;
    title: string;
    children: React.ReactNode;
    className?: string;
}

const Card:React.FC<CardProps> = ({ icon, title, children, className = "" }:CardProps) => {
    return (
      <div className={`bg-white dark:bg-dark-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow ${className}`}>
        <div className="text-primary mb-4">
          <i className={`fas ${icon} text-4xl`}></i>
        </div>
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300">{children}</p>
      </div>
    );
  };
  
  export default Card;