export const styles = theme => ({
  headerWrapper: {
    width: '100%',
    backgroundColor: '#2E2E2E',
    height: 655,
    position: 'relative',
    overflow: 'hidden',
    [theme.breakpoints.down('xs')]: {
      height: 355,
    },
  },
  earthImage: {
    position: 'absolute',
    width: '70vw',
    left: '-20vw',
    top: '30%',
    WebkitAnimation: 'spin 100s linear infinite',
    MozAnimation: 'spin 100s linear infinite',
    animation: 'spin 100s linear infinite',
  },
  coderImage: {
    position: 'absolute',
    width: '30vw',
    height: '20vw',
    right: '10vw',
    top: '45%',
    marginTop: '-10vw',
    WebkitAnimation: 'floating 10s infinite',
    MozAnimation: 'floating 10s infinite',
    animation: 'floating 10s infinite',
  },
  starOneImage: {
    width: '5vw',
    position: 'absolute',
    top: '15%',
    left: '50vw',
  },
  starTwoImage: {
    width: '5vw',
    position: 'absolute',
    bottom: '15%',
    right: '15vw',
  },
  /* Below Text */
  infoWrapper: {
    position: 'absolute',
    color: 'white',
    top: '30%',
    zIndex: 10,
    padding: '20px 40px',
  },
  backgroundWrapper: {
    position: 'absolute',
    top: '30%',
    zIndex: 9,
    padding: '20px 40px',
    backgroundColor: 'rgba(46, 46, 46, 0.5)',
  },
  opacityNone: {
    opacity: 0,
  },
  nameText: {
    margin: 0,
    padding: 0,
    fontSize: '6em',
    [theme.breakpoints.down('sm')]: {
      fontSize: '3em',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '2em',
    },
  },
  extraText: {
    margin: 0,
    padding: 0,
    fontSize: '3em',
    marginTop: -20,
    [theme.breakpoints.down('sm')]: {
      fontSize: '2em',
      marginTop: 0,
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: 0,
      fontSize: '1em',
    },
  },
  supportText: {
    margin: 0,
    padding: 0,
    fontSize: '1.4em',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1em',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.5em',
    },
  },
});
