import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

// Style
import { styles } from './style';

// Image
import banner from'../../Assets/Image/banner.png';
import landingIconOne from'../../Assets/Image/landing_icon_1.png';
import landingIconTwo from'../../Assets/Image/landing_icon_2.png';
import landingIconThree from'../../Assets/Image/landing_icon_3.png';

// Sub Components
import HomeNavBar from './Components/HomeNavBar';

class Home extends Component<Props> {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.homeWrapper}>
        <div className={classes.homeInnerWrapper}>
          <HomeNavBar />
          <div className={classes.bannerWrapper}>
            <img src={banner} alt="banner" />
            <div className={classes.homeBannerOverlay} />
          </div>
        </div>
      </div>
    )
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Home);
