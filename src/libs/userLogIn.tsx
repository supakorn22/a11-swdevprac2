import { promises } from "dns";
import {userLogInResponse} from '@/interface';


const API_URL = 'https://vaccine-app-backend-ebon.vercel.app/api/v1/auth/login';


const  userLogIn = async (userEmail: string, userPassword: string): Promise<userLogInResponse> => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    const res = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: userEmail,
        password: userPassword,
      }),
    });
  
    if (!res.ok) {
      throw new Error('Failed to log in');
    }
  
    const data = await res.json();
    return data;
  };
  
export default userLogIn;