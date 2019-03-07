import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

// Style
import { styles } from './style';

class SkillBar extends Component<Props> {
  render() {
    const { classes, skills } = this.props;
    const Skill = skills.map((item) => (
      <div className={classes.barWrapper}>
        <p className={classes.titleText}>{item.type}</p>
        <div className={classes.backgroundWrapper}>
          <div className={classes.bar} style={{width: `${item.level}%`}} />
        </div>
      </div>
    ));
    return (
      <div className={classes.skillBarWrapper}>
        {Skill}
      </div>
    )
  }
}

SkillBar.propTypes = {
  classes: PropTypes.object.isRequired,
  skills: PropTypes.array.isRequired,
}

export default withStyles(styles)(SkillBar);
