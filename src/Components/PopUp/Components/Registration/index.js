import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

// i18n
import { withNamespaces } from 'react-i18next';

// Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Material UI
import Dialog from '@material-ui/core/Dialog';
import TextField from '@material-ui/core/TextField';

// Material UI Icon
import CreateIcon from '@material-ui/icons/CreateOutlined';

// Image
import loginLong from'../../../../Assets/Image/logo_long.png';
import registration from'../../../../Assets/Image/registration.png';
import registrationMedium from'../../../../Assets/Image/registration_medium.png';
import registrationSmall from'../../../../Assets/Image/registration_small.png';
import facebook from'../../../../Assets/Image/facebook.png';

// Style
import { styles } from '../../style';

// Sub Components
import DisplayImg from '../DisplayImg';
import Button from '../../../Form/Button';

// Redux action
import { openPopUp } from '../../../../Reducers/PopUp/action';

// Redux Connect
function mapDispatchToProps(dispatch) {
  return ({
    openPopUp: bindActionCreators(openPopUp, dispatch),
  });
}

function mapStateToProps(state) {
  return ({});
}

class Registration extends Component<Props> {
  constructor() {
    super();
    this.state = {
      loginEmail: '',
      loginPassword: '',
      loginRetypePassword: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitRegistration = this.submitRegistration.bind(this);
  }

  handleChange(type, value) {
    this.setState({ [type]: value });
  }

  submitRegistration() {
    const { openPopUp } = this.props;
    openPopUp('openSetPreference');
  }

  render() {
    const { classes, openRegistration, handleClose, t } = this.props;
    const { loginEmail, loginPassword, loginRetypePassword } = this.state;
    const popUpTitle = t('component.popUp.registration.popUpTitle');
    const popUpDescription = t('component.popUp.registration.popUpDescription');
    return (
      <Dialog
        fullWidth={true}
        maxWidth="md"
        open={openRegistration}
        onClose={handleClose}
      >
        <div className={classes.dialogWrapper}>
          <DisplayImg
            className={classes.responsiveDisappear}
            title={popUpTitle}
            content={popUpDescription}
            image={registration}
            imageMedium={registrationMedium}
            imageSmall={registrationSmall}
          />
          <div className={classes.contentWrapper}>
            <div className={classes.contentDetailWrapper}>
              <img src={loginLong} className={classes.logoLongImg} alt="Logo" />
              <p className={classes.contentTitle}>{popUpTitle}</p>
              <img src={facebook} className={classes.facebookImg} alt="facebook" />
              <p className={classes.textWrapper}>
                <span className={classes.overlayText}>OR</span>
              </p>
              <TextField
                type="email"
                value={loginEmail}
                className={classes.optionalField}
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
                onChange={(event) => this.handleChange('loginEmail', event.target.value)}
                label={t('component.popUp.registration.loginEmail')}
                variant="outlined"
              />
              <TextField
                type="password"
                value={loginPassword}
                className={classes.optionalField}
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
                onChange={(event) => this.handleChange('loginPassword', event.target.value)}
                label={t('component.popUp.registration.loginPassword')}
                variant="outlined"
              />
              <TextField
                value={loginRetypePassword}
                className={classes.optionalField}
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
                onChange={(event) => this.handleChange('loginRetypePassword', event.target.value)}
                label={t('component.popUp.registration.loginRetypePassword')}
                variant="outlined"
              />
              <div className={classes.loginActionWrapper} >
                <div className={classes.leftWrapper}>
                </div>
                <div className={classes.rightWrapper}>
                  <Button
                    className={classes.buttonSet}
                    iconSet={<CreateIcon />}
                    content={t('component.popUp.registration.nextStep')}
                    onClick={() => this.submitRegistration()}
                  />
                </div>
              </div>
            </div>
          </div>
          <DisplayImg
            className={classes.responsiveAppear}
            title={popUpTitle}
            content={popUpDescription}
            image={registration}
            imageMedium={registrationMedium}
            imageSmall={registrationSmall}
          />
        </div>
      </Dialog>
    )
  }
}

Registration.propTypes = {
  classes: PropTypes.object.isRequired,
  openRegistration: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  // Redux
  openPopUp: PropTypes.func.isRequired,
  // i18n
  t: PropTypes.func.isRequired,
}

export default withNamespaces('translation')(withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Registration)));
