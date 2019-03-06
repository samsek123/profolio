export const styles = theme => ({
  buttonRoot: {
    padding: '10px 25px',
    fontSize: 16,
    borderRadius: 40,
    cursor: 'pointer',
    "&:focus": {
      outline: 'none',
    },
  },
  primary: {
    backgroundColor: '#145388',
    color: 'white',
    "&:hover": {
      backgroundColor: '#0D3C64',
    },
  },
  secondary: {
    border: '1px solid #145388',
    color: '#145388',
    "&:hover": {
      backgroundColor: '#D6D6D6',
    },
  },
  iconSet: {
    fontSize: 20,
    verticalAlign: 'middle',
    marginRight: 5,
  },
  fullWidthButton: {
    width: '100%',
  },
});
