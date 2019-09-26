import produce from "immer";
import get from "lodash.get";
export const initialState = {
  companies: [],
  companySelected: {
    company_id: null,
    company_name: ""
  },
  reports: {}
};
const homeReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case "GET_COMPANIES_SUCCESS":
        const { data } = action.payload;
        draft.companies = data;
        draft.companySelected = get(data, ["0"], null);
        break;
      case "SET_COMPANY_NAME":
        draft.companySelected.company_name = action.payload;
        break;
      case "GET_REPORT_BY_COMPANY_ID_SUCCESS":
        draft.reports = action.payload;
        break;

      default:
        return state;
    }
  });
export default homeReducer;
