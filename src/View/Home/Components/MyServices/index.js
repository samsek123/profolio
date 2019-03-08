import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

// Material UI
import Grid from '@material-ui/core/Grid';

// Style
import { styles } from './style';

// Image
import fullStack from '../../../../Assets/Image/fullstack.png';
import motionGraphic from '../../../../Assets/Image/motiongraphic.png';
import uiux from '../../../../Assets/Image/uiux.png';
import videoEditing from '../../../../Assets/Image/videoediting.png';

class MyServices extends Component<Props> {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.myServicesWrapper}>
        <h2 className={classes.subTitleText}>MY SERVICES</h2>
        <p className={classes.descriptionText}>I can provide a wide variety of services, including UI/UX Design<br/>Website Development, and Video Editing.</p>
        <Grid container spacing={0}>
          <Grid className={classes.infoWrapper} sm={6}>
            <Grid container>
              <Grid item sm={8}>
                <div className={classes.mobileWrapper}>
                  <h4>FULL STACK WEB DEVELOPMENT</h4>
                  <p>
                  Background in desktop and mobile platforms developing user-friendly products.<br/>
                  Skilled in using ReactJS, VueJS, JQuery, PHP, Python, nodeJS and more.
                  </p>
                </div>
              </Grid>
              <Grid item sm={4}>
                <div className={classes.picWrapper}>
                  <img src={fullStack} alt="FullStack" />
                </div>
              </Grid>
            </Grid>
          </Grid>
          <Grid className={classes.infoWrapper} sm={6}>
            <Grid container>
              <Grid item sm={8}>
                <div className={classes.mobileWrapper}>
                  <h4>UI/UX Design</h4>
                  <p>
                  Inventive Designer with specialties in<br/>
                  Adobe Illustrator, Adobe Photoshop and Adobe XD
                  </p>
                </div>
              </Grid>
              <Grid item sm={4}>
                <div className={classes.picWrapper}>
                  <img src={uiux} alt="UI UX" />
                </div>
              </Grid>
            </Grid>
          </Grid>
          <Grid className={classes.infoWrapper} sm={6}>
            <Grid container>
              <Grid item sm={8}>
                <div className={classes.mobileWrapper}>
                  <h4>VIDEO EDITING</h4>
                  <p>
                  Inventive Editing with specialties in<br/>
                  Adobe Premiere, Adobe After Effect and Camtasia
                  </p>
                </div>
              </Grid>
              <Grid item sm={4}>
                <div className={classes.picWrapper}>
                  <img src={videoEditing} alt="Video Editing" />
                </div>
              </Grid>
            </Grid>
          </Grid>
          <Grid className={classes.infoWrapper} sm={6}>
            <Grid container>
              <Grid item sm={8}>
                <div className={classes.mobileWrapper}>
                  <h4>MOTION GRAPHIC ANIMATION</h4>
                  <p>
                  Inventive Motion Graphics with specialties in<br/>
                  Adobe After Effect and Adobe Illustrator
                  </p>
                </div>
              </Grid>
              <Grid item sm={4}>
                <div className={classes.picWrapper}>
                  <img src={motionGraphic} alt="Motion Graphic" />
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    )
  }
}

MyServices.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(MyServices);
