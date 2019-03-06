import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

// Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Material UI
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';

import FriendListContent from './FriendListContent';

import { styles } from './style';

// Action Redux
import { closeGroupTopicFriendNav } from '../../../../Reducers/GroupChat/action';

function mapDispatchToProps(dispatch) {
  return ({
    closeGroupTopicFriendNav: bindActionCreators(closeGroupTopicFriendNav, dispatch),
  });
}

function mapStateToProps(state) {
  return ({ groupTopicFriendNav: state.groupTopicFriendNav });
}

class FriendList extends Component<Props> {
  constructor() {
    super();
    this.closeDetail = this.closeDetail.bind(this);
  }

  closeDetail() {
    const { closeGroupTopicFriendNav } = this.props;
    closeGroupTopicFriendNav(false);
  }

  render() {
    const { classes, groupTopicFriendNav } = this.props;
    return (
      <div>
        <SwipeableDrawer
          className={classes.collapseDrawer}
          open={groupTopicFriendNav}
          onClose={() => this.closeDetail()}
          onOpen={() => this.closeDetail()}
        >
          <FriendListContent />
        </SwipeableDrawer>
        <FriendListContent className={classes.nonCollapseDrawer} />
      </div>
    )
  }
}

FriendList.propTypes = {
  classes: PropTypes.object.isRequired,
  // Redux
  groupTopicFriendNav: PropTypes.bool,
  closeGroupTopicFriendNav: PropTypes.func,
}

FriendList.defaultProps = {
  // Redux
  groupTopicFriendNav: true,
  closeGroupTopicFriendNav: ()=>{},
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(FriendList));
