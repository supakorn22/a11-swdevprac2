"use client"; 
import React from 'react';
import { useRouter } from 'next/navigation'; // Change this import

interface TopMenuItemProps {
  label: string;
  href: string;
}

const TopMenuItem: React.FC<TopMenuItemProps> = ({ label, href }) => {
    return (
      <a
        href={href}
        className="text-white hover:bg-blue-500 rounded-md px-3 py-2"
      >
        {label}
      </a>
    );
  };
  

export default TopMenuItem;