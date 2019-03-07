export const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  // AppBar
  appBar: {
    WebkitTransition: 'all 0.5s', /* Safari */
    transition: 'all 0.5s',
    paddingTop: 20,
    paddingBottom: 20,
    boxShadow: 'none',
    backgroundColor: 'transparent',
  },
  appInverse: {
    backgroundColor: 'white',
  },
  bigLogo: {
    width: 75,
    height: 75,
  },
  menuButton: {
    marginLeft: 20,
    marginRight: 20,
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  navButton: {
    textTransform: 'none',
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
});
