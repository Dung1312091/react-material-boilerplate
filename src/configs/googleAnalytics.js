export default {
  trackingId:
    process.env.REACT_APP_API_URL === "production"
      ? "UA-126795631-1"
      : "UA-127661886-1",
  debug: true, //will output additional feedback to the console.
  gaOptions: {
    cookieDomain: "none"
  }
};
