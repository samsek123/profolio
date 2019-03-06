export const styles = theme => ({
  dialogWrapper: {
    display: 'flex',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
  },
  contentWrapper: {
    flex: '1',
  },
  fullWidthWrapper: {
    width: '100%',
    textAlign: 'center',
  },
  contentDetailWrapper: {
    padding: '55px 40px 0 40px',
    [theme.breakpoints.down('xs')]: {
      paddingBottom: 55,
      paddingTop: 55,
    },
  },
  contentDetailPreference: {
    [theme.breakpoints.down('sm')]: {
      paddingTop: 20,
    },
  },
  // logo content
  logoLongImg: {
    width: 180,
  },
  contentTitle: {
    color: '#3D3D3D',
    fontSize: 18,
    padding: 0,
    margin: '5px 0px',
  },
  subTitle: {
    color: '#3D3D3D',
    fontSize: 16,
    padding: 0,
    margin: '5px 0px',
  },
  facebookImg: {
    height: 30,
    cursor: 'pointer',
    margin: '10px 0',
    width: 'auto',
  },
  // Overlay Underline
  textWrapper: {
    width: '100%',
    textAlign: 'center',
    borderBottom: '1px solid #8E8E8F',
    lineHeight: '0.1em',
    margin: 'auto',
    marginTop: 10,
    marginBottom: 10,
    color: '#8E8E8F',
  },
  overlayText: {
    backgroundColor: 'white',
    padding: '0 10px',
    fontSize: 15,
  },
  // TextField
  optionalField: {
    borderRadius: 'none',
    width: '100%',
    margin: '5px 0',
    height: 50,
  },
  cssLabel: {
    fontSize: 13,
    '&$cssFocused': {
      color: '#212121',
    },
  },
  cssOutlinedInput: {
    '&$cssFocused $notchedOutline': {
      borderColor: '#212121',
    },
  },
  cssFocused: {},
  notchedOutline: {},
  // Button set
  loginActionWrapper: {
    width: '100%',
    textAlign: 'left',
    display: 'flex',
    margin: '10px 0',
  },
  leftWrapper: {
    flexGrow: 1,
    fontSize: 13,
    cursor: 'pointer',
    color: '#939393',
    verticalAlign: 'middle',
  },
  rightWrapper: {
    fontSize: 13,
    cursor: 'pointer',
    textAlign: 'right',
    verticalAlign: 'middle',
  },
  buttonSet: {
    fontSize: 13,
    margin: '0 2.5px',
  },
  // Radio Group
  radioGroup: {
    width: '100%',
    margin: '10px 0',
  },
  radioLabel: {
    fontSize: 13,
  },
  // Select box
  selectBox: {
    width: '100%',
    margin: '5px 0',
  },
  marginRight: {
    marginRight: 5,
  },
  // Profile Pic
  profilePic: {
    textAlign: 'center',
    cursor: 'pointer',
    position: 'relative',
    display: 'inline-block',
    margin: 'auto',
  },
  profilePicImg: {
    width: 200,
    height: 200,
  },
  profileEditOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    opacity: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    '&:hover': {
      opacity: 1,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
    },
  },
  cameraIcon: {
    fontSize: 90,
    color: 'white',
  },
  cameraText: {
    padding: 0,
    margin: 0,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
  },
  // Responsive
  responsiveAppear: {
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  responsiveDisappear: {
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
});
