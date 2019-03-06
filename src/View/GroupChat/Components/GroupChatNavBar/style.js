export const styles = theme => ({
  groupChatNavBarWrapper: {
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
    paddingLeft: 20,
  },
  navbarAvatar: {
    width: 48,
    height: 48,
    backgroundColor: '#F8F8F8',
    color: '#145388',
  },
  noStyle: {
    margin: 0,
    padding: 0,
  },
  navbarTitle: {
    color: '#212121',
    fontSize: 22,
  },
  groupChatNavBarSearchWrapper: {
    width: 300,
    textAlign: 'center',
  },
  menuButton: {
    marginLeft: 20,
    [theme.breakpoints.down('xs')]: {
      marginLeft: 0,
    },
  },
  menuItem: {
    fontSize: 16,
    color: '#494949',
    paddingLeft: 30,
    paddingRight: 30,
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
