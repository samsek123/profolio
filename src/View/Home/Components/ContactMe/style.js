export const styles = theme => ({
  contactMeWrapper: {
    marginTop: -3,
    width: '100%',
    paddingTop: 30,
    paddingBottom: 30,
    backgroundColor: '#E74C3C',
    color: 'white',
  },
  subTitleText: {
    margin: 0,
    padding: 0,
    fontSize: '3.5vw',
    textAlign: 'left',
  },
  descriptionText: {
    margin: 0,
    padding: 0,
    fontSize: '1.5vw',
    textAlign: 'left',
    lineHeight: 2,
    marginTop: 10,
  },
  contactInfoWrapper: {
    width: '80%',
    margin: 'auto',
    paddingTop: '8vw',
    paddingBottom: '8vw',
    [theme.breakpoints.down('xs')]: {
      marginTop: 30,
      marginBottom: 30,
    },
  },
  mobileWrapper: {
    width: '80%',
    margin: 'auto',
    [theme.breakpoints.down('xs')]: {
      marginTop: 30,
      marginBottom: 30,
    },
  },
  textField: {
    borderBottom: '1px solid white',
  },
  multilineColor:{
    color: 'white',
    '&$cssFocused': {
      color: 'white',
    },
  },
  cssFocused: {},
  sendButton: {
    marginTop: 10,
  },
});
