import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';

// Redux
import { connect } from 'react-redux';

// Material UI
import Avatar from '@material-ui/core/Avatar';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

// Icon List
import ListIcon from '@material-ui/icons/List';

// Router
import {withRouter} from 'react-router-dom';
import animateScrollTo from 'animated-scroll-to';

// Image
import logoWhite from'../../Assets/Image/logo_white.png';
import logoBlack from'../../Assets/Image/logo_black.png';

// import logo from'../../Assets/Image/logo.png';
import { styles } from './style';

// Redux Connect
function mapDispatchToProps(dispatch) {
  return ({});
}

function mapStateToProps(state) {
  return ({});
}

class TopNav extends Component<Props> {
  constructor() {
    super();
    this.state = {
      anchorEl: null,
    };
    this.navigatePage = this.navigatePage.bind(this);
    this.chooseMenu = this.chooseMenu.bind(this);
  }

  navigatePage(path) {
    this.props.history.push(path);
  }

  chooseMenu(event, action) {
    const { location } = this.props;
    const redirectPage = location.pathname === '/';
    if (action === 'open') {
      this.setState({ anchorEl: event.currentTarget });
    } else {
      if (!redirectPage) {
        this.props.history.push('/');
      } else {
        animateScrollTo(document.querySelector(`#${action}`));
        this.setState({ anchorEl: null });
      }
    }
  }

  render() {
    const { classes, location } = this.props;
    const { anchorEl } = this.state;
    const whiteTone = location.pathname.includes('myworks');
    return (
      <div className={classes.root}>
        <AppBar
          position="relative"
          className={classNames(classes.appBar, whiteTone && classes.appInverse)}
        >
          <Toolbar>
            <div className={classes.grow}>
              <Avatar
                alt="logo"
                src={(whiteTone) ? logoBlack : logoWhite}
                className={classes.bigLogo}
                onClick={(e) => this.chooseMenu(e, 'home')}/>
            </div>
            <Button
              className={classes.navButton}
              disableRipple={true}
              color="inherit"
              size="large"
              onClick={(e) => this.chooseMenu(e, 'about')}
            >
              About me
            </Button>
            <Button
              className={classes.navButton}
              disableRipple={true}
              color="inherit"
              size="large"
              onClick={(e) => this.chooseMenu(e, 'myworks')}
            >
              My works
            </Button>
            <Button
              className={classes.navButton}
              disableRipple={true}
              color="inherit"
              size="large"
              onClick={(e) => this.chooseMenu(e, 'contact')}
            >
              Contact me
            </Button>
            <IconButton
              disableRipple={true}
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
              aria-owns={anchorEl ? 'mobile-menu' : undefined}
              aria-haspopup="true"
              onClick={(e) => this.chooseMenu(e, 'open')}
            >
              <ListIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Menu
          id="mobile-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={(e) => this.chooseMenu(e, '')}
        >
          <MenuItem onClick={(e) => this.chooseMenu(e, 'about')}>About me</MenuItem>
          <MenuItem onClick={(e) => this.chooseMenu(e, 'myworks')}>My works</MenuItem>
          <MenuItem onClick={(e) => this.chooseMenu(e, 'contact')}>Contact me</MenuItem>
        </Menu>
      </div>
    )
  }
}

TopNav.propTypes = {
  classes: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
}

export default withRouter(withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(TopNav)));
