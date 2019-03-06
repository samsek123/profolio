import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

// i18n
import { withNamespaces } from 'react-i18next';

// Material UI
import Dialog from '@material-ui/core/Dialog';

// Image
import setup from'../../../../Assets/Image/setup.png';
import setupMedium from'../../../../Assets/Image/setup_medium.png';
import setupSmall from'../../../../Assets/Image/setup_small.png';

// Style
import { styles } from '../../style';

// Sub Components
import DisplayImg from '../DisplayImg';
import PreferenceStepOne from './PreferenceStepOne';
import PreferenceStepTwo from './PreferenceStepTwo';
import PreferenceStepThree from './PreferenceStepThree';

class SetPreference extends Component<Props> {
  constructor() {
    super();
    this.state = {
      step: 1,
      birthday: '',
      gender: '',
      country: '',
      description: '',
      tagPreference: [],
      profilePic: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.nextStep = this.nextStep.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.skipPreference = this.skipPreference.bind(this);
  }

  handleChange(type, value) {
    this.setState({ [type]: value });
  }

  nextStep() {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  }

  skipPreference() {
    const { handleClose } = this.props;
    handleClose();
  }

  submitForm() {
    const { handleClose } = this.props;
    handleClose();
  }

  render() {
    const { classes, openSetPreference, handleClose, t } = this.props;
    const { step, birthday, gender, country, description, tagPreference, profilePic } = this.state;
    const popUpTitle = t('component.popUp.setPreference.popUpTitle');
    const popUpDescription = t('component.popUp.setPreference.popUpDescription');
    return (
      <Dialog
        fullWidth={true}
        maxWidth="md"
        open={openSetPreference}
        onClose={handleClose}
      >
        <div className={classes.dialogWrapper}>
          <DisplayImg
            className={classes.responsiveDisappear}
            title={popUpTitle}
            content={popUpDescription}
            image={setup}
            imageMedium={setupMedium}
            imageSmall={setupSmall}
          />
          {
            (step === 1) && (
              <PreferenceStepOne
                birthday={birthday}
                gender={gender}
                country={country}
                nextStep={this.nextStep}
                skipPreference={this.skipPreference}
                handleChange={this.handleChange}
                popUpTitle={popUpTitle}
              />
            )
          }
          {
            (step === 2) && (
              <PreferenceStepTwo
                description={description}
                tagPreference={tagPreference}
                nextStep={this.nextStep}
                skipPreference={this.skipPreference}
                handleChange={this.handleChange}
                popUpTitle={popUpTitle}
              />
            )
          }
          {
            (step === 3) && (
              <PreferenceStepThree
                profilePic={profilePic}
                nextStep={this.nextStep}
                submitForm={this.submitForm}
                skipPreference={this.skipPreference}
                handleChange={this.handleChange}
                popUpTitle={popUpTitle}
              />
            )
          }
          <DisplayImg
            className={classes.responsiveAppear}
            title={popUpTitle}
            content={popUpDescription}
            image={setup}
            imageMedium={setupMedium}
            imageSmall={setupSmall}
          />
        </div>
      </Dialog>
    )
  }
}

SetPreference.propTypes = {
  classes: PropTypes.object.isRequired,
  openSetPreference: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  // i18n
  t: PropTypes.func.isRequired,
}

export default withNamespaces('translation')(withStyles(styles)(SetPreference));
