import { createSelector } from "reselect";

const makeSelectListCompanies = createSelector(
  state => state.homeReducer.companies,
  companies => companies
);

const makeSelectCompany = createSelector(
  state => state.homeReducer.companySelected,
  company => company
);

const makeSelectReports = createSelector(
  state => state.homeReducer.reports,
  reports => reports
);
export { makeSelectListCompanies, makeSelectCompany, makeSelectReports };
