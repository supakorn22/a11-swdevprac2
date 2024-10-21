export  interface HospitalItem {
    _id: string,
    name: string,
    address: string,
    district: string,
    province: string,
    postalcode: string,
    tel: string,
    picture: string,
    __v: number,
    id: string
  }
  
  export   interface HospitalJson {
    success: boolean,
    count: number,
    pagination: Object,
    data: HospitalItem[]
  }

  export interface SingleHospitalJson {
    success: boolean;
    data: HospitalItem;
  }


  export interface UserProfile {
    success: boolean,
    data: {
      _id: string,
      name: string,
      email: string,
      tel: string,
      role: string,
      createdAt: string,
      __v: number,
    }
  }

  export interface userLogInResponse {
    success: boolean,
    _id: string,
    name: string,
    email: string,
    token: string,
  }

  export   interface BookingItem {
    name: string,
    surname: string,
    id : string,
    hospital: string,
    bookDate: string,
  }