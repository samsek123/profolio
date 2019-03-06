export const styles = theme => ({
  firendListWrapper: {
    width: 357,
    borderRight: '#F3F3F3 1px solid',
    height: '100%',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },
  friendListCloseWrapper: {
    textAlign: 'right',
    display: 'none',
    [theme.breakpoints.down('xs')]: {
      display: 'block',
    },
  },
  friendListSearchWrapper: {
    padding: '38px 28px',
    [theme.breakpoints.down('xs')]: {
      padding: '0px 28px 38px 28px',
    },
  },
  friendListTab: {
    padding: '0px 28px 40px 28px',
  },
  friendTabIcon: {
    fontSize: 21,
    verticalAlign: 'middle',
  },
  // Tab Customized
  tabsIndicator: {
    backgroundColor: '#145388',
    height: 6,
    borderRadius: 5,
    width: 80,
  },
  tabRoot: {
    fontSize: 18,
    minWidth: 150,
    padding: 0,
    '&$tabSelected': {
      color: '#145388',
      opacity: '1',
    },
    '&:hover': {
      color: '#145388',
      opacity: '1',
    },
    '&:focus': {
      color: '#145388',
    },
  },
  tabSelected: {
    color: '#145388',
  },
  // Friend List
  friendListMainWrapper: {
    flex: '1 0 auto',
    overflow: 'auto',
    position: 'relative',
  },
  fullWidthWrapper: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  friendListItem: {
    padding: '36px 22px',
    margin: 0,
  },
  friendListItemSelected: {
    backgroundColor: 'rgba(0, 0, 0, 0.08)',
  },
  friendListAvatar: {
    width: 48,
    height: 48,
    backgroundColor: '#F8F8F8',
    color: '#145388',
  },
  friendListExtend: {
    width: '100%',
    display: 'flex',
  },
  friendListTitleWrapper: {
    width: 205,
    fontSize: 22,
    color: '#889BAC',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
  },
  friendListTitleActive: {
    color: '#145388',
  },
  friendListRightWrapper: {
    flex: '1 0 auto',
    textAlign: 'right',
  },
  friendListBadge: {
    backgroundColor: '#145388',
    color: '#FFF',
    fontSize: 15,
    marginRight: 8,
  },
  friendListLastMessageWrapper: {
    width: 145,
    fontSize: 15,
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
  },
  friendListTime: {
    fontSize: 15,
  },
  friendListSecondary: {
    color: '#909090',
  },
  friendListSecondaryActive: {
    color: '#212121',
  },
  // Collapse Drawer
  collapseDrawer: {
    display: 'block',
    [theme.breakpoints.up('lg')]: {
      display: 'none',
    },
  },
  nonCollapseDrawer: {
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
});
