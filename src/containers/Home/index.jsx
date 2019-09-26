import React, { memo, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/Header";
import Line from "../../components/Line";
import Select from "../../components/Select";
import Search from "../../components/Search";
import ReportName from "../../components/ReportName";
import ReportForYear from "../../components/ReportForYear";
import {
  makeSelectListCompanies,
  makeSelectCompany,
  makeSelectReports
} from "./selectors";

import { reduxAction } from "../../store/action";
import "./style.scss";

const SelectCompany = memo(() => {
  const dispatch = useDispatch();
  const companies = useSelector(makeSelectListCompanies);
  const { company_id } = useSelector(makeSelectCompany);
  //get list companies
  useEffect(() => {
    if (companies.length < 1) {
      dispatch(reduxAction("GET_COMPANIES"));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (company_id) {
      dispatch(reduxAction("GET_REPORT_BY_COMPANY_ID", company_id));
    }
  }, [company_id, dispatch]);
  const onChange = useCallback(
    (e, optionName) => {
      const { value } = e.target;
      dispatch(reduxAction("SET_COMPANY_NAME", optionName));
      dispatch(reduxAction("GET_REPORT_BY_COMPANY_ID", value));
    },
    [dispatch]
  );
  return (
    <Select
      data={companies}
      valueKey="company_id"
      textKey="company_name"
      idKey="company_id"
      onChange={onChange}
    />
  );
});

const SearchCoporate = memo(() => {
  return <Search />;
});

const Action = memo(() => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(reduxAction("LOGOUT"));
  };
  return (
    <div className="home__action">
      <span>
        Signed in as
        <strong>mgameltd</strong>
      </span>
      <Line />
      <span className="text_underline" onClick={handleLogout}>
        Logout
      </span>
      <Line />
      <span>
        <a href="https://partner.steampowered.com/dir.php">Mega Site Map</a>
      </span>
      <Line />
      <span>View as:</span>
      <SelectCompany />
      <span>Search</span>
      <SearchCoporate />
    </div>
  );
});
const ReportCompanyName = memo(() => {
  const { company_name } = useSelector(makeSelectCompany);
  return <ReportName name={company_name} />;
});
const Content = memo(() => {
  const reports = useSelector(makeSelectReports);

  console.log("reports", reports);
  return (
    <div className="home__content">
      <ReportCompanyName />
      <div className="home__content__intro">
        Payments are made by the 30th of the month <i>following</i> sales. By
        the time payment is received, the monthly reports are published and
        available to be viewed.{" "}
        <a href="https://partner.steamgames.com/doc/finance/payments_salesreporting/faq#payments">
          More info
        </a>
      </div>
      <div className="home__content__list-report">
        {Object.keys(reports).map((year, index) => {
          return <ReportForYear key={index} year={year} data={reports[year]} />;
        })}
      </div>
    </div>
  );
});
const Home = memo(() => {
  return (
    <section className="home">
      <Header />
      <Action />
      <Content />
    </section>
  );
});
export default Home;
