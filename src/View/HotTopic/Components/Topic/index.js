import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';

// i18n
import { withNamespaces } from 'react-i18next';

// Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Customize UI
import IconControl from '../../../../Components/IconControl';
import TotalParticipant from '../../../../Components/TotalParticipant';

// Style
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

class Topic extends Component<Props> {
  constructor() {
    super();
    this.state = {
    };
    this.chooseTopic = this.chooseTopic.bind(this);
  }

  chooseTopic() {
    const { topicId, topicTitle, categoryId, topicDescription, totalParticipant, genderDistribution, topicLastSeen, chooseHotTopicDetail, hotTopicDetailMenu } = this.props;
    if (hotTopicDetailMenu.topicId === topicId) {
      chooseHotTopicDetail();
    } else {
      chooseHotTopicDetail(topicId, topicTitle, categoryId, topicDescription, totalParticipant, genderDistribution, topicLastSeen);
    }
  }

  render() {
    const { className, classes, categoryId, topicTitle, topicLastSeen, totalParticipant, genderDistribution, hotTopicDetailMenu, topicId, t } = this.props;
    return (
      <div
        className={classNames(classes.topicWrapper, className, (hotTopicDetailMenu.topicId === topicId) && classes.active)}
        onClick={() => this.chooseTopic()}
      >
        <IconControl
          categoryId={categoryId}
          className={classes.topicIcon}
        />
        <p className={classes.topicTitle}>{topicTitle}</p>
        <p className={classes.topicLastSeen}>{t('component.page.hotTopic.topic.lastSeenFirst')}{topicLastSeen}{t('component.page.hotTopic.topic.lastSeenSecond')}</p>
        <div className={classes.memberList}>
          <TotalParticipant
            total={totalParticipant}
            gender={genderDistribution}
          />
        </div>
      </div>
    )
  }
}

Topic.propTypes = {
  classes: PropTypes.object.isRequired,
  categoryId: PropTypes.string.isRequired,
  topicLastSeen: PropTypes.string,
  topicTitle: PropTypes.string,
  totalParticipant: PropTypes.number,
  genderDistribution: PropTypes.array,
  className: PropTypes.string,
  topicId: PropTypes.string,
  topicDescription: PropTypes.string,
  onClick: PropTypes.func,
  // Redux
  chooseHotTopicDetail: PropTypes.func,
  hotTopicDetailMenu: PropTypes.object,
  // i18n
  t: PropTypes.func.isRequired,
}

Topic.defaultProps = {
  topicLastSeen: '',
  topicTitle: '',
  totalParticipant: 2,
  genderDistribution: ['male', 'female'],
  topicId: '',
  topicDescription: '',
  className: '',
  onClick: ()=>{},
  // Redux
  chooseHotTopicDetail: () => {},
  hotTopicDetailMenu: {},
};

export default withNamespaces('translation')(withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Topic)));
