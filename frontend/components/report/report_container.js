import { connect } from 'react-redux';
import { fetchReport } from '../../actions/report_actions';
import Report from './report';

const mapStateToProps = ( { report } ) => {
  return report.total ? { report: report } : {};
};

const mapDispatchToProps = ( dispatch, { location } ) => ({
  fetchReport: params => dispatch(fetchReport(params))
});

export default connect (
  mapStateToProps,
  mapDispatchToProps
) (Report);
