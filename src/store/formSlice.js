import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {

 
  // form data preset 
  androidChoose : true,
  iosChoose : false,
  
  
  appName :"",
  url :"",
  appIcon:'',
  package_name :'',


  primaryColor :"#ffd622",
  primaryColorDark :"#ffd622",
  colorAccent: "#222222",
  splashScreenType : "fade",
  
  
  keystoreSetting : 'new',
  
  keystoreName : "keystore",
  Name :"firstname lastname",
  OrganizationUnit :"IT",
  Organization :"organization",
  City :"XX",
  State :"XX",
  CountryCode :"XX",
  keystorePassword :"keystorepassword",
  keyAlias :"alias",
  keyPassword :"keystorepassword",
  admob: false,
  pushNotication: false
  
  

}




const formSlice = createSlice({
  name: "form",
  initialState,

  reducers: {
    // jaruri nahi hi ki reducers ka nam set se hi suru ho mujhe kuch samjh nahi aya isiliye set kar diya 

  

    // basic infor reducer 
    SetAppName: (state, action) => { state.appName = action.payload },
    SetUrl: (state, action) => { state.url = action.payload },
    SetBundelId: (state, action) => { state.package_name = action.payload },
    SetAppIcon: (state, action) => { state.appIcon  = action.payload },

    // styling reducers 

    SetPrimaryColor: (state, action) => { state.primaryColor = action.payload },
    SetPrimaryColorDark: (state, action) => { state.primaryColorDark  = action.payload },
    SetColor: (state, action) => { state.colorAccent  = action.payload },
    SetSplashScreen: (state, action) => { state.splashScreenType  = action.payload },

    // additional features reducers 

    SetPushNotification : (state, action) =>{state.pushNotication = action.payload},
    SetGoogleServiceFileJson : (state, action) =>{state.GoogleServiceFileJson = action.payload},
    SetGoogleServiceFilePlist  : (state, action) =>{state.GoogleServiceFilePlist  = action.payload},



    // os reducers 

    SetAndroidOs: (state, action) => { state.androidChoose = action.payload },
    SetIOS: (state, action) => { state.iosChoose = action.payload },
    SetFullName: (state, action) => { state.Name = action.payload },
    SetOrgnizationName: (state, action) => { state.Organization = action.payload },
    SetKeyAlias: (state, action) => { state.keyAlias= action.payload },
    SetKeystorePass: (state, action) => { state.keyPassword = action.payload },
    SetSigningCertificate: (state, action) => { state.ios_certificate = action.payload },
    SetProvisioningProfile: (state, action) => { state.ios_provisioning_profile = action.payload },
    SetIosPassword: (state, action) => { state.ios_certificate_password = action.payload},


  },


});

export const {  SetAppName, SetUrl, SetBundelId, SetAppIcon, SetPrimaryColor, SetPrimaryColorDark, SetColor, SetSplashScreen, SetAndroidOs, SetIOS, SetFullName, SetOrgnizationName, SetKeyAlias, SetKeystorePass, SetSigningCertificate, SetProvisioningProfile, SetIosPassword, SetPushNotification,SetGoogleServiceFileJson, SetGoogleServiceFilePlist } = formSlice.actions

export default formSlice.reducer