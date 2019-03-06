import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';

// i18n
import { withNamespaces } from 'react-i18next';

// Material UI Icon
import CreateIcon from '@material-ui/icons/CreateOutlined';
import CallMadeIcon from '@material-ui/icons/CallMadeOutlined';
import PhotoCameraIcon from '@material-ui/icons/PhotoCameraOutlined';

// Image
import loginLong from'../../../../Assets/Image/logo_long.png';
import profile from'../../../../Assets/Image/profile.png';

// Style
import { styles } from '../../style';

// Sub Components
import Button from '../../../Form/Button';

class PreferenceStepThree extends Component<Props> {
  render() {
    const { classes, profilePic, skipPreference, submitForm, popUpTitle, t } = this.props;
    return (
      <div className={classes.contentWrapper}>
        <div className={classNames(classes.contentDetailWrapper, classes.contentDetailPreference)}>
          <img src={loginLong} className={classes.logoLongImg} alt="Logo" />
            <p className={classes.contentTitle}>{popUpTitle} (3/3)</p>
            <p className={classes.subTitle}>{t('component.popUp.preferenceStep.editProfile')}</p>
            <div className={classes.fullWidthWrapper}>
              <div className={classes.profilePic}>
                <img
                  className={classes.profilePicImg}
                  src={(profilePic) ? profilePic : profile}
                  alt="Profile Pic"
                />
                <div className={classes.profileEditOverlay}>
                  <PhotoCameraIcon className={classes.cameraIcon} />
                  <p className={classes.cameraText}>{t('component.popUp.preferenceStep.editProfileButton')}</p>
                </div>
              </div>
            </div>
            <div className={classes.loginActionWrapper} >
              <div className={classes.leftWrapper}>
              </div>
              <div className={classes.rightWrapper}>
                <Button
                  type="secondary"
                  className={classes.buttonSet}
                  iconSet={<CallMadeIcon />}
                  content={t('component.popUp.preferenceStep.skipStep')}
                  onClick={() => skipPreference()}
                />
                <Button
                  className={classes.buttonSet}
                  iconSet={<CreateIcon />}
                  content={t('component.popUp.preferenceStep.submitButton')}
                  onClick={() => submitForm()}
                />
              </div>
            </div>
          </div>
        </div>

    )
  }
}

PreferenceStepThree.propTypes = {
  classes: PropTypes.object.isRequired,
  profilePic: PropTypes.string,
  skipPreference: PropTypes.func.isRequired,
  submitForm: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  popUpTitle: PropTypes.string.isRequired,
  // i18n
  t: PropTypes.func.isRequired,
}

PreferenceStepThree.defaultProps = {
  profilePic: '',
};

export default withNamespaces('translation')(withStyles(styles)(PreferenceStepThree));
