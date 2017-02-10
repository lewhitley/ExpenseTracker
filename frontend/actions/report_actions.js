export const RECEIVE_REPORT = "RECEIVE_REPORT";
export const FETCH_REPORT = "FETCH_REPORT";

export const receiveReport = report => ({
  type: RECEIVE_REPORT,
  report
});

export const fetchReport = params => ({
  type: FETCH_REPORT,
  params
});
