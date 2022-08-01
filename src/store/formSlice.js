import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {

  // form step 
  formStep: 0,
  // form data preset 
  keystoreSetting : 'new',
  admobEnable : false,
  pushNotifications : false,

  
platform : 'android',


appName :"app6",
url :"https://lol.mummy",
appIcon:[],

package_name :'aaaa.app',
primaryColor :"#fff",
primaryColorDark :"fff",
colorAccent: "#fff",


splashScreenType : 1,


keystoreSetting : 'new',

keystoreName : "new",
Name :"new",
OrganizationUnit :"new",
Organization :"new",
City :"new",
State :"new",
CountryCode :"new",
keystorePassword :"new",
keyAlias :"new",
keyPassword :"new",














bottom_bar_items :[],
bottom_bar_items_url :[],
bottom_bar_items :[],





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
    SetBundelId: (state, action) => { state.package_name = action.payload },
    SetAppIcon: (state, action) => { state.appIcon  = action.payload },

    // styling reducers 

    SetPrimaryColor: (state, action) => { state.primaryColor = action.payload },
    SetPrimaryColorDark: (state, action) => { state.primaryColorDark  = action.payload },
    SetColor: (state, action) => { state.colorAccent  = action.payload },
    SetSplashScreen: (state, action) => { state.splashScreenType  = action.payload },

    // os reducers 

    SetAndroidOs: (state, action) => { state.AndroidOs = action.payload },
    SetIOS: (state, action) => { state.IOS = action.payload },
    SetFullName: (state, action) => { state.Name = action.payload },
    SetOrgnizationName: (state, action) => { state.Organization = action.payload },
    SetKeyAlias: (state, action) => { state.keyAlias= action.payload },
    SetKeystorePass: (state, action) => { state.keyPassword = action.payload },
    SetSigningCertificate: (state, action) => { state.ios_certificate = action.payload },
    SetProvisioningProfile: (state, action) => { state.ios_provisioning_profile = action.payload },
    SetIosPassword: (state, action) => { state.ios_certificate_password = action.payload},


  },


});

export const { incrementFormStep, decrementFormStep, SetAppName, SetUrl, SetBundelId, SetAppIcon, SetPrimaryColor, SetPrimaryColorDark, SetColor, SetSplashScreen, SetAndroidOs, SetIOS, SetFullName, SetOrgnizationName, SetKeyAlias, SetKeystorePass, SetSigningCertificate, SetProvisioningProfile, SetIosPassword } = formSlice.actions

export default formSlice.reducer