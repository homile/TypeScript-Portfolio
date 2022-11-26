import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface SelectInfo {
  skillSelected: string;
}

const initialState: SelectInfo = {
  skillSelected: 'Front-end',
};

const skillReducer = createSlice({
  name: 'skill-select',
  initialState,
  reducers: {
    skillSelected(state, action: PayloadAction<SelectInfo>) {
      state.skillSelected = action.payload.skillSelected;
    },
  },
});

export const skillActions = skillReducer.actions;

export default skillReducer.reducer;
