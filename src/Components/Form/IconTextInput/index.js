import React, { Component }  from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';

// Text Input
import FormControl from '@material-ui/core/FormControl';
import InputAdornment from '@material-ui/core/InputAdornment';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';

// Icon List
import SearchIcon from '@material-ui/icons/SearchOutlined';

import { styles } from './style';

class IconTextInput extends Component<Props> {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.iconTextInputWrapper}>
        <FormControl
          className={classNames(classes.margin, classes.textField)}
        >
          <InputLabel
            classes={{
              root: classes.cssLabel,
              focused: classes.cssFocused,
            }}
            htmlFor="input-field"
            formcontrolclasses={{ focused: classes.focusedLabelText }}
          >
            {this.props.placeholder}
          </InputLabel>
          <Input
            id="input-field"
            type={this.props.type}
            disableUnderline={true}
            value={this.props.value}
            onChange={(event) => this.props.onChange(event.target.value)}
            endAdornment={
              (this.props.type === 'search') && (
                <InputAdornment position="end">
                  <SearchIcon className={classes.labelText} />
                </InputAdornment>
              )
            }
          />
        </FormControl>
      </div>
    )
  }
}

IconTextInput.propTypes = {
  classes: PropTypes.object.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
}

IconTextInput.defaultProps = {
  placeholder: '',
  type: 'text',
  onChange: () => {},
};

export default withStyles(styles)(IconTextInput);
