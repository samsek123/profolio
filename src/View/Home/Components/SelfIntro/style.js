export const styles = theme => ({
  selfIntroWrapper: {
    width: '100%',
  },
  subTitleText: {
    margin: 0,
    padding: 0,
    fontSize: '3.5vw',
    textAlign: 'left',
    color: '#E74C3C',
  },
  descriptionText: {
    margin: 0,
    padding: 0,
    fontSize: '1.5vw',
    textAlign: 'left',
    color: '#2E2E2E',
    lineHeight: 2,
    marginTop: 10,
  },
  contactMeButton: {
    textAlign: 'left',
  },
  mobileWrapper: {
    width: '80%',
    [theme.breakpoints.down('xs')]: {
      marginTop: 30,
      marginBottom: 30,
    },
  },
});
