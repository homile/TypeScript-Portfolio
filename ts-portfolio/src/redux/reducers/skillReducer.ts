import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface SelectInfo {
  skillSelected: number;
}

const initialState: SelectInfo = {
  skillSelected: 0,
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
