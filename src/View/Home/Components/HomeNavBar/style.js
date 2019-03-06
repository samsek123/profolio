export const styles = theme => ({
  homeNavWrapper: {
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
