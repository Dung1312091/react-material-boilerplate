import { createSelector } from "reselect";
const makeSelectLocale = createSelector(
  state => state.language.locale,
  locale => locale
);

export { makeSelectLocale };
