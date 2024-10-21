'use client';
import React, { Suspense } from 'react';
import getHospital from '@/libs/getHospital'; // Adjust the import based on your folder structure
import Image from 'next/image';
import { HospitalItem } from '@/interface'; // Ensure HospitalItem matches your data structure
import LinearProgress from '@mui/material/LinearProgress';

interface HospitalDetailPageProps {
  params: { hid: string | string[] };
}

const HospitalDetailPage = async ({ params }: HospitalDetailPageProps) => {
  const hospitalId: string | undefined = Array.isArray(params.hid) ? params.hid[0] : params.hid;

  const hospitalData = await getHospital(hospitalId);

  return (
    <div>
      <Image
        src={hospitalData?.data.picture}
        alt={hospitalData?.data.name}
        width={500}
        height={300}
      />
      <div >
        <h1>{hospitalData?.data.name}</h1>
        <p>{hospitalData?.data.address}, {hospitalData?.data.district}, {hospitalData?.data.province} {hospitalData?.data.postalcode}</p>
    <p>Telephone: {hospitalData?.data.tel}</p>
      </div>
    </div>
  );

};
export default HospitalDetailPage;
