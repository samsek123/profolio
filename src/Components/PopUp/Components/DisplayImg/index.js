import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';

// Style
import { styles } from './style';

class DisplayImg extends Component<Props> {
  render() {
    const { classes, className, image, imageSmall, imageMedium, title, content } = this.props;
    return (
      <div className={classNames(classes.imageWrapper, className)}>
        <img src={image} alt={'Login'} className={classNames(classes.displayImg, classes.imageLarge)} />
        <img src={imageMedium} alt={'Login'} className={classNames(classes.displayImg, classes.imageMedium)} />
        <img src={imageSmall} alt={'Login'} className={classNames(classes.displayImg, classes.imageSmall)} />
        <div className={classes.imageTextWrapper}>
          <p className={classes.imageTitleText}>{title}</p>
          <p className={classes.imageDescriptionText}>{content}</p>
        </div>
      </div>
    )
  }
}

DisplayImg.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  image: PropTypes.node.isRequired,
  imageSmall: PropTypes.node.isRequired,
  imageMedium: PropTypes.node.isRequired,
  className: PropTypes.object,
}

DisplayImg.defaultProps = {
  className: {},
}

export default withStyles(styles)(DisplayImg);
