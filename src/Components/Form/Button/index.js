import React, { Component }  from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';

// Text Input

import { styles } from './style';

class Button extends Component<Props> {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    const { classes, content, type, iconSet, className, onClick, fullWidth } = this.props;
    return (
      <button onClick={onClick} className={classNames(classes[type], classes.buttonRoot, className, (fullWidth) && classes.fullWidthButton)}>
        {
          React.cloneElement(
            iconSet,
            {className: classes.iconSet}
          )
        }
        {content}
      </button>
    )
  }
}

Button.propTypes = {
  classes: PropTypes.object.isRequired,
  content: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.string,
  iconSet: PropTypes.node,
  className: PropTypes.string,
  fullWidth: PropTypes.bool,
}

Button.defaultProps = {
  onChange: () => {},
  type: 'primary',
  iconSet: <span />,
  className: '',
  fullWidth: false,
};

export default withStyles(styles)(Button);
