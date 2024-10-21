"use client";

import React, { useState } from 'react';
import { useSession } from "next-auth/react"; // Import useSession to access session data
import Link from 'next/link';

const Banner: React.FC = () => {
  // Array of banner images
  const images = [
    '/img/cover.jpg',
    '/img/cover2.jpg',
    '/img/cover3.jpg',
    '/img/cover4.jpg',
  ];

  // State to track the current image index
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Function to handle image change on click
  const handleImageClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Get session data
  const { data: session } = useSession();

  return (
    <div className="relative">
      <img
        src={images[currentImageIndex]} // Use the current image
        alt="Vaccine Advertisement"
        className="w-full h-auto cursor-pointer"
        onClick={handleImageClick}
      />
      <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center bg-black bg-opacity-50 text-white">
        <h1 className="text-7xl font-bold">Vaccine Service Center</h1>
        <p className="text-4xl">ประชาสัมพันธ์การให้บริการวัคซีนครบทุกประเภท</p>
      </div>

      {/* Show welcome message at the top-right if the user is logged in */}
      {session && session.user && (
        <div className="absolute top-2 right-2 text-lg bg-black bg-opacity-60 text-white px-3 py-1 rounded-md">
          Welcome {session.user.name}
        </div>
      )}

      <Link href="/hospital" className="absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
        Select Hospital
      </Link>
    </div>
  );
};

export default Banner;
