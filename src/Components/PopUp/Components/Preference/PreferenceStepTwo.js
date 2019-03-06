import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';

// i18n
import { withNamespaces } from 'react-i18next';

// Material UI
import TextField from '@material-ui/core/TextField';
import Select from 'react-select';

// Material UI Icon
import CreateIcon from '@material-ui/icons/CreateOutlined';
import CallMadeIcon from '@material-ui/icons/CallMadeOutlined';

// Image
import loginLong from'../../../../Assets/Image/logo_long.png';

// Style
import { styles } from '../../style';

// Sub Components
import Button from '../../../Form/Button';

// Tag Suggestion
import { tagList } from '../../../../GlobalUtils/tag.js';

const tagMap = tagList.map(item => ({
  value: item.label,
  label: item.label,
}));

const colourStyles = {
  control: (styles, state) => ({
    ...styles,
    '&:hover': { borderColor: 'rgba(0, 0, 0, 0.87)' }, // border style on hover
    borderColor: '#bdc3c7;',
    boxShadow: 'none', // no box-shadow
    fontSize: '13px',
    paddingLeft: 3,
  }),
  menuList: styles => ({
    ...styles,
    maxHeight: 100,
  }),
  input: styles => ({ ...styles, lineHeight: '38px' }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    return {
      ...styles,
      backgroundColor: isSelected ? 'rgba(0, 0, 0, 0.08)' : isFocused ? 'rgba(0, 0, 0, 0.08)' : null,
      color: 'black',
    };
  },
};


class PreferenceStepTwo extends Component<Props> {
  render() {
    const { classes, description, tagPreference, handleChange, skipPreference, nextStep, popUpTitle, t } = this.props;
    return (
      <div className={classes.contentWrapper}>
        <div className={classNames(classes.contentDetailWrapper, classes.contentDetailPreference)}>
          <img src={loginLong} className={classes.logoLongImg} alt="Logo" />
            <p className={classes.contentTitle}>{popUpTitle} (2/3)</p>
            <TextField
              value={description}
              className={classes.optionalField}
              InputLabelProps={{
                classes: {
                  root: classes.cssLabel,
                  focused: classes.cssFocused,
                },
              }}
              InputProps={{
                classes: {
                  root: classes.cssOutlinedInput,
                  focused: classes.cssFocused,
                  notchedOutline: classes.notchedOutline,
                },
              }}
              onChange={(event) => handleChange('description', event.target.value)}
              label={t('component.popUp.preferenceStep.description')}
              variant="outlined"
            />
            <Select
              isMulti
              className={classes.selectBox}
              options={tagMap}
              value={tagPreference}
              onChange={(value) => handleChange('tagPreference', value)}
              placeholder={t('component.popUp.preferenceStep.tagPreference')}
              isClearable
              styles={colourStyles}
            />
            <div className={classes.loginActionWrapper} >
              <div className={classes.leftWrapper}>
              </div>
              <div className={classes.rightWrapper}>
                <Button
                  type="secondary"
                  className={classes.buttonSet}
                  iconSet={<CallMadeIcon />}
                  content={t('component.popUp.preferenceStep.skipStep')}
                  onClick={() => skipPreference()}
                />
                <Button
                  className={classes.buttonSet}
                  iconSet={<CreateIcon />}
                  content={t('component.popUp.preferenceStep.nextStep')}
                  onClick={() => nextStep()}
                />
              </div>
            </div>
          </div>
        </div>

    )
  }
}

PreferenceStepTwo.propTypes = {
  classes: PropTypes.object.isRequired,
  tagPreference: PropTypes.array,
  description: PropTypes.string,
  skipPreference: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  popUpTitle: PropTypes.string.isRequired,
  // i18n
  t: PropTypes.func.isRequired,
}

PreferenceStepTwo.defaultProps = {
  tagPreference: '',
  description: '',
};

export default withNamespaces('translation')(withStyles(styles)(PreferenceStepTwo));
