import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  // form data preset
	androidChoose: true,
	iosChoose: false,
	appName: "default",
	url: "https://default.com",
	image: "",
	package_name: "app.default.com",
	primaryColor: "#ffd622",
	primaryColorDark: "#ffd622",
	colorAccent: "#222222",
	splashScreenType: "fade",
	keystore_setting: "new",
	keystoreName: "keystore",
	Name: "firstname lastname",
	OrganizationUnit: "IT",
	Organization: "organization",
	City: "XX",
	State: "XX",
	CountryCode: "XX",
	keystorePassword: "keystorepassword",
	keyAlias: "keyAlias",
	keystorePassword2: "keystorepassword",
	keyPassword: "keystorepassword",
  iosToken:'',
	admob: false,
	pushNoti: false,
	ios_certificate_password: "",
	keystore: "",
	keystore_setting: "",
	GSFile: "",
	bottomBar: false,
	bottom_bar_items: [{}, {}, {}],
};

const formSlice = createSlice({
  name: "form",
  initialState,

  reducers: {
    // jaruri nahi hi ki reducers ka nam set se hi suru ho mujhe kuch samjh nahi aya isiliye set kar diya

    // basic infor reducer
    SetAppName: (state, action) => {
      state.appName = action.payload;
    },
    SetUrl: (state, action) => {
      state.url = action.payload;
    },
    SetBundelId: (state, action) => {
      state.package_name = action.payload;
    },
    SetAppIcon: (state, action) => {
      state.image = action.payload;
    },

    // styling reducers

    SetPrimaryColor: (state, action) => {
      state.primaryColor = action.payload;
    },
    SetPrimaryColorDark: (state, action) => {
      state.primaryColorDark = action.payload;
    },
    SetColor: (state, action) => {
      state.colorAccent = action.payload;
    },
    SetSplashScreen: (state, action) => {
      state.splashScreenType = action.payload;
    },

    // additional features reducers

    SetPushNotification: (state, action) => {
      state.pushNoti = action.payload;
    },
    SetGoogleServiceFileJson: (state, action) => {
      state.GoogleServiceFileJson = action.payload;
    },
    SetGoogleServiceFilePlist: (state, action) => {
      state.GoogleServiceFilePlist = action.payload;
    },

    SetBottomBar: (state, action) => {
      state.bottomBar = action.payload;
    },

    SetBottomBarItem1: (state, action) => {
      state.bottom_bar_items.splice(0, 1, action.payload);
    },
    SetBottomBarItem2: (state, action) => {
      state.bottom_bar_items.splice(1, 1, action.payload);
    },
    SetBottomBarItem3: (state, action) => {
      state.bottom_bar_items.splice(2, 1, action.payload);
    },

    // os reducers

    SetAndroidOs: (state, action) => {
      state.androidChoose = action.payload;
    },
    SetIOS: (state, action) => {
      state.iosChoose = action.payload;
    },
    SetIOStoken:(state, action) => {
      state.iosToken = action.payload;
    },
    SetFullName: (state, action) => {
      state.Name = action.payload;
    },
    SetOrgnizationName: (state, action) => {
      state.Organization = action.payload;
    },
    SetKeyAlias: (state, action) => {
      state.keyAlias = action.payload;
    },
    SetKeystorePass: (state, action) => {
      state.keyPassword = action.payload;
    },
    SetSigningCertificate: (state, action) => {
      state.ios_certificate = action.payload;
    },
    SetProvisioningProfile: (state, action) => {
      state.ios_provisioning_profile = action.payload;
    },
    SetIosPassword: (state, action) => {
      state.ios_certificate_password = action.payload;
    },
  },
});

export const {
  SetAppName,
  SetUrl,
  SetBundelId,
  SetAppIcon,
  SetPrimaryColor,
  SetPrimaryColorDark,
  SetColor,
  SetSplashScreen,
  SetAndroidOs,
  SetIOS,
  SetIOStoken,
  SetFullName,
  SetOrgnizationName,
  SetKeyAlias,
  SetKeystorePass,
  SetSigningCertificate,
  SetProvisioningProfile,
  SetIosPassword,
  SetPushNotification,
  SetGoogleServiceFileJson,
  SetGoogleServiceFilePlist,
  SetBottomBar,
  SetBottomBarItem1,
  SetBottomBarItem2,
  SetBottomBarItem3,
} = formSlice.actions;

export default formSlice.reducer;
