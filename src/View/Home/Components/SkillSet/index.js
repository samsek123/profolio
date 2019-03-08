import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

// Material UI
import Grid from '@material-ui/core/Grid';

// Skill Set Component
import SkillBar from '../../../../Components/SkillBar';

// Style
import { styles } from './style';

// Image
import skillTitle from '../../../../Assets/Image/skill_title.png';
import skillBG from '../../../../Assets/Image/skill_bg.png';
import skillBGMobile from '../../../../Assets/Image/skill_bg_mobile.png';

const skills = [
  {type: "FullStack Development", level: 100},
  {type: "UI/UX Design", level: 95},
  {type: "Video Editing", level: 90},
  {type: "Motion Graphic Animation", level: 95},
];
class SkillSet extends Component<Props> {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.skillSetWrapper}>
        <img className={classes.desktopShow} src={skillBG} alt="skill set background" />
        <img className={classes.mobileShow} src={skillBGMobile} alt="skill set mobile" />
        <Grid className={classes.skillSetMainWrapper} container spacing={0} alignItems="stretch">
          <Grid container sm={6} justify="center" direction="column" alignItems="center">
            <div className={classes.topWrapper}>
              <img className={classes.titleText} src={skillTitle} alt="skill set title" />
              <p className={classes.descriptionText}>
              Full Stack Programmer, Graphic Designer, Video Editor who expertly researches and develops emerging concepts and trends. Tech-savvy and creative. Background in desktop and mobile platforms developing user-friendly products. Skilled in using VueJS, ReactJS, PHP, Python, NodeJS and More.
              </p>
            </div>
          </Grid>
          <Grid container sm={6} justify="center" direction="column" alignItems="center">
            <div className={classes.belowWrapper}>
              <SkillBar
                skills={skills}
              />
            </div>
          </Grid>
        </Grid>
      </div>
    )
  }
}

SkillSet.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(SkillSet);
