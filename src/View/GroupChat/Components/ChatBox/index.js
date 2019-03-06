import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';

// Customized Component
import PotName from '../PotName';
import { styles } from './style';

class ChatBox extends Component<Props> {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    const { classes, type, gender, foodId, content, time } = this.props;
    return (
      <div className={classNames(classes.mainWrapper, (type === 'my') && classes.myWrapper)}>
        <div className={classes.iconWidth}>
          {(type === 'other') && (
            <PotName
              foodId={foodId}
              gender={gender}
              showName={true}
            />
          )}
        </div>
        <div className={classes.chatBoxWrapper}>
          <div className={classes.fullWidthWrapper}>
            <div className={classes.chatBoxInnerWrapper}>
              <div className={classNames(classes.chatBox, (type === 'my') && classes.myChatBox)}>
                {content}
              </div>
              <p
                className={classNames(classes.timeText, (type === 'my') && classes.myTimeText)}
              >
              {time}
              </p>
            </div>
          </div>
        </div>
        <div className={classes.iconWidth}>
          {(type === 'my') && (
            <PotName
              foodId={foodId}
              gender={gender}
              showName={true}
            />
          )}
        </div>
      </div>
    )
  }
}

ChatBox.propTypes = {
  classes: PropTypes.object.isRequired,
  type: PropTypes.string,
  gender: PropTypes.string,
  foodId: PropTypes.string,
  content: PropTypes.string,
  time: PropTypes.string,
}

ChatBox.defaultProps = {
  type: 'other',
  gender: 'male',
  foodId: 'beef',
  content: '',
  time: '',
};

export default withStyles(styles)(ChatBox);
