
import {UserProfile} from '@/interface';

const API_URL = 'https://vaccine-app-backend-ebon.vercel.app/api/v1/auth/me';


const getUserProfile = async (token: string): Promise<UserProfile> => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    try {
      const res = await fetch(API_URL, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,  // ส่ง Bearer Token
          'Content-Type': 'application/json',
        },
      });
  
      if (!res.ok) {
        throw new Error('Failed to fetch user profile');
      }
  
      const data = await res.json();  // Return ค่าที่ได้รับจาก backend API
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

export default getUserProfile;
