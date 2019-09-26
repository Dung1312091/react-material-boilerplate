import React, { memo } from "react";
import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import "./style.scss";
const makeSelectShowLoading = () => {
  return createSelector(
    state => state.layoutReducer.showLoading,
    loading => loading
  );
};
const Loading = memo(() => {
  const loading = useSelector(makeSelectShowLoading());
  return (
    <div className={`flex app-loading ${loading ? "show" : ""}`}>
      <div className="lds-spinner">
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
});
export default Loading;
