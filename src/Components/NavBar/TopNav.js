import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

// Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Router
import {withRouter} from 'react-router-dom';

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
      selectedTab: 'message',
      anchorElProfile: false,
    };
    this.navigatePage = this.navigatePage.bind(this);
    this.profileClick = this.profileClick.bind(this);
  }

  navigatePage(path) {
    this.props.history.push(path);
  }

  profileClick(event) {
    if (event) {
      this.setState({ anchorElProfile: event.currentTarget });
    } else {
      this.setState({ anchorElProfile: null });
    }
  }

  render() {
    const { classes } = this.props;
    return (
        <div>
        </div>
    )
  }
}

TopNav.propTypes = {
  classes: PropTypes.object.isRequired,
  pathname: PropTypes.string.isRequired,
}

export default withRouter(withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(TopNav)));
