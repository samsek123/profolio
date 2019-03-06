import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

// Router
import {withRouter} from 'react-router-dom';

// Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Material UI
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';


import LeftNavContent from './LeftNavContent';

// Style
import { styles } from './style';

// Redux action
import { collapseMenu } from '../../Reducers/NavBar/action';

// Redux Connect
function mapDispatchToProps(dispatch) {
  return ({
    collapseMenu: bindActionCreators(collapseMenu, dispatch),
  });
}

function mapStateToProps(state) {
  return ({ navBarStatus: state.navBarStatus });
}

class LeftNav extends Component<Props> {
  render() {
    const { classes, collapseMenu, navBarStatus, location } = this.props;
    return (
      <div>
        <SwipeableDrawer
          className={classes.collapseDrawer}
          open={!navBarStatus}
          onClose={() => collapseMenu()}
          onOpen={() => collapseMenu()}
        >
          <LeftNavContent
            pathname={location.pathname}
          />
        </SwipeableDrawer>
        <div className={classes.nonCollapseDrawer}>
          <LeftNavContent
            pathname={location.pathname}
          />
        </div>
      </div>
    )
  }
}

LeftNav.propTypes = {
  classes: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  // Redux
  collapseMenu: PropTypes.func.isRequired,
  navBarStatus: PropTypes.bool.isRequired,
}

export default withRouter(withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(LeftNav)));
