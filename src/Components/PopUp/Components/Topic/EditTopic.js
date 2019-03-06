import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

// i18n
import { withNamespaces } from 'react-i18next';

// Material UI
import Dialog from '@material-ui/core/Dialog';

// Image
import topic from'../../../../Assets/Image/topic.png';
import topicMedium from'../../../../Assets/Image/topic_medium.png';
import topicSmall from'../../../../Assets/Image/topic_small.png';

// Style
import { styles } from '../../style';

// Sub Components
import DisplayImg from '../DisplayImg';
import TopicContent from './TopicContent';

class EditTopic extends Component<Props> {
  constructor() {
    super();
    this.state = {
      topicName: '',
      topicDescription: '',
      topicTags: [],
      topicCategory: '',
      topicParticipant: 0,
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  handleChange(type, value) {
    this.setState({ [type]: value });
  }

  submitForm() {
    const { handleClose } = this.props;
    handleClose();
  }

  render() {
    const { classes, handleClose, t, openEditTopic } = this.props;
    const { topicName, topicDescription, topicTags, topicCategory, topicParticipant } = this.state;
    const popUpTitle = t('component.popUp.editTopic.popUpTitle');
    const popUpDescription = t('component.popUp.editTopic.popUpDescription');
    return (
      <Dialog
        fullWidth={true}
        maxWidth="md"
        open={openEditTopic}
        onClose={handleClose}
      >
        <div className={classes.dialogWrapper}>
          <DisplayImg
            title={popUpTitle}
            content={popUpDescription}
            image={topic}
            imageSmall={topicSmall}
            imageMedium={topicMedium}
          />
          <div className={classes.contentWrapper}>
            <TopicContent
              handleSubmit={this.submitForm}
              handleChange={this.handleChange}
              popUpTitle={popUpTitle}
              topicName={topicName}
              topicDescription={topicDescription}
              topicTags={topicTags}
              topicCategory={topicCategory}
              topicParticipant={topicParticipant}
            />
          </div>
        </div>
      </Dialog>
    )
  }
}

EditTopic.propTypes = {
  classes: PropTypes.object.isRequired,
  openEditTopic: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  // i18n
  t: PropTypes.func.isRequired,
}

export default withNamespaces('translation')(withStyles(styles)(EditTopic));
