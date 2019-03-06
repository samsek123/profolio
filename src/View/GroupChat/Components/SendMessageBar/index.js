import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

// i18n
import { withNamespaces } from 'react-i18next';

// Material UI
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';

import Menu from '@material-ui/core/Menu';

// Material Icon
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfiedOutlined';
import PhotoIcon from '@material-ui/icons/PhotoOutlined';
import SendIcon from '@material-ui/icons/SendOutlined';

// Emoji Picker
import EmojiPicker from 'emoji-picker-react';
import JSEMOJI from 'emoji-js';

// Style
// import PotName from '../PotName';
import PotName from '../PotName';
import { styles } from './style';

//emoji set up
let jsemoji = new JSEMOJI();
jsemoji.img_set = 'emojione';
jsemoji.img_sets.emojione.path = 'https://cdn.jsdelivr.net/emojione/assets/3.0/png/32/';

const checkMobile = () => (
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)
);

class SendMessageBar extends Component<Props> {
  constructor() {
    super();
    this.state = {
      textContent: '',
      anchorEmoji: null,
    };
    this.pickEmoji = this.pickEmoji.bind(this);
    this.emojiClick =this.emojiClick.bind(this);
  }

  handleChange(type, value) {
    this.setState({ [type]: value });
  }

  emojiClick(event) {
    if (event) {
      this.setState({ anchorEmoji: event.currentTarget });
    } else {
      this.setState({ anchorEmoji: null });
    }
  }

  pickEmoji(code, emoji) {
    const { textContent } = this.state;
    let emojiPic = jsemoji.replace_colons(`:${emoji.name}:`);
    this.setState({
      textContent: textContent + emojiPic,
    });
    this.emojiClick(null);
  }

  render() {
    const { classes, t } = this.props;
    const { textContent, anchorEmoji } = this.state;
    return (
      <div className={classes.mainWrapper}>
        <AppBar className={classes.sendMessageWrapper} position="static" color="default">
          <Toolbar>
            <div className={classes.grow}>
              <PotName
                foodId='beef'
              />
              <input
                type="text"
                placeholder={t('component.page.groupChat.sendMessageBar.textContent')}
                className={classes.textField}
                value={textContent}
                onChange={(event) => this.handleChange('textContent', event.target.value)}
              />
            </div>
            {
              (checkMobile) && (
                <IconButton
                  className={classes.functionButton}
                  color="inherit"
                  aria-label="Emoji"
                  disableRipple
                  aria-owns={anchorEmoji ? 'simple-menu-3' : undefined}
                  aria-haspopup="true"
                  onClick={(event) => this.emojiClick(event)}
                >
                  <SentimentSatisfiedIcon />
                </IconButton>
              )
            }
            <IconButton
              className={classes.functionButton}
              color="inherit"
              aria-label="Attachment"
              disableRipple
            >
              <PhotoIcon />
            </IconButton>
            <IconButton
              className={classes.functionButton}
              color="inherit"
              aria-label="Send Button"
              disableRipple
            >
              <SendIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Menu
          id="simple-menu-3"
          anchorEl={anchorEmoji}
          open={Boolean(anchorEmoji)}
          onClose={() => this.emojiClick(null)}
        >
          <EmojiPicker
            onEmojiClick={(code, emoji) => this.pickEmoji(code, emoji)}
          />
        </Menu>
      </div>
    )
  }
}

SendMessageBar.propTypes = {
  classes: PropTypes.object.isRequired,
  // i18n
  t: PropTypes.func.isRequired,
}

export default withNamespaces('translation')(withStyles(styles)(SendMessageBar));
