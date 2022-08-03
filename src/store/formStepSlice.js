import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   // form step 
   formStep: 0,
}

const formStepSlice = createSlice({
  name: "formStep",
  initialState,
  reducers: {
    
     // formstep 

     incrementFormStep: (state, action) => { state.formStep += 1 },
     decrementFormStep: (state, action) => { state.formStep -= 1 },
  }
});

export const {incrementFormStep, decrementFormStep,} = formStepSlice.actions

export default formStepSlice.reducer