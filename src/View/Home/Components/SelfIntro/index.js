import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

// Material UI
import Grid from '@material-ui/core/Grid';

// Style
import { styles } from './style';

// Sub Components
import { Button } from'../../../../Components/StyledComponent';

// Image
import profile from'../../../../Assets/Image/profile.jpg';

class SelfIntro extends Component<Props> {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.selfIntroWrapper}>
        <Grid container spacing={0} alignItems="stretch">
          <Grid item sm={6}>
            <img src={profile} className={classes.profilePic} alt="profile pic" />
          </Grid>
          <Grid container sm={6} justify="center" direction="column" alignItems="center">
            <div className={classes.mobileWrapper}>
              <h2 className={classes.subTitleText}>ABOUT ME</h2>
              <p className={classes.descriptionText}>Well-qualified Full Stack Developer, Designer. Familiar with a wide range of programming utilities and languages. Knowledgeable of backend and frontend development requirements. Able to handle any part of the process with ease.</p>
              <p className={classes.contactMeButton}>
                <Button primary >CONTACT ME</Button>
              </p>
            </div>
          </Grid>
        </Grid>
      </div>
    )
  }
}

SelfIntro.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(SelfIntro);
