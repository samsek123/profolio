export const styles = theme => ({
  myWorksWrapper: {
    width: '100%',
  },
  title: {
    textAlign: 'center',
    fontSize: '3em',
    margin: '60px 0',
    [theme.breakpoints.down('sm')]: {
      fontSize: '2em',
    },
  },
  /* Filter Button List */
  buttonSetWrapper: {
    textAlign: 'center',
  },
  button: {
    textTransform: 'none',
    display: 'inline-block',
    position: 'relative',
  },
  selectedIcon: {
    position: 'absolute',
    width: 10,
    left: '50%',
    marginLeft: -5,
    bottom: 0,
  },
  /* profolio list */
  profolioList: {
    marginTop: 50,
  },
  rowFix: {
    margin: '5px 0',
    cursor: 'pointer',
  },
  columnFix: {
    margin: '0 10px',
    cursor: 'pointer',
  },
});
