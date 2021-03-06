import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

// Style
import { styles } from './style';

// Sub Components
import Header from './Components/Header';
import SelfIntro from './Components/SelfIntro';
import SkillSet from './Components/SkillSet';
import MyServices from './Components/MyServices';
import MyWorks from './Components/MyWorks';
import ContactMe from './Components/ContactMe';

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
        <Header />
        <SelfIntro />
        <SkillSet />
        <MyServices />
        <MyWorks />
        <ContactMe />
      </div>
    )
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Home);
