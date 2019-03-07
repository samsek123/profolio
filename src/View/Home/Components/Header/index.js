import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

// Animated Text
import Typing from 'react-typing-animation';

// Style
import { styles } from './style';

// Sub Components

// Image
import star from'../../../../Assets/Image/star.png';
import earth from'../../../../Assets/Image/earth.svg';
import coder from'../../../../Assets/Image/coder.png';

class Header extends Component<Props> {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.headerWrapper}>
        <div className={classes.infoWrapper}>
          <Typing>
            <h1 className={classes.nameText}>
              I’M SAM SEK
            </h1>
            <h3 className={classes.extraText}>
              FROM OUTER SPACE
            </h3>
            <p className={classes.supportText}>
              Passionate Hong Kong Full Stack Developer & Designer
            </p>
          </Typing>
        </div>
        <div className={classes.backgroundWrapper}>
          <div className={classes.opacityNone}>
            <h1 className={classes.nameText}>
              I’M SAM SEK
            </h1>
            <h3 className={classes.extraText}>
              FROM OUTER SPACE
            </h3>
            <p className={classes.supportText}>
              Passionate Hong Kong Full Stack Developer & Designer
            </p>
          </div>
        </div>
        <img src={star} alt="star 1" className={classes.starOneImage} />
        <img src={star} alt="star 2" className={classes.starTwoImage} />
        <img src={coder} alt="coder" className={classes.coderImage} />
        <img src={earth} alt="earth" className={classes.earthImage} />
      </div>
    )
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Header);
