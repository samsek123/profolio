import * as type from '../type';

export default function navBarStatus(
  state = true,
  action,
) {
  switch (action.type) {
    case type.COLLAPSE_LEFT_NAV: {
      return !state;
    }
    default:
      return state;
  }
}
