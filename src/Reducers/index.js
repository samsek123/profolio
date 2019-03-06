import { combineReducers } from 'redux';

import navBarStatus from './NavBar/reducer';
import popUpStatus from './PopUp/reducer';
import hotTopicDetailMenu from './HotTopic/reducer';
import { groupTopicFriendNav, groupTopicChat, groupTopicSelectedId, groupTopicSelectedTab } from './GroupChat/reducer';

const reduxData = combineReducers({
  // Cross Page
  navBarStatus,
  popUpStatus,
  // Hot Topic
  hotTopicDetailMenu,
  // Group Topic
  groupTopicFriendNav,
  groupTopicChat,
  groupTopicSelectedId,
  groupTopicSelectedTab,
});

export default reduxData;
