"use client";

import React, { ReactNode,useState  } from 'react';

interface InteractiveCardProps {
  children: ReactNode;
}

const InteractiveCard: React.FC<InteractiveCardProps> = ({ children }) => {
    const [isHovered, setIsHovered] = useState(false);


  return (
    <div className={`  ${
        isHovered
          ? 'shadow-2xl bg-neutral-200'
          : 'shadow-lg bg-white'
      }  rounded-lg transition-all duration-300 w-full flex `}
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
    
    >
      {children}
    </div>
  );
}

export default InteractiveCard;
