import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Icon List
import AirplanemodeActiveIcon from '@material-ui/icons/AirplanemodeActiveOutlined';
import SchoolIcon from '@material-ui/icons/SchoolOutlined';
import ChatIcon from '@material-ui/icons/ChatOutlined';
import MusicNoteIcon from '@material-ui/icons/MusicNoteOutlined';


class IconControl extends Component<Props> {
  render() {
    const { className, categoryId } = this.props;
    let iconComponent = <ChatIcon className={className} />;
    switch(categoryId) {
      case 'music':
        iconComponent = <MusicNoteIcon className={className} />;
        break;
      case 'travel':
        iconComponent = <AirplanemodeActiveIcon className={className} />;
        break;
      case 'school':
        iconComponent = <SchoolIcon className={className} />;
        break;
      default:
        iconComponent = <ChatIcon className={className} />;
    }
    return iconComponent;
  }
}

IconControl.propTypes = {
  className: PropTypes.string,
  categoryId: PropTypes.string,
}

IconControl.defaultProps = {
  className: '',
  categoryId: '',
};

export default IconControl;
