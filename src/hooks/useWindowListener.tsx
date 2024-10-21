import { useEffect } from 'react';

const useWindowListener = (eventType: string, listener: EventListener) => {
  useEffect(() => {
    // เพิ่ม listener เมื่อ component render ครั้งแรก
    window.addEventListener(eventType, listener);

    // ลบ listener เมื่อ component ถูกทำลายหรือ eventType/ listener เปลี่ยนแปลง
    return () => {
      window.removeEventListener(eventType, listener);
    };
  }, [eventType, listener]); // ให้ทำงานเฉพาะเมื่อ eventType หรือ listener เปลี่ยน
};

export default useWindowListener;