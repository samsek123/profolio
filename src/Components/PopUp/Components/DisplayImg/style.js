export const styles = theme => ({
  // Display Image
  imageWrapper: {
    position: 'relative',
  },
  displayImg: {
    height: 450,
    width: 'auto',
    marginBottom: -3,
    [theme.breakpoints.down('xs')]: {
      height: 'auto',
      width: '100%',
    },
  },
  imageTextWrapper: {
    position: 'absolute',
    width: '80%',
    left: '10%',
    top: 130,
    [theme.breakpoints.down('xs')]: {
      top: '30%',
    },
  },
  imageTitleText: {
    color: 'white',
    fontSize: 27,
    padding: 0,
    margin: '5px 0',
    fontWeight: 'medium',
    [theme.breakpoints.down('xs')]: {
      fontSize: 22,
    },
  },
  imageDescriptionText: {
    color: 'white',
    fontSize: 15,
    padding: 0,
    margin: '5px 0',
    [theme.breakpoints.down('xs')]: {
      fontSize: 12,
    },
  },
  // Responsive
  imageLarge: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  imageMedium: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  imageSmall: {
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
});
