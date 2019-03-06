import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';

// Material UI
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Select from 'react-select';

// Material UI Icon
import CreateIcon from '@material-ui/icons/CreateOutlined';

// Image
import loginLong from'../../../../Assets/Image/logo_long.png';

// Style
import { styles } from '../../style';

// Sub Components
import Button from '../../../Form/Button';
import ParticipantSelector from '../../../Form/ParticipantSelector';

// Tag Suggestion
import { tagList } from '../../../../GlobalUtils/tag.js';
import { categoryList } from '../../../../GlobalUtils/mapper.js';

// i18n
import { withNamespaces } from 'react-i18next';

const tagMap = tagList.map(item => ({
  value: item.label,
  label: item.label,
}));

const categoryMap = categoryList.map(item => ({
  value: item.value,
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

class TopicContent extends Component<Props> {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(type, value) {
    const { handleSubmit } = this.props;
    handleSubmit();
  }

  render() {
    const { classes, popUpTitle, handleChange, topicName, topicDescription, topicTags, topicCategory, topicParticipant, t } = this.props;
    return (
      <div className={classNames(classes.contentDetailWrapper, classes.contentDetailPreference)}>
        <img src={loginLong} className={classes.logoLongImg} alt="Logo" />
        <p className={classes.contentTitle}>{popUpTitle}</p>
        <TextField
          value={topicName}
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
          onChange={(event) => handleChange('topicName', event.target.value)}
          label={t('component.popUp.topicContent.topicName')}
          variant="outlined"
        />
        <TextField
          value={topicDescription}
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
          onChange={(event) => handleChange('topicDescription', event.target.value)}
          label={t('component.popUp.topicContent.topicDescription')}
          variant="outlined"
        />
        <Grid container spacing={8}>
          <Grid item md={6} sm={12} xs={12}>
            <Select
              className={classNames(classes.selectBox, classes.marginRight)}
              options={categoryMap}
              value={topicCategory}
              onChange={(value) => handleChange('topicCategory', value)}
              placeholder={t('component.popUp.topicContent.topicCategory')}
              isClearable
              styles={colourStyles}
            />
          </Grid>
          <Grid item md={6} sm={12} xs={12}>
            <Select
              isMulti
              className={classNames(classes.selectBox, classes.marginLeft)}
              options={tagMap}
              value={topicTags}
              onChange={(value) => handleChange('topicTags', value)}
              placeholder={t('component.popUp.topicContent.topicTags')}
              isClearable
              styles={colourStyles}
            />
          </Grid>
        </Grid>
        <div className={classes.loginActionWrapper} >
          <div className={classes.leftWrapper}>
            <ParticipantSelector
              value={topicParticipant}
              onChange={(value) => handleChange('topicParticipant', value)}
            />
          </div>
          <div className={classes.rightWrapper}>
            <Button
              className={classes.buttonSet}
              iconSet={<CreateIcon />}
              content={t('component.popUp.topicContent.submitButton')}
              onClick={() => this.handleSubmit()}
            />
          </div>
        </div>
      </div>
    )
  }
}

TopicContent.propTypes = {
  classes: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  popUpTitle: PropTypes.string,
  topicName: PropTypes.string,
  topicDescription: PropTypes.string,
  topicTags: PropTypes.array,
  topicCategory: PropTypes.string,
  topicParticipant: PropTypes.number,
  // i18n
  t: PropTypes.func.isRequired,
}

TopicContent.defaultProps = {
  popUpTitle: '',
  topicName: '',
  topicDescription: '',
  topicTags: [],
  topicCategory: '',
  topicParticipant: 0,
}

export default withNamespaces('translation')(withStyles(styles)(TopicContent));
