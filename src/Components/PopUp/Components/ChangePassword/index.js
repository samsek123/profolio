import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

// i18n
import { withNamespaces } from 'react-i18next';

// Material UI
import Dialog from '@material-ui/core/Dialog';
import TextField from '@material-ui/core/TextField';

// Material UI Icon
import CreateIcon from '@material-ui/icons/CreateOutlined';

// Image
import loginLong from'../../../../Assets/Image/logo_long.png';
import login from'../../../../Assets/Image/login.png';
import loginMedium from'../../../../Assets/Image/login_medium.png';
import loginSmall from'../../../../Assets/Image/login_small.png';
// Style
import { styles } from '../../style';

// Sub Components
import DisplayImg from '../DisplayImg';
import Button from '../../../Form/Button';

class ChangePassword extends Component<Props> {
  constructor() {
    super();
    this.state = {
      oldLoginPassword: '',
      newLoginPassword: '',
      newRetypePassword: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(type, value) {
    this.setState({ [type]: value });
  }

  render() {
    const { classes, openChangePassword, handleClose, t } = this.props;
    const { oldLoginPassword, newLoginPassword, newRetypePassword } = this.state;
    const popUpTitle = t('component.popUp.changePassword.popUpTitle');
    const popUpDescription = t('component.popUp.changePassword.popUpDescription');
    return (
      <Dialog
        fullWidth={true}
        maxWidth="md"
        open={openChangePassword}
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
              <TextField
                type="password"
                value={oldLoginPassword}
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
                onChange={(event) => this.handleChange('oldLoginPassword', event.target.value)}
                label={t('component.popUp.changePassword.oldLoginPassword')}
                variant="outlined"
              />
              <TextField
                type="password"
                value={newLoginPassword}
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
                onChange={(event) => this.handleChange('newLoginPassword', event.target.value)}
                label={t('component.popUp.changePassword.newLoginPassword')}
                variant="outlined"
              />
              <TextField
                type="password"
                value={newRetypePassword}
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
                onChange={(event) => this.handleChange('newRetypePassword', event.target.value)}
                label={t('component.popUp.changePassword.newRetypePassword')}
                variant="outlined"
              />
              <div className={classes.loginActionWrapper} >
                <div className={classes.leftWrapper}>
                </div>
                <div className={classes.rightWrapper}>
                  <Button
                    className={classes.buttonSet}
                    iconSet={<CreateIcon />}
                    content={t('component.popUp.changePassword.submitButton')}
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

ChangePassword.propTypes = {
  classes: PropTypes.object.isRequired,
  openChangePassword: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  // i18n
  t: PropTypes.func.isRequired,
}

export default withNamespaces('translation')(withStyles(styles)(ChangePassword));
