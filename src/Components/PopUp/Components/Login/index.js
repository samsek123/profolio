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
import ExitToAppIcon from '@material-ui/icons/ExitToAppOutlined';
import CreateIcon from '@material-ui/icons/CreateOutlined';

// Image
import loginLong from'../../../../Assets/Image/logo_long.png';
import login from'../../../../Assets/Image/login.png';
import loginMedium from'../../../../Assets/Image/login_medium.png';
import loginSmall from'../../../../Assets/Image/login_small.png';
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

class Login extends Component<Props> {
  constructor() {
    super();
    this.state = {
      loginEmail: '',
      loginPassword: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.openPopUp = this.openPopUp.bind(this);
  }

  handleChange(type, value) {
    this.setState({ [type]: value });
  }

  openPopUp(popUpName) {
    const { openPopUp } = this.props;
    openPopUp(popUpName);
  }

  render() {
    const { classes, openLogin, handleClose, t } = this.props;
    const { loginEmail, loginPassword } = this.state;
    const popUpTitle = t('component.popUp.login.popUpTitle');
    const popUpDescription = t('component.popUp.login.popUpDescription');
    return (
      <Dialog
        fullWidth={true}
        maxWidth="md"
        open={openLogin}
        onClose={handleClose}
      >
        <div className={classes.dialogWrapper}>
          <DisplayImg
            title={popUpTitle}
            content={popUpDescription}
            image={login}
            imageSmall={loginSmall}
            imageMedium={loginMedium}
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
                value={loginEmail}
                type="email"
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
                label={t('component.popUp.login.loginEmail')}
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
                label={t('component.popUp.login.loginPassword')}
                variant="outlined"
              />
              <div className={classes.loginActionWrapper} >
                <div className={classes.leftWrapper}>
                  {t('component.popUp.login.forgetPassword')}
                </div>
                <div className={classes.rightWrapper}>
                  <Button
                    className={classes.buttonSet}
                    iconSet={<CreateIcon />}
                    content={t('component.popUp.login.registerButton')}
                    type="secondary"
                    onClick={() => this.openPopUp('openRegistration')}
                  />
                  <Button
                    className={classes.buttonSet}
                    iconSet={<ExitToAppIcon />}
                    content={t('component.popUp.login.loginButton')}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Dialog>
    )
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
  openLogin: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  // Redux
  openPopUp: PropTypes.func.isRequired,
  // i18n
  t: PropTypes.func.isRequired,
}

export default withNamespaces('translation')(withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Login)));
