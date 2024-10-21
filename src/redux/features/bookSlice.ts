import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BookingItem } from '@/interface';

interface BookState {
  bookItems: BookingItem[];
}

const initialState: BookState = {
  bookItems: [],
};

const bookSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {
    addBooking: (state, action: PayloadAction<BookingItem>) => {
      const existingBooking = state.bookItems.find(
        (item) => item.id === action.payload.id
      );
      if (existingBooking) {
        // Update existing booking
        existingBooking.name = action.payload.name;
        existingBooking.surname = action.payload.surname;
        existingBooking.hospital = action.payload.hospital;
        existingBooking.bookDate = action.payload.bookDate;
      } else {
        // Add new booking
        state.bookItems.push(action.payload);
      }
    },
    removeBooking: (state, action: PayloadAction<string>) => {
      state.bookItems = state.bookItems.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const { addBooking, removeBooking } = bookSlice.actions;
export default bookSlice.reducer;
