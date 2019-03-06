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
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';

// Material Icon
import AddCircleIcon from '@material-ui/icons/AddCircleOutlineOutlined';

// SubComponent
import Button from '../../../../Components/Form/Button';

// Image
import logoLong from'../../../../Assets/Image/logo_long.png';

// Style
import { styles } from './style';

// Redux action
import { collapseMenu } from '../../../../Reducers/NavBar/action';
import { openPopUp } from '../../../../Reducers/PopUp/action';

// Redux Connect
function mapDispatchToProps(dispatch) {
  return ({
    openPopUp: bindActionCreators(openPopUp, dispatch),
    collapseMenu: bindActionCreators(collapseMenu, dispatch),
  });
}

function mapStateToProps(state) {
  return ({});
}

class HomeNavBar extends Component<Props> {
  constructor() {
    super();
    this.state = {
    };
    this.handleChange = this.handleChange.bind(this);
    this.addTopic = this.addTopic.bind(this);
  }

  handleChange(type, value) {
    this.setState({ [type]: value });
  }

  addTopic() {
    const { openPopUp } = this.props;
    openPopUp('openAddTopic');
  }

  render() {
    const { classes, collapseMenu } = this.props;
    return (
      <div>
        <AppBar className={classes.homeNavWrapper} position="static" color="default">
          <Toolbar>
            <IconButton
              className={classes.companyLogoWrapper}
              color="inherit"
              disableRipple
              onClick={(event) => collapseMenu()}
            >
              <img className={classes.companyLogoImg} src={logoLong} alt="Logo" />
            </IconButton>
            <div className={classes.grow}>
            </div>
            <IconButton
              className={classNames(classes.menuButton, classes.responsiveAppear)}
              color="inherit"
              disableRipple
              onClick={() => this.addTopic()}
            >
              <AddCircleIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

HomeNavBar.propTypes = {
  classes: PropTypes.object.isRequired,
  // Redux
  collapseMenu: PropTypes.func.isRequired,
  openPopUp: PropTypes.func.isRequired,
  // i18n
  t: PropTypes.func.isRequired,
}

export default withNamespaces('translation')(withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(HomeNavBar)));
