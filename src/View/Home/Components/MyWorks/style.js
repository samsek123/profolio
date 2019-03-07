export const styles = theme => ({
  myWorksWrapper: {
    width: '100%',
    paddingTop: 30,
    paddingBottom: 30,
    backgroundColor: '#F9F9F9',
  },
  subTitleText: {
    textAlign: 'center',
    color: '#E74C3C',
    fontSize: '3.5vw',
  },
  secondLayer: {
    marginTop: -3,
  },
  tabsWrapper: {
    width: '100%',
    textAlign: 'center',
  },
  tabRoot: {
    fontSize: '1.5vw',
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
  },
  tabSelected: {
    color: '#E74C3C',
  },
  profolioList: {
    marginTop: 10,
  },
});
