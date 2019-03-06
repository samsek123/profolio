import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

// Custom Component
import ChatBox from '../ChatBox';

// Style
import { styles } from './style';

class MainConversation extends Component<Props> {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.mainConversationWrapper}>
        <div className={classes.fullWidthWrapper}>
          <div className={classes.chatBoxWrapper}>
            <p className={classes.textWrapper}>
              <span className={classes.overlayText}>12:00</span>
            </p>
            <ChatBox
              type="my"
              gender="male"
              foodId="beef"
              content="識大來。他停他師大生吃賽其改對民場晚到單；現金不。機發居使製代來，可展老。未方話著任全？吃通公府往以確初象士工先此視？引史頭紅先面？食國四臺劇我化十她增……在來華話條可便你怎，了和三軍之賽斯利腳些個過人人萬，他有時式應名戰正來天。紀心生見上帶得斯手：先約信一"
              time="凌晨12:15"
            />
            <ChatBox
              gender="female"
              foodId="onion"
              content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap"
              time="凌晨12:15"
            />
            <ChatBox
              type="my"
              gender="male"
              foodId="beef"
              content="識大來"
              time="凌晨12:15"
            />
            <ChatBox
              gender="female"
              foodId="onion"
              content="aaaaaaaaabbbbbbbbbbbbbbbbbbcccccccccccddddddaaaaaaaaabbbbbbbbbbbbbbbbbbcccccccccccddddddaaaaaaaaabbbbbbbbbbbbbbbbbbcccccccccccdddddd"
              time="凌晨12:15"
            />
          </div>
        </div>
      </div>
    )
  }
}

MainConversation.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(MainConversation);
