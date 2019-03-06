export const styles = theme => ({
  mainWrapper: {
    postion: 'relative',
  },
  sendMessageWrapper: {
    padding: '15px 40px',
    width: '100%',
    borderTop: '1px solid #E4E4E4',
    backgroundColor: 'white',
    boxShadow: 'none',
    [theme.breakpoints.down('md')]: {
      padding: '0px 10px',
    },
  },
  grow: {
    flexGrow: 1,
    display: 'flex',
  },
  textField: {
    flex: '1',
    fontSize: 20,
    paddingLeft: 30,
    border: 'none',
    '&:focus': {
      border: 'transparent',
      outline: 0,
      outlineStyle: 'none',
      boxShadow: 'none',
    },
    [theme.breakpoints.down('md')]: {
      paddingLeft: 10,
      fontSize: 15,
    },
  },
  functionButton: {
    marginLeft: 20,
    color: '#8E8E8F',
    [theme.breakpoints.down('xs')]: {
      marginLeft: 0,
      padding: 2,
    },
  },
  menuItem: {

  },
});
