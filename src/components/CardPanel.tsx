"use client";

import React, { useState } from 'react';
import { Grid, Typography, Box } from '@mui/material';
import Card from './Card'; // Adjust the import path as necessary

const CardPanel: React.FC = () => {
  const cardsData = [
    {  hid: '001',hospitalName: 'Chulalongkorn Hospital', imgSrc: '/img/chula.jpg' },
    { hid: '002',hospitalName: 'Rajavithi Hospital', imgSrc: '/img/rajavithi.jpg' },
    { hid: '003',hospitalName: 'Thammasat University Hospital', imgSrc: '/img/thammasat.jpg' },
  ];

  const [ratings, setRatings] = useState<Array<number | null>>(Array(cardsData.length).fill(0));

  const handleRatingChange = (index: number, rating: number | null) => {
    const newRatings = [...ratings];
    newRatings[index] = rating;
    setRatings(newRatings);
  };

  // Create a list of hospitals with their ratings
  const ratedHospitals = cardsData
    .map((card, index) => ({
      name: card.hospitalName,
      rating: ratings[index],
      index, // Store the index to remove rating when clicked
    }))
    .filter(hospital => hospital.rating !== null); // Filter out hospitals without ratings

  const totalRatedCount = ratedHospitals.length; // Count of rated hospitals

  const handleRemoveRating = (index: number) => {
    handleRatingChange(index, null); // Remove rating when clicked
  };

  return (
    <Box>
      <Grid container spacing={2}>
        {cardsData.map((card, index) => (
          <Grid item key={card.hospitalName} xs={12} sm={6} md={4}>
            <Card
              hospitalName={card.hospitalName}
              imgSrc={card.imgSrc}
              hid={card.hid}
              onRatingChange={(rating) => handleRatingChange(index, rating)}
              onRemove={() => handleRatingChange(index, 0)} // Handle removal logic
            />
          </Grid>
        ))}
      </Grid>

      <Box sx={{ marginTop: 2, color: 'black' }}>
        <Typography variant="body1">Hospital List with Ratings: {totalRatedCount}</Typography>
        {ratedHospitals.map((hospital) => (
          <Typography
            key={hospital.name}
            variant="body2"
            data-testid={hospital.name}
            onClick={() => handleRemoveRating(hospital.index)} // Add click to remove rating
            sx={{ cursor: 'pointer', '&:hover': { textDecoration: 'underline' } }} // Visual cue for clickability
          >
            {hospital.name}: {hospital.rating} 
          </Typography>
        ))}
      </Box>
    </Box>
  );
};

export default CardPanel;
