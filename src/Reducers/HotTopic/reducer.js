import * as type from '../type';

export default function hotTopicDetailMenu(
  state = {},
  action,
) {
  switch (action.type) {
    case type.HOT_TOPIC_DETAIL: {
      return action.data;
    }
    default:
      return state;
  }
}
