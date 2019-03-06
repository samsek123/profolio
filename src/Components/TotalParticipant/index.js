import React, { Component }  from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';

// Icon List
import FaceIcon from '@material-ui/icons/FaceOutlined';

import { styles } from './style';

class TotalParticipant extends Component<Props> {
  constructor() {
    super();
    this.createIconList = this.createIconList.bind(this);
  }

  createIconList() {
    const { classes, total, gender, showLive, liveDistribution } = this.props;
    let iconList = [];
    for (let i = 0; i < total; i++) {
      iconList.push(
        <span key={i} className={classes.iconWrapper}>
          <FaceIcon className={classNames(classes.baseColor, (i < gender.length) && classes[gender[i]])} />
          {
            (showLive && liveDistribution[i]) && (
              <span className={classes.liveDot} />
            )
          }
        </span>
      );
    }
    return iconList;
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.noStyle}>
        {this.createIconList()}
      </div>
    )
  }
}

TotalParticipant.propTypes = {
  classes: PropTypes.object.isRequired,
  total: PropTypes.number,
  gender: PropTypes.array,
  showLive: PropTypes.bool,
  liveDistribution: PropTypes.array,
}

TotalParticipant.defaultProps = {
  total: 2,
  gender: ['male', 'female'],
  showLive: false,
  liveDistribution: [false, false],
};

export default withStyles(styles)(TotalParticipant);
