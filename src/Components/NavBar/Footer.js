import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

// Image
import logoWhite from'../../Assets/Image/logo_white.png';
import youtubeIcon from'../../Assets/Image/youtube.png';
import linkedinIcon from'../../Assets/Image/linkedin.png';

// Router
import {withRouter} from 'react-router-dom';

// Style
import { styles } from './style';

class Footer extends Component<Props> {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.footer}>
        <img src={logoWhite} alt="logo" className={classes.logoSet} />
        <p>
          <a href="https://www.youtube.com/channel/UCq-soos09qJFDeQzEsZ1YAw/videos?view_as=subscriber">
            <img src={youtubeIcon} alt="youtube icon" className={classes.iconSet} />
          </a>
          <a href="https://www.linkedin.com/in/sam-sek-115127142/">
            <img src={linkedinIcon} alt="linkedin icon" className={classes.iconSet} />
          </a>
        </p>
        <p className={classes.footerText}>© 2019 SAM SEK</p>
      </div>
    )
  }
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
  pathname: PropTypes.string.isRequired,
}

export default withRouter(withStyles(styles)(Footer));
