import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';

// i18n
import { withNamespaces } from 'react-i18next';

// Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Material UI
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import SwipeableViews from 'react-swipeable-views';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';

// Material UI Icon
import CloseIcon from '@material-ui/icons/CloseOutlined';
import TimerIcon from '@material-ui/icons/TimerOutlined';
import GroupIcon from '@material-ui/icons/GroupOutlined';

// Customized Input Field
import IconControl from '../../../../Components/IconControl';
import IconTextInput from '../../../../Components/Form/IconTextInput';

import { styles } from './style';

// Action Redux
import { groupTopicSelect, groupTopicTabSelect, closeGroupTopicFriendNav } from '../../../../Reducers/GroupChat/action';

function mapDispatchToProps(dispatch) {
  return ({
    groupTopicSelect: bindActionCreators(groupTopicSelect, dispatch),
    groupTopicTabSelect: bindActionCreators(groupTopicTabSelect, dispatch),
    closeGroupTopicFriendNav: bindActionCreators(closeGroupTopicFriendNav, dispatch),
  });
}

function mapStateToProps(state) {
  return ({
    groupTopicChat: state.groupTopicChat,
    groupTopicSelectedId: state.groupTopicSelectedId,
    groupTopicSelectedTab: state.groupTopicSelectedTab,
  });
}

const Primary = (classes, title, unread, active) => (
  <div className={classes.friendListExtend}>
    <div className={classNames(classes.friendListTitleWrapper, (active) && classes.friendListTitleActive)}>
      {title}
    </div>
    <div className={classes.friendListRightWrapper}>
      {(unread > 0) && (
        <Badge badgeContent={unread} classes={{ badge: classes.friendListBadge }} />
      )}
    </div>
  </div>
);

const Secondary = (classes, lastMsg, time, active) => (
  <div className={classNames(classes.friendListExtend, classes.friendListSecondary, (active) && classes.friendListSecondaryActive)}>
    <div className={classes.friendListLastMessageWrapper}>
      {lastMsg}
    </div>
    <div className={classNames(classes.friendListRightWrapper, classes.friendListTime)}>
      {time}
    </div>
  </div>
);

class FriendListContent extends Component<Props> {
  constructor() {
    super();
    this.state = {
      searchValue: '',
      tabValue: 0,
      selectedId: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.selectGroup = this.selectGroup.bind(this);
    this.selectTab = this.selectTab.bind(this);
  }

  handleChange(type, value) {
    this.setState({ [type]: value });
  }

  selectTab(tabValue) {
    const { groupTopicTabSelect } = this.props;
    groupTopicTabSelect(tabValue);
  }

  selectGroup(selectedId) {
    const { groupTopicSelect } = this.props;
    groupTopicSelect(selectedId);
  }

  render() {
    const { classes, theme, className, groupTopicChat, groupTopicSelectedId, groupTopicSelectedTab, closeGroupTopicFriendNav, t } = this.props;
    const { searchValue } = this.state;
    const tempFriendList = groupTopicChat.tempFriendList;
    const permFriendList = groupTopicChat.permFriendList;
    return (
      <div className={classNames(classes.firendListWrapper, className)}>
        <div className={classes.friendListCloseWrapper}>
          <IconButton
            color="inherit"
            disableRipple
            aria-label="Close Button"
            onClick={() => closeGroupTopicFriendNav(false)}
          >
            <CloseIcon className={classes.menuButton} />
          </IconButton>
        </div>
        <div className={classes.friendListSearchWrapper}>
          <IconTextInput
            placeholder={t('component.page.groupChat.friendList.searchPlaceholder')}
            type="search"
            value={searchValue}
            onChange={(value) => this.handleChange('searchValue', value)}
          />
        </div>
        <div className={classes.friendListTab}>
          <Tabs
            value={groupTopicSelectedTab}
            onChange={(event, value) => this.selectTab(value)}
            classes={{ indicator: classes.tabsIndicator }}
          >
            <Tab
              disableRipple
              classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
              label={
                <span>
                  <TimerIcon className={classes.friendTabIcon} /> {t('component.page.groupChat.friendList.tempGroupButton')}
                </span>}
            />
            <Tab
              disableRipple
              classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
              label={
                <span>
                  <GroupIcon className={classes.friendTabIcon} /> {t('component.page.groupChat.friendList.permGroupButton')}
                </span>}
            />
          </Tabs>
        </div>
        <div className={classes.friendListMainWrapper}>
          <div className={classes.fullWidthWrapper}>
            <SwipeableViews
              axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
              index={groupTopicSelectedTab}
              onChange={(index) => this.selectTab(index)}
            >
              <List component="nav" dir={theme.direction}>
              {tempFriendList.map(
                (value) => (
                  <ListItem
                    key={value.id}
                    button
                    disableRipple
                    className={
                      classNames(
                        classes.friendListItem,
                        (groupTopicSelectedId === value.id) && classes.friendListItemSelected
                      )
                    }
                    onClick={() => this.selectGroup(value.id)}
                  >
                    <Avatar className={classes.friendListAvatar}>
                      <IconControl categoryId={value.categoryId} />
                    </Avatar>
                    <ListItemText
                      primary={Primary(classes, value.title, value.unread, (groupTopicSelectedId === value.id))}
                      secondary={Secondary(classes, value.lastMsg, value.time, (groupTopicSelectedId === value.id))}
                    />
                  </ListItem>
                )
              )}
              </List>
              <List component="nav" dir={theme.direction}>
              {permFriendList.map(
                (value) => (
                  <ListItem
                    key={value.id}
                    button
                    disableRipple
                    className={
                      classNames(
                        classes.friendListItem,
                        (groupTopicSelectedId === value.id) && classes.friendListItemSelected
                      )
                    }
                    onClick={() => this.selectGroup(value.id)}
                  >
                    <Avatar className={classes.friendListAvatar}>
                      <IconControl categoryId={value.categoryId} />
                    </Avatar>
                    <ListItemText
                      primary={Primary(classes, value.title, value.unread, (groupTopicSelectedId === value.id))}
                      secondary={Secondary(classes, value.lastMsg, value.time, (groupTopicSelectedId === value.id))}
                    />
                  </ListItem>
                )
              )}
              </List>
            </SwipeableViews>
          </div>
        </div>
      </div>
    )
  }
}

FriendListContent.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  // Redux
  groupTopicChat: PropTypes.object,
  groupTopicSelectedId: PropTypes.string,
  groupTopicSelect: PropTypes.func.isRequired,
  groupTopicTabSelect: PropTypes.func.isRequired,
  closeGroupTopicFriendNav: PropTypes.func.isRequired,
  groupTopicSelectedTab: PropTypes.number,
  // i18n
  t: PropTypes.func.isRequired,
}

FriendListContent.defaultProps = {
  className: '',
  // Redux
  groupTopicChat: {},
  groupTopicSelectedId: '',
  groupTopicSelectedTab: 0,
}

export default withNamespaces('translation')(withStyles(styles, { withTheme: true })(connect(mapStateToProps, mapDispatchToProps)(FriendListContent)));
