// src/pages/hospital/page.tsx
"use client";
import React, { Suspense,useEffect,useState } from 'react';
import  getHospitals  from '@/libs/getHospitals'; 
import HospitalCatalog from '@/components/HospitalCatalog';
import LinearProgress from '@mui/material/LinearProgress'; 
const HospitalPage = async () => {
  const hospitalsJsonPromise = await getHospitals();
  
  return (
    <div style={{ marginTop: '16px' }}>
      <h1>Hospital List</h1>

      <Suspense fallback={<LinearProgress />}>
        <HospitalCatalog hospitalsJson={hospitalsJsonPromise} />
      </Suspense>
    </div>
  );
};


export default HospitalPage;