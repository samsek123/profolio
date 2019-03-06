export const styles = theme => ({
  topicWrapper: {
    backgroundColor: 'white',
    width: 300,
    height: 300,
    boxShadow: 'none',
    border: '1px solid #F3F3F3',
    textAlign: 'center',
    position: 'relative',
    cursor: 'pointer',
    "&:hover": {
      backgroundColor: 'rgba(0, 0, 0, 0.08)',
    },
    [theme.breakpoints.down('sm')]: {
      width: '44.1vw',
      height: '44.1vw',
      margin: 0,
    },
    [theme.breakpoints.down('xs')]: {
      width: '89vw',
      height: '89vw',
      margin: 0,
    },
  },
  // Choose active topic
  active: {
    backgroundColor: 'rgba(0, 0, 0, 0.08)',
  },
  memberList: {
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
  topicIcon: {
    fontSize: 120,
    color: '#145388',
    marginTop: 50,
  },
  topicTitle: {
    color: '#145388',
    fontSize: 23,
    margin: 0,
    marginTop: 12,
    [theme.breakpoints.down('xs')]: {
      fontSize: 18,
    },
  },
  topicLastSeen: {
    fontSize: 12,
    margin: 0,
    color: '#3D3D3D',
    [theme.breakpoints.down('xs')]: {
      fontSize: 10,
    },
  },
});
