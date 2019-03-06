import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Material UI Snackbar
import Snackbar from '@material-ui/core/Snackbar';

// Sub Components
import Login from './Components/Login';
import Registration from './Components/Registration';
import SetPreference from './Components/Preference/SetPreference';
import EditPreference from './Components/Preference/EditPreference';
import AddTopic from './Components/Topic/AddTopic';
import EditTopic from './Components/Topic/EditTopic';
import ChangePassword from './Components/ChangePassword';
import ResendActivate from './Components/ResendActivate';

import SnackBarContent from '../SnackBarContent';

// Redux action
import { closePopUp } from '../../Reducers/PopUp/action';

// Redux Connect
function mapDispatchToProps(dispatch) {
  return ({
    closePopUp: bindActionCreators(closePopUp, dispatch),
  });
}

function mapStateToProps(state) {
  return ({ popUpStatus: state.popUpStatus });
}

class PopUp extends Component<Props> {
  constructor() {
    super();
    this.state = {
      openSnackBar: false,
    };
    this.handleClose = this.handleClose.bind(this);
    this.handleSnackBarClose = this.handleSnackBarClose.bind(this);
  }

  handleClose() {
    const { closePopUp } = this.props;
    closePopUp();
  }

  handleSnackBarClose() {
    this.setState({ openSnackBar: false });
  };

  render() {
    const { popUpStatus } = this.props;
    const { openLogin, openRegistration, openSetPreference, openEditPreference, openAddTopic, openEditTopic, openChangePassword, openResendActivate } = popUpStatus;
    const { openSnackBar } = this.state;
    return (
      <div>
        <Snackbar
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
          open={openSnackBar}
          onClose={() => this.handleSnackBarClose()}
          autoHideDuration={6000}
        >
          <SnackBarContent
            onClose={() => this.handleSnackBarClose()}
            variant="success"
            message="This is a success message!"
          />
        </Snackbar>
        <Login
          openLogin={openLogin}
          handleClose={() => this.handleClose()}
        />
        <Registration
          openRegistration={openRegistration}
          handleClose={() => this.handleClose()}
        />
        <SetPreference
          openSetPreference={openSetPreference}
          handleClose={() => this.handleClose()}
        />
        <EditPreference
          openEditPreference={openEditPreference}
          handleClose={() => this.handleClose()}
        />
        <AddTopic
          openAddTopic={openAddTopic}
          handleClose={() => this.handleClose()}
        />
        <EditTopic
          openEditTopic={openEditTopic}
          handleClose={() => this.handleClose()}
        />
        <ChangePassword
          openChangePassword={openChangePassword}
          handleClose={() => this.handleClose()}
        />
        <ResendActivate
          openResendActivate={openResendActivate}
          handleClose={() => this.handleClose()}
        />
      </div>
    )
  }
}

PopUp.propTypes = {
  // Redux
  closePopUp: PropTypes.func.isRequired,
  popUpStatus: PropTypes.object.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(PopUp);
