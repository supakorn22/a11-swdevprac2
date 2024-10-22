import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { removeBooking } from '../redux/features/bookSlice';
import {useAppSelector,AppDispatch} from '@/redux/store';

const BookingList = () => {
  const bookings = useAppSelector((state) => state.bookSlice.bookItems);
  const dispatch = useDispatch<AppDispatch>();

  const handleRemove = (id: string) => {
    dispatch(removeBooking(id));
  };

  if (bookings.length === 0) {
    return <p>No Vaccine Booking</p>;
  }

  return (
    <ul>
      {bookings.map((booking) => (
        <li key={booking.id}>
        {booking.id} - {booking.name} {booking.surname} - {booking.hospital} - {booking.bookDate}
          <button onClick={() => handleRemove(booking.id)}>Cancel</button>
        </li>
      ))}
    </ul>
  );
};

export default BookingList;
