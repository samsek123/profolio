import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

// i18n
import { withNamespaces } from 'react-i18next';

// Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


// Material UI
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';

// Material UI Icon
import CloseIcon from '@material-ui/icons/CloseOutlined';

// Customized Input Field
import IconControl from '../../../../Components/IconControl';
import TotalParticipant from '../../../../Components/TotalParticipant';
import Button from '../../../../Components/Form/Button';

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

class HotTopicDetailContent extends Component<Props> {
  constructor() {
    super();
    this.state = {
      informValue: '',
    };
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
    const { classes, hotTopicDetailMenu, t } = this.props;
    const { informValue } = this.state;
    return (
      <div className={classes.hotTopicDetailWrapper}>
        <div className={classes.hotTopicDetailContentWrapper}>
          <div className={classes.hotTopicDetailCloseWrapper}>
            <IconButton
              color="inherit"
              disableRipple
              aria-label="Close Detail Button"
              onClick={() => this.closeDetail()}
            >
              <CloseIcon className={classes.menuButton} />
            </IconButton>
          </div>
          <p className={classes.hotTopicDetailTitle}>{hotTopicDetailMenu.topicTitle} <IconControl categoryId={hotTopicDetailMenu.categoryId} className={classes.topicIcon} /></p>
          <p className={classes.hotTopicDetailDescription}>{hotTopicDetailMenu.topicDescription}</p>
          <div className={classes.hotTopicDetailBonus} >
            <TotalParticipant
              total={hotTopicDetailMenu.totalParticipant}
              gender={hotTopicDetailMenu.genderDistribution}
            />
            <div className={classes.hotTopicLastSeen}>
              {hotTopicDetailMenu.topicLastSeen}
            </div>
          </div>
          <Divider className={classes.divider} />
          <TextField
            value={informValue}
            className={classes.optionalField}
            rows={5}
            multiline
            InputLabelProps={{
              classes: {
                root: classes.cssLabel,
                focused: classes.cssFocused,
              },
            }}
            InputProps={{
              classes: {
                root: classes.cssOutlinedInput,
                focused: classes.cssFocused,
                notchedOutline: classes.notchedOutline,
              },
            }}
            onChange={(event) => this.handleChange('informValue', event.target.value)}
            label={t('component.page.hotTopic.hotTopicDetail.toCreatorField')}
            variant="outlined"
          />
          <Button
            className={classes.buttonSet}
            content={t('component.page.hotTopic.hotTopicDetail.submitButton')}
            fullWidth={true}
          />
        </div>
      </div>
    )
  }
}

HotTopicDetailContent.propTypes = {
  classes: PropTypes.object.isRequired,
  // Redux
  chooseHotTopicDetail: PropTypes.func,
  hotTopicDetailMenu: PropTypes.object,
  // i18n
  t: PropTypes.func.isRequired,
}

HotTopicDetailContent.defaultProps = {
  // Redux
  chooseHotTopicDetail: () => {},
  hotTopicDetailMenu: {},
}

export default withNamespaces('translation')(withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(HotTopicDetailContent)));
