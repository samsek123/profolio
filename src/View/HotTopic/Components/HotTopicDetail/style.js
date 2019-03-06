export const styles = theme => ({
  hotTopicDetailWrapper: {
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
  hotTopicDetailContentWrapper: {
    padding: '40px 25px',
  },
  // Close Wrapper
  hotTopicDetailCloseWrapper: {
    textAlign: 'right',
  },
  menuButton: {
    color: '#8E8E8F',
    fontSize: 25,
  },
  // Title
  hotTopicDetailTitle: {
    padding: 0,
    margin: '5px 0',
    color: '#145388',
    fontSize: 25,
    textAlign: 'left',
  },
  topicIcon: {
    fontSize: 25,
    marginBottom: 6,
    verticalAlign: 'middle',
  },
  // Description
  hotTopicDetailDescription: {
    padding: 0,
    margin: '5px 0',
    fontSize: 15,
    textAlign: 'left',
    minHeight: 260,
    color: '#3D3D3D',
  },
  // Bonus
  hotTopicDetailBonus: {
    textAlign: 'left',
    display: 'flex',
  },
  hotTopicLastSeen: {
    color: '#3D3D3D',
    fontSize: 15,
    flexGrow: 1,
    textAlign: 'right',
  },
  // Divider
  divider: {
    margin: '20px 0',
  },
  // TextField
  optionalField: {
    borderRadius: 'none',
    width: '100%',
  },
  cssLabel: {
    '&$cssFocused': {
      color: '#212121',
    },
  },
  cssOutlinedInput: {
    '&$cssFocused $notchedOutline': {
      borderColor: '#212121',
    },
  },
  cssFocused: {},
  notchedOutline: {},
  // Button Send
  buttonSet: {
    margin: '20px 0',
  },
  // Collapse Drawer
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
