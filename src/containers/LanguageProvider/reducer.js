import produce from "immer";
import { LOCALE } from "../../constains";
export const initialState = {
  locale: localStorage.getItem(LOCALE) || "vi"
};

const languageProviderReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case "CHANGE_LOCALE":
        draft.locale = action.payload;
        break;
      default:
        return state;
    }
  });

export default languageProviderReducer;
