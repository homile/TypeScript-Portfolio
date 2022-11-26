import { configureStore } from '@reduxjs/toolkit';
import skillReducer from './reducers/skillReducer';

const store = configureStore({ reducer: { skillReducer: skillReducer } });

export type RootState = ReturnType<typeof store.getState>;

export default store;