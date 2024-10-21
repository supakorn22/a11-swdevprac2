"use client";
import React, { useState } from 'react';
import VideoPlayer from './VideoPlayer';
import useWindowListener from '../hooks/useWindowListener';

const PromoteCard: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(true); // สถานะตั้งต้นของ video เป็น true (เล่นอยู่)

  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev); // เปลี่ยนสถานะ play/pause
  };

  // ใช้ useWindowListener เพื่อฟัง event 'contextmenu' และป้องกันการแสดง context menu
  useWindowListener('contextmenu', (event) => {
    event.preventDefault(); // ป้องกันการแสดง context menu เมื่อคลิกขวา
  });

  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <h2>Vaccine Promotion</h2>
      {/* ส่ง path ไปยังวิดีโอและสถานะการเล่นไปยัง VideoPlayer */}
      <VideoPlayer vdoSrc="/vdo/getvaccine.mp4" isPlaying={isPlaying} />
      <button onClick={togglePlayPause} style={{ marginTop: '10px' }}>
        {isPlaying ? 'Pause Video' : 'Play Video'}
      </button>
    </div>
  );
};

export default PromoteCard;
