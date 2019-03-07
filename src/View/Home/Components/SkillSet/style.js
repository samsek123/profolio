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
  mobileWrapper: {
    width: '80%',
    [theme.breakpoints.down('xs')]: {
      marginTop: 30,
      marginBottom: 30,
    },
  },
  titleText: {
    width: '60%',
  },
  descriptionText: {
    margin: 0,
    padding: 0,
    fontSize: '1.5vw',
    textAlign: 'left',
    color: 'white',
    lineHeight: 2,
    marginTop: 10,
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
