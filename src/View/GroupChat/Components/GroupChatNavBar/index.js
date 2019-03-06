import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';

// i18n
import { withNamespaces } from 'react-i18next';

// Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Material UI
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

// Material Icon
import MenuIcon from '@material-ui/icons/Menu';
import GroupIcon from '@material-ui/icons/Group';

// Customized Input Field
import IconTextInput from '../../../../Components/Form/IconTextInput';
import IconControl from '../../../../Components/IconControl';
import TotalParticipant from '../../../../Components/TotalParticipant';
import PotName from '../PotName';

// Image
import logoLong from'../../../../Assets/Image/logo_long.png';

// Style
import { styles } from './style';

// Redux action
import { collapseMenu } from '../../../../Reducers/NavBar/action';
import { closeGroupTopicFriendNav } from '../../../../Reducers/GroupChat/action';
import { openPopUp } from '../../../../Reducers/PopUp/action';

// Redux Connect
function mapDispatchToProps(dispatch) {
  return ({
    openPopUp: bindActionCreators(openPopUp, dispatch),
    collapseMenu: bindActionCreators(collapseMenu, dispatch),
    closeGroupTopicFriendNav: bindActionCreators(closeGroupTopicFriendNav, dispatch),
  });
}

function mapStateToProps(state) {
  return ({});
}

class GroupChatNavBar extends Component<Props> {
  constructor() {
    super();
    this.state = {
      categoryId: 'travel',
      totalParticipant: 6,
      genderDistribution: ['male', 'male', 'female', 'male', 'female'],
      liveDistribution: [true, true, false, true, false],
      searchValue: '',
      // For the menu
      anchorElMenu: null,
      anchorElMember: null,
    };
    this.handleChange = this.handleChange.bind(this);
    this.menuClick = this.menuClick.bind(this);
    this.memberClick = this.memberClick.bind(this);
    this.chooseMenu = this.chooseMenu.bind(this);
    this.chooseKickMember = this.chooseKickMember.bind(this);
  }

  handleChange(type, value) {
    this.setState({ [type]: value });
  }

  chooseMenu(action, event) {
    const { openPopUp } = this.props;
    switch (action) {
      case 'kickMember':
        this.memberClick(event);
        break;
      case 'modifyGroup':
        openPopUp('openEditTopic');
        break;
      default:
        this.setState({ anchorElMenu: null });
        break;
    }
  }

  chooseKickMember(memberId) {
    this.setState({ anchorElMember: null });
  }

  menuClick(event) {
    if (event) {
      this.setState({ anchorElMenu: event.currentTarget });
    } else {
      this.setState({ anchorElMenu: null });
    }
  }

  memberClick(event) {
    if (event) {
      this.setState({ anchorElMember: event.currentTarget });
    } else {
      this.setState({ anchorElMember: null });
    }
  }

  render() {
    const { classes, collapseMenu, closeGroupTopicFriendNav, t } = this.props;
    const { anchorElMenu, anchorElMember, categoryId, totalParticipant, genderDistribution, liveDistribution, searchValue } = this.state;
    return (
      <AppBar className={classes.groupChatNavBarWrapper} position="static" color="default">
        <Toolbar>
          <IconButton
            className={classes.companyLogoWrapper}
            color="inherit"
            disableRipple
            onClick={(event) => collapseMenu()}
          >
            <img className={classes.companyLogoImg} src={logoLong} alt="Logo" />
          </IconButton>
          <Avatar className={classNames(classes.navbarAvatar, classes.responsiveDisappear)}>
            <IconControl categoryId={categoryId} />
          </Avatar>
          <div className={classNames(classes.responsiveAppear, classes.grow)} />
          <div className={classNames(classes.grow, classes.responsiveDisappear)}>
            <p className={classNames(classes.noStyle, classes.navbarTitle)}>News</p>
            <p className={classes.noStyle}>
              <TotalParticipant
                total={totalParticipant}
                gender={genderDistribution}
                liveDistribution={liveDistribution}
                showLive={true}
              />
            </p>
          </div>
          <div className={classNames(classes.groupChatNavBarSearchWrapper, classes.responsiveDisappear)}>
            <IconTextInput
              placeholder={t('component.page.groupChat.groupChatNavBar.searchPlaceholder')}
              type="search"
              value={searchValue}
              onChange={(value) => this.handleChange('searchValue', value)}
            />
          </div>
          <IconButton
            className={classNames(classes.menuButton, classes.responsiveAppear)}
            color="inherit"
            disableRipple
            onClick={(event) => closeGroupTopicFriendNav(true)}
          >
            <GroupIcon />
          </IconButton>
          <IconButton
            className={classes.menuButton}
            color="inherit"
            disableRipple
            aria-label="Menu"
            aria-owns={anchorElMenu ? 'simple-menu-1' : undefined}
            aria-haspopup="true"
            onClick={(event) => this.menuClick(event)}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="simple-menu-1"
            anchorEl={anchorElMenu}
            open={Boolean(anchorElMenu)}
            onClose={() => this.menuClick(null)}
          >
            <MenuItem
              className={classes.menuItem}
              disableRipple
              onClick={() => this.chooseMenu('exitGroup')}
            >{t('component.page.groupChat.groupChatNavBar.exitGroupButton')}</MenuItem>
            <MenuItem
              className={classes.menuItem}
              disableRipple
              onClick={(event) => this.chooseMenu('kickMember', event)}
              aria-label="Menu"
              aria-owns={anchorElMenu ? 'simple-menu-1' : undefined}
              aria-haspopup="true"
            >{t('component.page.groupChat.groupChatNavBar.kickMemberButton')}</MenuItem>
            <MenuItem
              className={classes.menuItem}
              disableRipple
              onClick={() => this.chooseMenu('shareGroup')}
            >{t('component.page.groupChat.groupChatNavBar.shareGroupButton')}
            </MenuItem>
            <MenuItem
              disableRipple
              className={classes.menuItem}
              onClick={() => this.chooseMenu('modifyGroup')}
            >{t('component.page.groupChat.groupChatNavBar.modifyGroupButton')}
            </MenuItem>
          </Menu>
          <Menu
            id="simple-menu-2"
            anchorEl={anchorElMember}
            open={Boolean(anchorElMember)}
            onClose={() => this.memberClick(null)}
          >
            <MenuItem
              className={classes.menuItem}
              disableRipple
              onClick={() => this.chooseKickMember()}
            ><PotName
              foodId='beef'
            /></MenuItem>
            <MenuItem
              className={classes.menuItem}
              disableRipple
              onClick={(event) => this.chooseKickMember()}
            ><PotName
              foodId='cheese'
            /></MenuItem>
            <MenuItem
              className={classes.menuItem}
              disableRipple
              onClick={() => this.chooseKickMember()}
            ><PotName
              foodId='water'
            /></MenuItem>
            <MenuItem
              disableRipple
              className={classes.menuItem}
              onClick={() => this.chooseKickMember()}
            ><PotName
              foodId='onion'
            /></MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    )
  }
}

GroupChatNavBar.propTypes = {
  classes: PropTypes.object.isRequired,
  // Redux
  collapseMenu: PropTypes.func.isRequired,
  closeGroupTopicFriendNav: PropTypes.func.isRequired,
  openPopUp: PropTypes.func.isRequired,
  // i18n
  t: PropTypes.func.isRequired,
}

export default withNamespaces('translation')(withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(GroupChatNavBar)));
