// import update from 'react-addons-update';
import * as type from '../type';

export function chooseHotTopicDetail(topicId = null, topicTitle = null, categoryId = null, topicDescription = null, totalParticipant = null, genderDistribution = null, topicLastSeen = null) {
  let data = {};
  if (topicId) {
    data = {
      topicId,
      topicTitle,
      categoryId,
      topicDescription,
      totalParticipant,
      genderDistribution,
      topicLastSeen,
    };
  }
  return async (dispatch) => {
    dispatch({
      type: type.HOT_TOPIC_DETAIL,
      data,
    });
  };
}
