import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';

// i18n
import { withNamespaces } from 'react-i18next';

// Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Router
import {withRouter} from 'react-router-dom';

// Material UI
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

// Icon List
import WhatshotIcon from '@material-ui/icons/WhatshotOutlined';
import SmsIcon from '@material-ui/icons/SmsOutlined';
import ExitToAppIcon from '@material-ui/icons/ExitToAppOutlined';
import SettingsIcon from '@material-ui/icons/SettingsOutlined';

// List Component
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import logo from'../../Assets/Image/logo.png';
import { styles } from './style';

//Redux
import { openPopUp } from '../../Reducers/PopUp/action';

// Redux Connect
function mapDispatchToProps(dispatch) {
  return ({
    openPopUp: bindActionCreators(openPopUp, dispatch),
  });
}

function mapStateToProps(state) {
  return ({});
}

class LeftNavContent extends Component<Props> {
  constructor() {
    super();
    this.state = {
      selectedTab: 'message',
      anchorElProfile: false,
    };
    this.navigatePage = this.navigatePage.bind(this);
    this.profileClick = this.profileClick.bind(this);
    this.chooseProfile = this.chooseProfile.bind(this);
    this.openPopUp = this.openPopUp.bind(this);
  }

  openPopUp(popUpName) {
    const { openPopUp } = this.props;
    openPopUp(popUpName);
  }

  navigatePage(path) {
    this.props.history.push(path);
  }

  chooseProfile(action) {
    switch(action) {
      case 'edit-profile':
        this.openPopUp('openEditPreference');
        break;
      case 'change-password':
        this.openPopUp('openChangePassword');
        break;
      case 'resend-activate':
        this.openPopUp('openResendActivate');
        break;
      case 'logout':
        break;
      default:
        break;
    }
    this.profileClick(null);
  }

  profileClick(event) {
    if (event) {
      this.setState({ anchorElProfile: event.currentTarget });
    } else {
      this.setState({ anchorElProfile: null });
    }
  }

  render() {
    const { classes, pathname, t } = this.props;
    const { anchorElProfile } = this.state;
    return (
        <div className={classes.leftBar}>
          <div className={classes.logoWrapper} onClick={() => this.navigatePage('/')}>
            <img className={classes.logoImg} src={logo} alt="Potaspace" />
          </div>
          <List component="nav">
            <ListItem disableRipple button onClick={() => this.navigatePage('/hottopic')} >
              <p
                className={
                  classNames(classes.leftNavIconWrapper,
                  (pathname.includes('hottopic')) && 'active')
                }
              >
                <WhatshotIcon className={classes.leftNavIcon}/><br/>{t('component.navBar.buttons.hotTopic')}
              </p>
            </ListItem>
            <ListItem disableRipple button onClick={() => this.navigatePage('/groupchat')}>
              <p
                className={
                  classNames(classes.leftNavIconWrapper,
                  (pathname.includes('groupchat')) && 'active')
                }
              >
                <SmsIcon className={classes.leftNavIcon}/><br/>{t('component.navBar.buttons.groupChat')}
              </p>
            </ListItem>
            <ListItem disableRipple button onClick={() => this.openPopUp('openLogin')}>
              <p className={classes.leftNavIconWrapper}>
                <ExitToAppIcon className={classes.leftNavIcon} /><br/>{t('component.navBar.buttons.login')}
              </p>
            </ListItem>
            <ListItem
              disableRipple
              button
              aria-owns={anchorElProfile ? 'simple-menu-6' : undefined}
              aria-haspopup="true"
              onClick={(event) => this.profileClick(event)}
            >
              <p className={classes.leftNavIconWrapper}>
                <SettingsIcon className={classes.leftNavIcon} /><br/>{t('component.navBar.buttons.personalSetting')}
              </p>
            </ListItem>
          </List>
          <Menu
            id="simple-menu-6"
            anchorEl={anchorElProfile}
            open={Boolean(anchorElProfile)}
            onClose={() => this.profileClick(null)}
          >
            <MenuItem
              className={classes.menuItem}
              disableRipple
              onClick={() => this.chooseProfile('edit-profile')}
            >{t('component.navBar.buttons.editProfile')}</MenuItem>
            <MenuItem
              className={classes.menuItem}
              disableRipple
              onClick={() => this.chooseProfile('change-password')}
            >{t('component.navBar.buttons.changePassword')}
            </MenuItem>
            <MenuItem
              disableRipple
              className={classes.menuItem}
              onClick={() => this.chooseProfile('resend-activate')}
            >{t('component.navBar.buttons.resendPassword')}
            </MenuItem>
            <MenuItem
              disableRipple
              className={classes.menuItem}
              onClick={() => this.chooseProfile('logout')}
            >{t('component.navBar.buttons.signOut')}
            </MenuItem>
          </Menu>
        </div>
    )
  }
}

LeftNavContent.propTypes = {
  classes: PropTypes.object.isRequired,
  pathname: PropTypes.string.isRequired,
  // Redux
  openPopUp: PropTypes.func.isRequired,
  // i18n
  t: PropTypes.func.isRequired,
}

export default withRouter(withNamespaces('translation')(withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(LeftNavContent))));
