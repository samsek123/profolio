import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

// Material UI
import Button from '@material-ui/core/Button';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';

// Style
import { styles } from './style';

// Image
import activeIcon from'../../Assets/Image/active.png';

// DataSet
import profolioList from '../../Assets/Data/profolioList';

class MyWorks extends Component<Props> {
  constructor() {
    super();
    this.state = {
      active: 'all',
    };
    this.selectFilter = this.selectFilter.bind(this);
  }

  selectFilter(type) {
    this.setState({
      active: type,
    });
  }

  render() {
    const { classes, width } = this.props;
    const { active } = this.state;
    const getGridListCols = () => {
    if (isWidthUp('xl', width)) {
      return 3;
    }
    if (isWidthUp('lg', width)) {
      return 3;
    }
    if (isWidthUp('md', width)) {
      return 2;
    }
    if (isWidthUp('sm', width)) {
      return 2;
    }
    return 1;
  }
    return (
      <div className={classes.myWorksWrapper}>
        <h1 className={classes.title}>
          MY WORKS
        </h1>
        <p className={classes.buttonSetWrapper}>
          <div className={classes.button}>
            <Button
              className={classes.button}
              disableRipple={true}
              onClick={() => this.selectFilter('all')}
            >
              All
            </Button>
            {(active === 'all') && (
              <img src={activeIcon} alt="Select Icon" className={classes.selectedIcon} />
            )}
          </div>
          <div className={classes.button}>
            <Button
              className={classes.button}
              disableRipple={true}
              onClick={() => this.selectFilter('development')}
            >
              Website Development
            </Button>
            {(active === 'development') && (
              <img src={activeIcon} alt="Select Icon" className={classes.selectedIcon} />
            )}
          </div>
          <div className={classes.button}>
            <Button
              className={classes.button}
              disableRipple={true}
              onClick={() => this.selectFilter('design')}
            >
              UI/UX Design
            </Button>
            {(active === 'design') && (
              <img src={activeIcon} alt="Select Icon" className={classes.selectedIcon} />
            )}
          </div>
          <div className={classes.button}>
            <Button
              className={classes.button}
              disableRipple={true}
              onClick={() => this.selectFilter('motion')}
            >
              Motion Graphics
            </Button>
            {(active === 'motion') && (
              <img src={activeIcon} alt="Select Icon" className={classes.selectedIcon} />
            )}
          </div>
        </p>
        <div className={classes.profolioList}>
          <GridList cellHeight={200} className={classes.gridList} cols={getGridListCols()}>
            {profolioList.map((tile, index) => {
              if (active === 'all' || tile.type.includes(active)) {
                return (
                  <GridListTile className={classes.rowFix} key={tile.img}>
                    <img className={classes.columnFix} src={tile.img} alt={tile.title} />
                  </GridListTile>
                )
              }
              return null;
            })}
          </GridList>
        </div>
      </div>
    )
  }
}

MyWorks.propTypes = {
  classes: PropTypes.object.isRequired,
  width: PropTypes.object.isRequired,
}

export default withWidth()(withStyles(styles)(MyWorks));
