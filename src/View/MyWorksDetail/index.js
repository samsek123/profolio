import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

// Style
import { styles } from './style';


class MyWorksDetail extends Component<Props> {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.myWorksWrapper}>
      </div>
    )
  }
}

MyWorksDetail.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(MyWorksDetail);
