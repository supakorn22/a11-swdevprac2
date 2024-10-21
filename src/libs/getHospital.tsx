import { SingleHospitalJson } from '@/interface'; // Adjust the import path

const API_URL = 'https://vaccine-app-backend-ebon.vercel.app/api/v1/hospitals';
const getHospital = async (hid: string): Promise<SingleHospitalJson> => {

  try {
    await new Promise(resolve => setTimeout(resolve, 1000)); // Delay before fetching data

    const response = await fetch(`${API_URL}/${hid}`);
    if (!response.ok) {
      throw new Error('Failed to fetch hospital data');
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching hospital data:', error);
    throw error;
  }
};


export default getHospital; 