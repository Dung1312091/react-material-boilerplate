import produce from "immer";

export const initialState = {};
const commonsReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      default:
        return state;
    }
  });
export default commonsReducer;
