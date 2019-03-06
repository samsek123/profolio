export const styles = theme => ({
  leftBar: {
    width: '120px',
    borderRight: '#F3F3F3 1px solid',
    height: '100%',
    textAlign: 'center',
  },
  logoWrapper: {
    width: '100%',
    margin: '40px 0px',
  },
  logoImg: {
    width: '86px',
    cursor: 'pointer',
  },
  leftNavIconWrapper: {
    textAlign: 'center',
    width: '100%',
    fontSize: '13px',
  },
  leftNavIcon: {
    fontSize: '40px',
  },
  menuItem: {
    fontSize: 16,
    color: '#494949',
    paddingLeft: 30,
    paddingRight: 30,
  },
  collapseDrawer: {
    display: 'block',
    [theme.breakpoints.up('lg')]: {
      display: 'none',
    },
  },
  nonCollapseDrawer: {
    display: 'none',
    [theme.breakpoints.up('lg')]: {
      display: 'block',
    },
  },
});
