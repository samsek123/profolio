import React, { Component }  from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';

// i18n
import { withNamespaces } from 'react-i18next';

// Material UI
import Avatar from '@material-ui/core/Avatar';

// Icon List
import beef from'../../../../Assets/Image/beef.png';
import cheese from'../../../../Assets/Image/cheese.png';
import water from'../../../../Assets/Image/water.png';
import onion from'../../../../Assets/Image/onion.png';
import skin from'../../../../Assets/Image/skin.png';
import vegetable from'../../../../Assets/Image/vegetable.png';

import { styles } from './style';

const nodeMap = {
  beef,
  cheese,
  water,
  onion,
  skin,
  vegetable,
};

class PotName extends Component<Props> {
  render() {
    const { classes, showName, gender, foodId, t } = this.props;

    return (
      <div className={classes.potNameWrapper}>
        {
          (foodId) && (
            <Avatar className={classNames((showName) && classes.sendBarAvatar, classes.potNameAvatar)}>
              <img className={classes.logoImg} src={nodeMap[foodId]} alt="Potaspace" />
            </Avatar>
          )
        }
        {
          (showName) && (
            <div className={classes.nameWrapper}>
              <span>{t(`component.page.groupChat.potName.${foodId}`)}</span>
              <span className={classNames(classes[gender], classes.genderDot)} />
            </div>
          )
        }
      </div>
    )
  }
}

PotName.propTypes = {
  classes: PropTypes.object.isRequired,
  showName: PropTypes.bool,
  gender: PropTypes.string,
  foodId: PropTypes.string,
  // i18n
  t: PropTypes.func.isRequired,
}

PotName.defaultProps = {
  showName: false,
  gender: 'male',
  foodId: '',
};

export default withNamespaces('translation')(withStyles(styles)(PotName));
