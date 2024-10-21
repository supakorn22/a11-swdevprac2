// src/components/Card.tsx

import React, { useState } from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import Rating from '@mui/material/Rating';
import Link from 'next/link';
import Image from 'next/image';

interface HospitalCardProps {
  hospitalName: string;
  imgSrc: string;
  hid: string;
  onRatingChange?: (rating: number | null) => void; // Optional prop for rating changes
  onRemove: () => void; // Prop to handle removal
  ratingEnabled?: boolean; // New prop to determine whether to show Rating or not
}

const HospitalCard: React.FC<HospitalCardProps> = ({ 
  hospitalName, 
  imgSrc, 
  hid, 
  onRatingChange, 
  onRemove, 
  ratingEnabled = false // Default to false if not provided
}) => {
  const [rating, setRating] = useState<number | null>(null);

  const handleRatingChange = (event: React.SyntheticEvent, newValue: number | null) => {
    setRating(newValue);
    if (onRatingChange) {
      onRatingChange(newValue!); // Notify parent about rating change
    }
  };

  return (
    <Card sx={{ maxWidth: 370 }}>
      <Link href={`hospital/${hid}`} passHref>
        <Image
           src={imgSrc}
           alt={`${hospitalName} image`} 
           width={500} 
           height={300} 
        />
      </Link>
      <CardContent>
      <Link href={`hospital/${hid}`} passHref>

        <Typography variant="h6" component="div" sx={{ cursor: 'pointer', textDecoration: 'none' }}>
          {hospitalName}
        </Typography>
        </Link>

        {/* Conditionally render Rating based on ratingEnabled prop */}
        {ratingEnabled && (
          <Rating
            name={`${hospitalName} Rating`}
            id={`${hospitalName} Rating`}
            value={rating}
            onChange={handleRatingChange}
            data-testid={`${hospitalName} Rating`}
          />
        )}
      </CardContent>

      {/* The card itself can still be clicked to remove the hospital */}
      <div onClick={onRemove} style={{ cursor: 'pointer', textAlign: 'center', padding: '10px' }}>
        Remove Hospital
      </div>
    </Card>
  );
};

export default HospitalCard;
