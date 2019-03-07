import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

// Material UI
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

// Style
import { styles } from './style';

// Sub Components
import { Button } from'../../../../Components/StyledComponent';

class ContactMe extends Component<Props> {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.contactMeWrapper}>
        <Grid container spacing={0} alignItems="stretch">
          <Grid container sm={6}>
            <div className={classes.contactInfoWrapper}>
              <h2 className={classes.subTitleText}>CONTACT ME</h2>
              <p className={classes.descriptionText}>If you have any enquiry, please contact:<br/>+852 96800284<br/>samsek123@gmail.com</p>
            </div>
          </Grid>
          <Grid container sm={6}>
            <div className={classes.contactInfoWrapper}>
              <TextField
                className={classes.textField}
                fullWidth
                InputProps={{
                    classes: {
                        input: classes.multilineColor,
                    },
                    disableUnderline: true,
                }}
                InputLabelProps={{
                    classes: {
                      root: classes.multilineColor,
                      focused: classes.cssFocused,
                    },
                }}
                label="Name *"
                margin="normal"
              />
              <TextField
                className={classes.textField}
                fullWidth
                InputProps={{
                    classes: {
                        input: classes.multilineColor,
                    },
                    disableUnderline: true,
                }}
                InputLabelProps={{
                    classes: {
                      root: classes.multilineColor,
                      focused: classes.cssFocused,
                    },
                }}
                label="Your Email *"
                margin="normal"
              />
              <TextField
                className={classes.textField}
                fullWidth
                InputProps={{
                    classes: {
                        input: classes.multilineColor,
                    },
                    disableUnderline: true,
                }}
                InputLabelProps={{
                    classes: {
                      root: classes.multilineColor,
                      focused: classes.cssFocused,
                    },
                }}
                label="Message"
                margin="normal"
              />
              <Button className={classes.sendButton} minh full>Send Enquiry</Button>
            </div>
          </Grid>
        </Grid>
      </div>
    )
  }
}

ContactMe.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(ContactMe);
