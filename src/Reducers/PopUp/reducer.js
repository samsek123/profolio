import * as type from '../type';

export default function popUpStatus(
  state = {
    openLogin: false,
    openRegistration: false,
    openSetPreference: false,
    openEditPreference: false,
    openAddTopic: false,
    openEditTopic: false,
    openChangePassword: false,
    openResendActivate: false,
  },
  action,
) {
  switch (action.type) {
    case type.CLOSE_POP_UP: {
      const newState = {
        openLogin: false,
        openRegistration: false,
        openSetPreference: false,
        openEditPreference: false,
        openAddTopic: false,
        openEditTopic: false,
        openChangePassword: false,
        openResendActivate: false,
      };
      return newState;
    }
    case type.OPEN_POP_UP: {
      const newData = action.data;
      let newState = {
        openLogin: false,
        openRegistration: false,
        openSetPreference: false,
        openEditPreference: false,
        openAddTopic: false,
        openEditTopic: false,
        openChangePassword: false,
        openResendActivate: false,
      };
      newState[newData.popUpName] = newData.open;
      return newState;
    }
    default:
      return state;
  }
}
