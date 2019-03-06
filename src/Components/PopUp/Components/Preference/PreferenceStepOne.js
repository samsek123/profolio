import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';

// i18n
import { withNamespaces } from 'react-i18next';

// Material UI
import TextField from '@material-ui/core/TextField';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
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

// Country Suggestion
import { countryList } from '../../../../GlobalUtils/country.js';

const countryMap = countryList.map(item => ({
  value: item.label,
  label: item.label,
}));

const colourStyles = {
  control: (styles, state) => ({
    ...styles,
    '&:hover': { borderColor: 'rgba(0, 0, 0, 0.87)' }, // border style on hover
    borderColor: '#bdc3c7;',
    boxShadow: 'none', // no box-shadow
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


class PreferenceStepOne extends Component<Props> {
  render() {
    const { classes, birthday, gender, country, handleChange, nextStep, skipPreference, popUpTitle, t } = this.props;
    return (
      <div className={classes.contentWrapper}>
        <div className={classNames(classes.contentDetailWrapper, classes.contentDetailPreference)}>
          <img src={loginLong} className={classes.logoLongImg} alt="Logo" />
            <p className={classes.contentTitle}>{popUpTitle} (1/3)</p>
            <p className={classes.subTitle}>{t('component.popUp.preferenceStep.birthday')}</p>
            <TextField
              value={birthday}
              className={classes.optionalField}
              InputProps={{
                shrink: true,
                classes: {
                  root: classes.cssOutlinedInput,
                  focused: classes.cssFocused,
                  notchedOutline: classes.notchedOutline,
                },
              }}
              type="date"
              onChange={(event) => handleChange('birthday', event.target.value)}
              variant="outlined"
            />
            <RadioGroup
              row
              aria-label="Gender"
              name="gender"
              className={classes.radioGroup}
              value={gender}
              onChange={(event) => handleChange('gender', event.target.value)}
            >
              <FormControlLabel className={classes.radioLabel} value="male" control={<Radio color="default" />} label={t('component.popUp.preferenceStep.malePicker')} />
              <FormControlLabel className={classes.radioLabel} value="female" control={<Radio color="default" />} label={t('component.popUp.preferenceStep.femalePicker')} />
            </RadioGroup>
            <Select
              className={classes.selectBox}
              options={countryMap}
              value={country}
              onChange={(value) => handleChange('country', value)}
              placeholder={t('component.popUp.preferenceStep.countryPicker')}
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

PreferenceStepOne.propTypes = {
  classes: PropTypes.object.isRequired,
  birthday: PropTypes.string,
  gender: PropTypes.string,
  country: PropTypes.string,
  skipPreference: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  popUpTitle: PropTypes.string.isRequired,
  // i18n
  t: PropTypes.func.isRequired,
}

PreferenceStepOne.defaultProps = {
  birthday: '',
  gender: '',
  country: '',
};

export default withNamespaces('translation')(withStyles(styles)(PreferenceStepOne));
