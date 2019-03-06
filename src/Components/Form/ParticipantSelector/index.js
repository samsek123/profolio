import React, { Component }  from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';

// i18n
import { withNamespaces } from 'react-i18next';

// Icon List
import FaceIcon from '@material-ui/icons/FaceOutlined';

import { styles } from './style';

class ParticipantSelector extends Component<Props> {
  constructor() {
    super();
    this.createIconList = this.createIconList.bind(this);
  }

  createIconList() {
    const { classes, value, onChange } = this.props;
    let iconList = [];
    for (let i = 0; i < 6; i++) {
      iconList.push(
        <span key={i} className={classes.iconWrapper} onClick={() => onChange((i + 1))}>
          <FaceIcon className={classNames(classes.baseColor, (i < value) && classes.selected)} />
        </span>
      );
    }
    return iconList;
  }

  render() {
    const { classes, t } = this.props;
    return (
      <div className={classes.noStyle}>
        <p className={classes.title}>{t('component.form.numberOfPeople')}</p>
        {this.createIconList()}
      </div>
    )
  }
}

ParticipantSelector.propTypes = {
  classes: PropTypes.object.isRequired,
  value: PropTypes.number,
  onChange: PropTypes.func.isRequired,
  // i18n
  t: PropTypes.func.isRequired,
}

ParticipantSelector.defaultProps = {
  value: 0,
};

export default withNamespaces('translation')(withStyles(styles)(ParticipantSelector));
