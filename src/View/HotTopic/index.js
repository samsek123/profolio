import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

// Style
import { styles } from './style';

// Sub Components
import HotTopicNavBar from './Components/HotTopicNavBar';
import HotTopicContent from './Components/HotTopicContent';
import HotTopicDetail from './Components/HotTopicDetail';

class HotTopic extends Component<Props> {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.hotTopicWrapper}>
        <HotTopicDetail />
        <div className={classes.topicWrapper}>
          <HotTopicNavBar />
          <HotTopicContent
            onClick={() => this.chooseTopic()}
          />
        </div>
      </div>
    )
  }
}

HotTopic.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(HotTopic);
