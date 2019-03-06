import * as type from '../type';

export function sampleAction() {
  return async (dispatch) => {
    dispatch({ type: type.SAMPLE });
  };
}
