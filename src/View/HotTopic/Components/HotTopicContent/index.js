import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

// Material UI Icon
import KeyboardArrowUp from '@material-ui/icons/KeyboardArrowUpOutlined';

// Style
import { styles } from './style';

// Customize Component
import Topic from '../Topic';

class HotTopicContent extends Component<Props> {
  constructor() {
    super();
    this.state = {
      topicData: [
        {
          topicId: '123',
          categoryId: 'travel',
          totalParticipant: 6,
          genderDistribution: ['male', 'female', 'male'],
          topicLastSeen: '3分鐘',
          topicTitle: '無反交流',
          topicDescription: 'test1',
        },
        {
          topicId: '456',
          categoryId: 'travel',
          totalParticipant: 6,
          genderDistribution: ['male', 'female', 'male'],
          topicLastSeen: '3分鐘',
          topicTitle: '無反交流',
          topicDescription: 'test2',
        },
        {
          topicId: '789',
          categoryId: 'travel',
          totalParticipant: 6,
          genderDistribution: ['male', 'female', 'male'],
          topicLastSeen: '3分鐘',
          topicTitle: '無反交流',
          topicDescription: 'test3',
        },
        {
          topicId: '1234',
          categoryId: 'travel',
          totalParticipant: 6,
          genderDistribution: ['male', 'female', 'male'],
          topicLastSeen: '3分鐘',
          topicTitle: '無反交流',
          topicDescription: 'test4',
        },
      ],
    };
  }

  render() {
    const { classes } = this.props;
    const { topicData } = this.state;
    return (
      <div className={classes.hotTopicWrapper}>
        <div className={classes.fullWidthWrapper}>
          <div className={classes.topicWrapper}>
            <div className={classes.hotTopicSlider} />
            {
              topicData.map((item) => (
                <Topic
                  key={item.topicId}
                  className={classes.topicSet}
                  categoryId={item.categoryId}
                  totalParticipant={item.totalParticipant}
                  genderDistribution={item.genderDistribution}
                  topicLastSeen={item.topicLastSeen}
                  topicTitle={item.topicTitle}
                  topicId={item.topicId}
                  topicDescription={item.topicDescription}
                />
              ))
            }
          </div>
        </div>
        <div className={classes.arrowUp}>
          <KeyboardArrowUp className={classes.arrowIcon} />
        </div>
      </div>
    )
  }
}

HotTopicContent.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(HotTopicContent);
