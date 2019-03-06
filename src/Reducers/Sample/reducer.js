import * as type from '../type';

export default function sample(
  state = 0,
  action,
) {
  switch (action.type) {
    case type.SAMPLE: {
      const newData = action.data;
      let oldstate = state;
      oldstate ++;
      return oldstate;
    }
    default:
      return state;
  }
}
