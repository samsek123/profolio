export const styles = theme => ({
  barWrapper: {
    marginTop: 10,
    fontSize: '1.4em',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1em',
    },
  },
  titleText: {
    color: 'white',
  },
  backgroundWrapper: {
    width: '100%',
    height: 10,
    backgroundColor: '#95a5a6',
    position: 'relative',
  },
  bar: {
    position: 'absolute',
    left: 0,
    top: 0,
    height: '100%',
    backgroundColor: '#E74C3C',
  },
});
