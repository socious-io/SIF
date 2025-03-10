import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ProjectState {
  name: string;
  wallet: string;
  cover_id: string;
  website?: string | null;
  description: string;
  social_cause: string;
  city: string;
  country: string;
}

const initialState: ProjectState = {
  name: '',
  wallet: '',
  cover_id: '',
  website: '',
  description: '',
  social_cause: '',
  city: '',
  country: '',
};

export const createProjectSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {
    setProjectData: (state, action: PayloadAction<Partial<ProjectState>>) => {
      return { ...state, ...action.payload };
    },
    resetProject: () => initialState,
  },
});

export const { setProjectData, resetProject } = createProjectSlice.actions;

export default createProjectSlice.reducer;
