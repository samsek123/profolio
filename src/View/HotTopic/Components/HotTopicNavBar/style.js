export const styles = theme => ({
  hotTopicNavBarWrapper: {
    width: '100%',
    padding: '20px 20px',
    borderBottom: '1px solid #E4E4E4',
    backgroundColor: 'white',
    boxShadow: 'none',
    [theme.breakpoints.down('md')]: {
      padding: '0px 20px',
    },
  },
  grow: {
    flexGrow: 1,
  },
  buttonSet: {
    margin: '0 5px',
  },
  hotTopicNavBarSearchWrapper: {
    width: 300,
    textAlign: 'center',
  },
  // Menu Item
  menuItem: {
    fontSize: 16,
    color: '#494949',
    paddingLeft: 30,
    paddingRight: 30,
  },
  categoryIcon: {
    verticalAlign: 'middle',
    fontSize: 20,
    marginRight: 10,
  },
  // Logo Wrapper
  companyLogoWrapper: {
    backgroundColor: 'transparent',
    cursor: 'pointer',
    borderRadius: 0,
    "&:hover": {
      borderRadius: 0,
    },
    [theme.breakpoints.up('lg')]: {
      display: 'none',
    },
  },
  companyLogoImg: {
    width: 120,
  },
  // Responsive
  responsiveDisappear: {
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  responsiveAppear: {
    [theme.breakpoints.up('lg')]: {
      display: 'none',
    },
  },
});
