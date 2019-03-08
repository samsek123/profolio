export const styles = theme => ({
  selfIntroWrapper: {
    width: '100%',
  },
  subTitleText: {
    margin: 0,
    padding: 0,
    fontSize: '3em',
    textAlign: 'left',
    color: '#E74C3C',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.5em',
    },
  },
  descriptionText: {
    margin: 0,
    padding: 0,
    fontSize: '1.4em',
    textAlign: 'left',
    color: '#2E2E2E',
    lineHeight: 1.5,
    marginTop: 10,
    [theme.breakpoints.down('sm')]: {
      fontSize: '1em',
    },
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
