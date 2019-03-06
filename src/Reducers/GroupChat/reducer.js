import * as type from '../type';

export function groupTopicFriendNav(
  state = false,
  action,
) {
  switch (action.type) {
    case type.SWITCH_DRAWER_GROUP_TOPIC: {
      return action.data;
    }
    default:
      return state;
  }
}

export function groupTopicChat(
  state = {
    tempFriendList: [
      {title: '夢幻流行', unread: 0, lastMsg: 'Photos', time: '凌晨12:15', id: 'WYGYsABjB9MR96qAp0Xv', categoryId: 'music'},
      {title: '瞪鞋搖滾', unread: 2, lastMsg: 'Photos', time: '凌晨12:15', id: 'wSjO5XFEn8P37dY84Eew', categoryId: 'music'},
    ],
    permFriendList: [
      {title: '夢幻流行', unread: 0, lastMsg: 'Photos', time: '凌晨12:15', id: 'WYGYsABjB9MR96xAp0Xva', categoryId: 'music'},
      {title: '瞪鞋搖滾', unread: 2, lastMsg: 'Photos', time: '凌晨12:15', id: 'wSjO5XFEn8P37de84Eewb', categoryId: 'music'},
    ],
  },
  action,
) {
  switch (action.type) {
    default:
      return state;
  }
}

export function groupTopicSelectedId(
  state = '',
  action,
) {
  switch (action.type) {
    case type.CHOOSE_TOPIC_ID: {
      return action.data;
    }
    default:
      return state;
  }
}

export function groupTopicSelectedTab(
  state = 0,
  action,
) {
  switch (action.type) {
    case type.CHOOSE_TOPIC_TAB: {
      return action.data;
    }
    default:
      return state;
  }
}
