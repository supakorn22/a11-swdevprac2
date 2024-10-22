"use client";
import React from 'react';
import { useState } from 'react';
import { SelectChangeEvent } from '@mui/material';
import { TextField, Select, MenuItem, Button, FormControl, InputLabel, Typography } from '@mui/material';
import DateReserve from '@/components/DateReserve';
import getUserProfile from '@/libs/getUserProfile'; // Import the function from libs
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/authOptions';
import next from 'next';
import { addBooking } from '@/redux/features/bookSlice';
import { useDispatch } from 'react-redux';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs, { Dayjs } from 'dayjs';

// const BookingPage = async () => {
const BookingPage = () => {
    const dispatch = useDispatch();


  const [hospital, setHospital] = useState('');
  const handleHospitalChange = (event: SelectChangeEvent<string>) => {
    setHospital(event.target.value);
  };

  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [id, setId] = useState('');
  const [bookDate, setBookDate] = useState<Dayjs | null>(null);
  // const dispatch = useDispatch();

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log(name + ' ' + surname + ' ' + id + ' ' + hospital + ' ' + (bookDate ? bookDate.format('YYYY-MM-DD') : ''));
    dispatch(addBooking({ name, surname, id, hospital, bookDate: bookDate ? bookDate.format('YYYY-MM-DD') : '' }));
  };

  return (
    <div style={{ width: '400px', margin: '0 auto', padding: '20px' }}>


      <form  onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }} >
        <TextField
          label="First Name"
          name="Name"
          value={name} 
          onChange={(e) => setName(e.target.value)}
          variant="standard"
          required
        />
        <TextField
          label="Last Name"
          name="Lastname"
          value={surname} 
          onChange={(e) => setSurname(e.target.value)}
          variant="standard"
          required
        />
        <TextField
          label="Citizen ID"
          name="Citizen ID"
          value={id} 
          onChange={(e) => setId(e.target.value)}
          variant="standard"
          required
        />
        <FormControl variant="standard" fullWidth>
          <InputLabel id="hospital-label">Select Hospital</InputLabel>
          <Select
            labelId="hospital-label"
            id="hospital"
            value={hospital}
          onChange={handleHospitalChange}
          >
            <MenuItem value="Chula">Chulalongkorn Hospital</MenuItem>
            <MenuItem value="Rajavithi">Rajavithi Hospital</MenuItem>
            <MenuItem value="Thammasat">Thammasat University Hospital</MenuItem>
          </Select>
        </FormControl>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label="Select Date"
        name='DatePicker'
        value={bookDate}
        onChange={(newValue) => setBookDate(newValue)}
      />
    </LocalizationProvider>
        <Button type="submit" name="Book Vaccine" variant="contained" color="primary">
          Book Vaccine
        </Button>
      </form>
    </div>
  );
};

export default BookingPage;
