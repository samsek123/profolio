export const styles = theme => ({
  myServicesWrapper: {
    width: '100%',
    paddingTop: 30,
    paddingBottom: 30,
  },
  subTitleText: {
    textAlign: 'center',
    color: '#E74C3C',
    fontSize: '3em',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.5em',
    },
  },
  descriptionText: {
    margin: 0,
    padding: 0,
    fontSize: '1.4em',
    textAlign: 'center',
    color: '#2E2E2E',
    lineHeight: 2,
    width: '80%',
    marginLeft: '10%',
    marginTop: '-2vw',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1em',
    },
  },
  infoWrapper: {
    marginTop: 50,
  },
  mobileWrapper: {
    width: '80%',
    margin: 'auto',
    [theme.breakpoints.down('xs')]: {
      marginTop: 30,
    },
  },
  picWrapper: {
    width: '80%',
    margin: 'auto',
    [theme.breakpoints.down('xs')]: {
      marginTop: 20,
      marginBottom: 30,
      width: '50%',
    },
  },
});
