export const styles = theme => ({
  hotTopicWrapper: {
    width: '100%',
    flex: '1 0 auto',
    position: 'relative',
    overflow: 'auto',
    backgroundColor: '#F8F8F8',
  },
  fullWidthWrapper: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  topicWrapper: {
    maxWidth: '90%',
    margin: 'auto',
    padding: '20px 0',
    textAlign: 'left',
  },
  autoWrapper: {
    textAlign: 'left',
  },
  topicSet: {
    margin: 5,
    display: 'inline-block',
    verticalAlign: 'middle',
    [theme.breakpoints.down('sm')]: {
      margin: '5px 0 5px 0',
      "&:nth-child(odd)": {
        marginLeft: 2,
      },
      "&:nth-child(even)": {
        marginRight: 2,
      },
    },
    [theme.breakpoints.down('xs')]: {
      margin: '5px 0 5px 0',
    },
  },
  hotTopicSlider: {
    width: 610,
    height: 300,
    border: '1px solid #F3F3F3',
    backgroundColor: 'white',
    margin: 5,
    display: 'inline-block',
    verticalAlign: 'middle',
    [theme.breakpoints.down('sm')]: {
      width: '89vw',
      height: 'calc(89vw/2)',
      margin: 0,
    },
  },
  // Arrow Up
  arrowUp: {
    width: 0,
    height: 0,
    position: 'fixed',
    right: 50,
    bottom: 0,
    cursor: 'pointer',
    borderLeft: '50px solid transparent',
    borderRight: '50px solid transparent',
    borderBottom: '50px solid #145388',
  },
  arrowIcon: {
    color: 'white',
    position: 'absolute',
    fontSize: 40,
    marginLeft: -19,
    marginTop: 10,
  },
});
