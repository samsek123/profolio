import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

// Style
import { styles } from './style';

// Sub Components
import FriendList from './Components/FriendList';
import GroupChatNavBar from './Components/GroupChatNavBar';
import MainConversation from './Components/MainConversation';
import SendMessageBar from './Components/SendMessageBar';

class GroupChat extends Component<Props> {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.groupChatWrapper}>
        <FriendList />
        <div className={classes.chatWrapper}>
          <GroupChatNavBar />
          <MainConversation />
          <SendMessageBar />
        </div>
      </div>
    )
  }
}

GroupChat.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(GroupChat);
