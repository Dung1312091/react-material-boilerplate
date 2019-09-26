import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { IntlProvider } from "react-intl";

import { makeSelectLocale } from "./selectors";

export function LanguageProvider(props) {
  return (
    <IntlProvider
      locale={props.locale}
      key={props.locale}
      messages={props.messages[props.locale]}>
      {props.children}
    </IntlProvider>
  );
}

LanguageProvider.propTypes = {
  locale: PropTypes.string,
  messages: PropTypes.object,
  children: PropTypes.element.isRequired
};

const mapStateToProps = createStructuredSelector({
  locale: makeSelectLocale
});
export default connect(mapStateToProps)(LanguageProvider);
