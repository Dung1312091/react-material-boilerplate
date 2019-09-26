import produce from "immer";

export const initialState = {
  showLoading: false
};
const layoutReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case "SHOW_LOADING":
        draft.showLoading = true;
        break;
      case "HIDE_LOADING":
        draft.showLoading = false;
        break;
      default:
        return state;
    }
  });
export default layoutReducer;
