export const styles = theme => ({
  myWorksWrapper: {
    width: '100%',
    paddingTop: 30,
    backgroundColor: '#F9F9F9',
  },
  subTitleText: {
    textAlign: 'center',
    color: '#E74C3C',
    fontSize: '3em',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.5em',
    },
  },
  secondLayer: {
    marginTop: -3,
  },
  tabsWrapper: {
    width: '100%',
    textAlign: 'center',
  },
  tabRoot: {
    fontSize: '1.4em',
    padding: 0,
    '&$tabSelected': {
      color: '#E74C3C',
      opacity: '1',
    },
    '&:hover': {
      color: '#E74C3C',
      opacity: '1',
    },
    '&:focus': {
      color: '#E74C3C',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.8em',
    },
  },
  tabSelected: {
    color: '#E74C3C',
  },
  profolioList: {
    marginTop: 10,
  },
});
