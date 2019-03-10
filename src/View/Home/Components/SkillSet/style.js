export const styles = theme => ({
  skillSetWrapper: {
    width: '100%',
    marginTop: -3,
    position: 'relative',
  },
  skillSetMainWrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  topWrapper: {
    width: '80%',
    [theme.breakpoints.down('xs')]: {
      marginTop: 30,
    },
  },
  belowWrapper: {
    width: '80%',
    [theme.breakpoints.down('xs')]: {
      marginBottom: 30,
    },
  },
  titleText: {
    width: '60%',
  },
  descriptionText: {
    margin: 0,
    padding: 0,
    fontSize: '1.4em',
    textAlign: 'left',
    color: 'white',
    lineHeight: 1.5,
    marginTop: 10,
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.9em',
    },
  },
  desktopShow: {
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  mobileShow: {
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
});
