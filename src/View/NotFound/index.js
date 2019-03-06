import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

// Style
import { styles } from './style';

// Icon List
import NotFoundImg from'../../Assets/Image/404.png';

class NotFound extends Component<Props> {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.notFoundWrapper}>
        <h1 className={classes.notFoundText}>404 Not Found</h1>
        <img src={NotFoundImg} alt="not found logo" className={classes.notFoundImg} />
      </div>
    )
  }
}

NotFound.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(NotFound);
