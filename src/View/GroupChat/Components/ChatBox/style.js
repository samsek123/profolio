export const styles = theme => ({
  mainWrapper: {
    width: '100%',
    display: 'flex',
    margin: '30px 0',
  },
  myWrapper: {
    textAlign: 'right',
  },
  chatBoxWrapper: {
    flexGrow: 1,
  },
  chatBoxOtherWrapper: {
    width: 'none',
    fontSize: '12.8px',
    padding: '8px 9px 10px 5%',
    lineHeight: '19px',
    backgroundColor: '#dfe6e9',
    marginBottom: '12px',
    borderRadius: '12px',
  },
  chatBoxInnerWrapper: {
    maxWidth: '60%',
    verticalAlign: 'top',
    display: 'inline-block',
    [theme.breakpoints.down('xs')]: {
      maxWidth: '70%',
    },
  },
  chatBox: {
    fontSize: 20,
    display: 'inline-block',
    backgroundColor: '#FFFFFF',
    padding: '15px 40px',
    borderRadius: '30px',
    marginLeft: 30,
    textAlign: 'left',
    wordBreak: 'break-word',
    maxWidth: '100%',
    [theme.breakpoints.down('xs')]: {
      fontSize: 16,
      padding: '15px 20px',
    },
  },
  myChatBox: {
    backgroundColor: '#145388',
    color: 'white',
    marginLeft: 0,
    marginRight: 30,
  },
  fullWidthWrapper: {
    width: '100%',
    position: 'relative',
  },
  timeText: {
    fontSize: 13,
    color: '#707070',
    marginLeft: 30,
    textAlign: 'left',
  },
  myTimeText: {
    marginLeft: 0,
    marginRight: 30,
    textAlign: 'right',
  },
});
