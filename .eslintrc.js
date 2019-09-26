module.exports = {
  extends: ["react-app", "prettier"],
  plugins: ["prettier", "react-hooks"],
  rules: {
    "prettier/prettier": [
      "error",
      {
        singleQuote: false,
        trailingComma: "none"
      }
    ],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn"
  },
  env: {
    es6: true
  }
};
