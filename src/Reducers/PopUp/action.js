import * as type from '../type';

export function openPopUp(popUpName, open = true) {
  return async (dispatch) => {
    dispatch({
      type: type.OPEN_POP_UP,
      data: {
        popUpName,
        open,
      },
    });
  };
}

export function closePopUp() {
  return async (dispatch) => {
    dispatch({
      type: type.CLOSE_POP_UP,
    });
  };
}
