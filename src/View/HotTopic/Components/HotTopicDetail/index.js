import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

// Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Material UI
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';

import HotTopicDetailContent from './HotTopicDetailContent';

import { styles } from './style';

// Action Redux
import { chooseHotTopicDetail } from '../../../../Reducers/HotTopic/action';

// Redux Connect
function mapDispatchToProps(dispatch) {
  return ({
    chooseHotTopicDetail: bindActionCreators(chooseHotTopicDetail, dispatch),
  });
}

function mapStateToProps(state) {
  return ({ hotTopicDetailMenu: state.hotTopicDetailMenu });
}

class HotTopicDetail extends Component<Props> {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.closeDetail = this.closeDetail.bind(this);
  }

  handleChange(type, value) {
    this.setState({ [type]: value });
  }

  closeDetail() {
    const { chooseHotTopicDetail } = this.props;
    chooseHotTopicDetail();
  }

  render() {
    const { classes, hotTopicDetailMenu } = this.props;
    const emptyObject = (Object.keys(hotTopicDetailMenu).length === 0 && hotTopicDetailMenu.constructor === Object);
    return (
      <div>
        <SwipeableDrawer
          className={classes.collapseDrawer}
          open={!emptyObject}
          onClose={() => this.closeDetail()}
          onOpen={() => this.closeDetail()}
        >
          <HotTopicDetailContent />
        </SwipeableDrawer>
        {
          (!emptyObject) && (

            <div className={classes.nonCollapseDrawer}>
              <HotTopicDetailContent />
            </div>
          )
        }
      </div>
    )
  }
}

HotTopicDetail.propTypes = {
  classes: PropTypes.object.isRequired,
  // Redux
  chooseHotTopicDetail: PropTypes.func,
  hotTopicDetailMenu: PropTypes.object,
}

HotTopicDetail.defaultProps = {
  // Redux
  chooseHotTopicDetail: ()=>{},
  hotTopicDetailMenu: {},
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(HotTopicDetail));
