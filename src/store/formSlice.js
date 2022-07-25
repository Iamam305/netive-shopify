import { createSlice } from '@reduxjs/toolkit'

const initialState = {

  // form step 
  formStep: 0,
  // basic information 
  appName: "",
  url: "",
  bundelId: "",
  appIcon: "",
  // styling

  primaryColor: '',
  primaryColorDark: '',
  color: '',
  splashScreen: "",

  // OS 
  AndroidOs: "",
  IOS: "",
  fullName: "",
  organizationName: "",
  keyAlias: "",
  keystorePass: "",
  signingCertificate: "",
  provisioningProfile: "",
  iosPassword: "",




}

const formSlice = createSlice({
  name: "form",
  initialState,

  reducers: {
    // jaruri nahi hi ki reducers ka nam set se hi suru ho mujhe kuch samjh nahi aya isiliye set kar diya 

    // formstep 

    incrementFormStep: (state, action) => { state.formStep += 1 },
    decrementFormStep: (state, action) => { state.formStep -= 1 },

    // basic infor reducer 
    SetAppName: (state, action) => { state.appName = action.payload },
    SetUrl: (state, action) => { state.url = action.payload },
    SetBundelId: (state, action) => { state.bundelId = action.payload },
    SetAppIcon: (state, action) => { state.appIcon = action.payload },

    // styling reducers 

    SetPrimaryColor: (state, action) => { state.primaryColor = action.payload },
    SetPrimaryColorDark: (state, action) => { state.primaryColorDark = action.payload },
    SetColor: (state, action) => { state.color = action.payload },
    SetSplashScreen: (state, action) => { state.splashScreen = action.payload },

    // os reducers 

    SetAndroidOs: (state, action) => { state.AndroidOs = action.payload },
    SetIOS: (state, action) => { state.IOS = action.payload },
    SetFullName: (state, action) => { state.fullName = action.payload },
    SetOrgnizationName: (state, action) => { state.organizationName = action.payload },
    SetKeyAlias: (state, action) => { state.keyAlias = action.payload },
    SetKeystorePass: (state, action) => { state.keystorePass = action.payload },
    SetSigningCertificate: (state, action) => { state.signingCertificate = action.payload },
    SetProvisioningProfile: (state, action) => { state.provisioningProfile = action.payload },
    SetIosPassword: (state, action) => { state.iosPassword = action.payload },


  }
});

export const { incrementFormStep, decrementFormStep, SetAppName, SetUrl, SetBundelId, SetAppIcon, SetPrimaryColor, SetPrimaryColorDark, SetColor, SetSplashScreen, SetAndroidOs, SetIOS, SetFullName, SetOrgnizationName, SetKeyAlias, SetKeystorePass, SetSigningCertificate, SetProvisioningProfile, SetIosPassword } = formSlice.actions

export default formSlice.reducer