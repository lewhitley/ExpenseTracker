import { receiveReport, FETCH_REPORT } from '../actions/report_actions';
import { fetchReport } from '../util/report_api_util';

export default ({getState, dispatch}) => next => action => {
  const successCallback = report => dispatch(receiveReport(report));

  switch(action.type){
    case FETCH_REPORT:
      fetchReport(action.params, successCallback);
      return next(action);
    default:
      return next(action);
  }
};
