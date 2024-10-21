"use client";
import React from 'react';
import { TextField, Select, MenuItem, Button, FormControl, InputLabel, Typography } from '@mui/material';
import DateReserve from '@/components/DateReserve';
import getUserProfile from '@/libs/getUserProfile'; // Import the function from libs
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/authOptions';
import next from 'next';
// Define the structure of the user profile data you expect from the API


const BookingPage = async () => {

  const session = await getServerSession(authOptions);
  if (!session || !session.user.token) {
    return null;
  }
  const profile = await getUserProfile(session.user.token);



  return (
    <div style={{ width: '400px', margin: '0 auto', padding: '20px' }}>
      {/* Show user profile info if logged in */}
      
        <div style={{ marginBottom: '20px', padding: '10px', background: '#f0f0f0', borderRadius: '8px' }}>
          <Typography variant="h6">User Profile</Typography>
          <Typography><strong>Name:</strong> {profile.data.name}</Typography>
          <Typography><strong>Email:</strong> {profile.data.email}</Typography>
          <Typography><strong>Tel:</strong> {profile.data.tel}</Typography>
          <Typography><strong>Member Since:</strong> {new Date(profile.data.createdAt).toLocaleDateString()}</Typography>
        </div>
      

      <form style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <TextField
          label="Name-Lastname"
          name="Name-Lastname"
          variant="standard"
          required
        />
        <TextField
          label="Citizen ID"
          name="Citizen ID"
          variant="standard"
          required
        />
        <FormControl variant="standard" fullWidth>
          <InputLabel id="hospital-label">Select Hospital</InputLabel>
          <Select
            labelId="hospital-label"
            id="hospital"

          >
            <MenuItem value="Chula">Chulalongkorn Hospital</MenuItem>
            <MenuItem value="Rajavithi">Rajavithi Hospital</MenuItem>
            <MenuItem value="Thammasat">Thammasat University Hospital</MenuItem>
          </Select>
        </FormControl>
        <DateReserve />
        <Button type="submit" name="Book Vaccine" variant="contained" color="primary">
          Book Vaccine
        </Button>
      </form>
    </div>
  );
};

export default BookingPage;
