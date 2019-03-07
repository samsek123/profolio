import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

// Material UI
import Grid from '@material-ui/core/Grid';

// Scroll View
import animateScrollTo from 'animated-scroll-to';

// Style
import { styles } from './style';

// Sub Components
import { Button } from'../../../../Components/StyledComponent';

// Image
import profile from'../../../../Assets/Image/profile.jpg';

class SelfIntro extends Component<Props> {
  constructor() {
    super();
    this.navigatePage = this.navigatePage.bind(this);
  }

  navigatePage(action) {
    animateScrollTo(document.querySelector(`#${action}`));
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.selfIntroWrapper} id="about">
        <Grid container spacing={0} alignItems="stretch">
          <Grid item sm={6}>
            <img src={profile} className={classes.profilePic} alt="profile pic" />
          </Grid>
          <Grid container sm={6} justify="center" direction="column" alignItems="center">
            <div className={classes.mobileWrapper}>
              <h2 className={classes.subTitleText}>ABOUT ME</h2>
              <p className={classes.descriptionText}>Well-experienced Full Stack Developer, Designer, Video Editor. Familiar with a wide range of design software, video editing software, programming utilities and languages. Knowledgeable of backend and frontend development requirements. Able to handle any part of the process with ease.</p>
              <p className={classes.contactMeButton}>
                <Button
                  primary
                  onClick={(e) => this.navigatePage('contact')}
                >
                CONTACT ME
                </Button>
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
