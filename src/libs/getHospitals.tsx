import { HospitalJson,HospitalItem } from '@/interface'; 

const API_URL = 'https://vaccine-app-backend-ebon.vercel.app/api/v1/hospitals';

const getHospitals = async (): Promise<HospitalJson> => {

  try {
    await new Promise(resolve => setTimeout(resolve, 1000)); // เพิ่ม delay ก่อนทำการ fetch ข้อมูล


    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error('Failed to fetch hospital data');
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching hospital data:', error);
    throw error;
  }
};

export default getHospitals;