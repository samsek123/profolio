import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

// Material UI
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import SwipeableViews from 'react-swipeable-views';
import Grid from '@material-ui/core/Grid';

// Style
import { styles } from './style';

// Image
import gameChat from '../../../../Assets/Image/gamechat.png';
import palapal from '../../../../Assets/Image/palapal.png';
import samsek from '../../../../Assets/Image/samsek.png';
import savetify from '../../../../Assets/Image/savetify.png';
import utravel from '../../../../Assets/Image/utravel.png';
import vottle from '../../../../Assets/Image/vottle.png';
import mircomodule from '../../../../Assets/Image/mircomodule.png';

class MyWorks extends Component<Props> {
  constructor() {
    super();
    this.state = {
      selectedTab: 0,
    };
    this.selectTab = this.selectTab.bind(this);
  }

  selectTab(tabValue) {
    this.setState({
      selectedTab: tabValue,
    });
  }

  render() {
    const { classes, theme } = this.props;
    const { selectedTab } = this.state;
    return (
      <div className={classes.myWorksWrapper} id="works">
        <h2 className={classes.subTitleText}>MY WORKS</h2>
        <div className={classes.tabsWrapper}>
          <Tabs
            value={selectedTab}
            onChange={(event, value) => this.selectTab(value)}
            classes={{ indicator: classes.tabsIndicator }}
            centered
          >
            <Tab
              disableRipple
              classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
              label="Full Stack Development"
            />
            <Tab
              disableRipple
              classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
              label="UI/UX Design"
            />
            <Tab
              disableRipple
              classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
              label="Video Editing"
            />
          </Tabs>
        </div>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={selectedTab}
          onChange={(index) => this.selectTab(index)}
          className={classes.profolioList}
        >
          <div component="nav" dir={theme.direction}>
            <Grid container>
              <Grid item sm={6}>
                <img src={gameChat} alt="GameChat" />
              </Grid>
              <Grid item sm={6}>
                <img src={palapal} alt="Palapal" />
              </Grid>
              <Grid className={classes.secondLayer} item sm={6}>
                <img src={vottle} alt="Vottle" />
              </Grid>
              <Grid className={classes.secondLayer} item sm={6}>
                <img src={savetify} alt="Savetify" />
              </Grid>
            </Grid>
          </div>
          <div component="nav" dir={theme.direction}>
            <Grid container>
              <Grid item sm={6}>
                <img src={gameChat} alt="GameChat" />
              </Grid>
              <Grid item sm={6}>
                <img src={palapal} alt="Palapal" />
              </Grid>
              <Grid className={classes.secondLayer} item sm={6}>
                <img src={samsek} alt="SamSek" />
              </Grid>
              <Grid className={classes.secondLayer} item sm={6}>
                <img src={savetify} alt="Savetify" />
              </Grid>
            </Grid>
          </div>
          <div component="nav" dir={theme.direction}>
            <Grid container>
              <Grid item sm={6}>
                <img src={utravel} alt="Utravel" />
              </Grid>
              <Grid item sm={6}>
                <img src={palapal} alt="Palapal" />
              </Grid>
              <Grid className={classes.secondLayer} item sm={6}>
                <img src={mircomodule} alt="Micro Module" />
              </Grid>
              <Grid className={classes.secondLayer} item sm={6}>
                <img src={savetify} alt="Savetify" />
              </Grid>
            </Grid>
          </div>
        </SwipeableViews>
      </div>
    )
  }
}

MyWorks.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles, { withTheme: true })(MyWorks);
