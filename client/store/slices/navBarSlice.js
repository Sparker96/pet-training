import { createSlice } from '@reduxjs/toolkit';

const initialState = { home: '', appointments: '', about: '', contact: '' };

const navBarSlice = createSlice({
  name: 'navBar',
  initialState,
  reducers: {
    setActive: (state, action) => {
        Object.keys(state).forEach(page => {
            console.log(page)
            state[page] = ''
        });
      state[action.payload] = 'active';
      console.log(state.appointments)
    },
  },
});

export const {setActive} = navBarSlice.actions;

export const selectActive = (state) => {
  return state.navBar;
};

export default navBarSlice.reducer;
