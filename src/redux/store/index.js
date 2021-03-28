import { createStore } from 'redux';
import reduces from '../reduces';

const initialState = {
  days: 11,
  hours: 0,
  minutes: 0,
  seconds: 1,
  activeSession: "minutes"
};
export const store = createStore(reduces, initialState);

