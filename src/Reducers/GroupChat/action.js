// import update from 'react-addons-update';
import * as type from '../type';

export function closeGroupTopicFriendNav(openClose) {
  return async (dispatch) => {
    dispatch({
      type: type.SWITCH_DRAWER_GROUP_TOPIC,
      data: openClose,
    });
  };
}

export function groupTopicSelect(selectedId) {
  return async (dispatch) => {
    dispatch({
      type: type.CHOOSE_TOPIC_ID,
      data: selectedId,
    });
  };
}

export function groupTopicTabSelect(tabValue) {
  return async (dispatch) => {
    dispatch({
      type: type.CHOOSE_TOPIC_TAB,
      data: tabValue,
    });
  };
}
