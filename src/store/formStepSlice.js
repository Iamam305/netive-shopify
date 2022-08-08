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
     SetFormStep: (state, action) => {state.formStep = action.payload}
  }
});

export const {incrementFormStep, decrementFormStep,SetFormStep} = formStepSlice.actions

export default formStepSlice.reducer