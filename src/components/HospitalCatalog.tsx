// src/components/HospitalCatalog.tsx
import React from 'react';
import HospitalCard from './Card'; // Import the HospitalCard component
import { HospitalJson, HospitalItem } from '@/interface'; // Import the interfaces

interface HospitalCatalogProps {
  hospitalsJson?: HospitalJson; // Prop for the hospital data (as Promise)
}

const HospitalCatalog: React.FC<HospitalCatalogProps> = async ({ hospitalsJson }) => {
  // Wait for the hospitalsJson Promise to resolve
  const hospitalsData = await hospitalsJson;

  return (
    <div style={{ display: 'flex', flexDirection: 'row', gap: '20px' }}>
      {hospitalsData?.data?.map((hospital: HospitalItem) => (
        <HospitalCard
          key={hospital._id}
          hospitalName={hospital.name}
          imgSrc={hospital.picture}
          hid={hospital.id}
          onRemove={() => console.log(`Removed hospital with ID: ${hospital.id}`)}
          // Not passing rating-related props, so Rating won't be shown
        />
      ))}
    </div>
  );
};

export default HospitalCatalog;
