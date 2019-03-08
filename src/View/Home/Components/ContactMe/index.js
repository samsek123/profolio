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
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      content: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitEnquiry = this.submitEnquiry.bind(this);
  }

  handleChange(type, value) {
    this.setState({ [type]: value });
  }

  submitEnquiry() {
    const { name, email, content } = this.state;
    const subject = `A new enquiry from ${name}`;
    const contentWithEmail = `Here is a new enquiry from ${name}(${email}): ${content}`;
    window.location.href = `mailto:samsek123@gmail.com?subject=${subject}&body=${contentWithEmail}`;
  }

  render() {
    const { classes } = this.props;
    const { name, email, content } = this.state;
    return (
      <div className={classes.contactMeWrapper} id="contact">
        <Grid container spacing={0} alignItems="stretch">
          <Grid container sm={6}>
            <div className={classes.contactInfoWrapper}>
              <h2 className={classes.subTitleText}>CONTACT ME</h2>
              <p className={classes.descriptionText}>If you have any enquiry, please contact:<br/>+852 96800284<br/>samsek123@gmail.com</p>
            </div>
          </Grid>
          <Grid container sm={6}>
            <div className={classes.contactFieldWrapper}>
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
                value={name}
                onChange={(event) => this.handleChange('name', event.target.value)}
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
                value={email}
                onChange={(event) => this.handleChange('email', event.target.value)}
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
                value={content}
                onChange={(event) => this.handleChange('content', event.target.value)}
              />
              <Button
                onClick={(event) => this.submitEnquiry()}
                className={classes.sendButton}
                minh
                full>
                  Send Enquiry
              </Button>
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
