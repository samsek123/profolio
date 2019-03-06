// import update from 'react-addons-update';
import * as type from '../type';

export function collapseMenu() {
  return async (dispatch) => {
    dispatch({ type: type.COLLAPSE_LEFT_NAV });
  };
}
