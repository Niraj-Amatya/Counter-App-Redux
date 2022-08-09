import { createSlice } from '@reduxjs/toolkit';

const initialCounterState = {
  counter: 0,
  showCounter: true,
  changeColor: false,
  message: 'Numbers can not be negative',
};

const counterSlice = createSlice({
  name: 'counter',
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increaseBY(state, action) {
      console.log(action.payload);
      state.counter = state.counter + action.payload.value;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
    changeColor(state) {
      state.changeColor = !state.changeColor;
    },
    resetCounter(state) {
      state.counter = 0;
    },
  },
});

export const counterActions = counterSlice.actions;

export default counterSlice;
