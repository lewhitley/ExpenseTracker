import React from 'react';
import { Link } from 'react-router';
import { reportArray } from '../../reducers/selectors/report_selectors';

class Report extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      startDate: "",
      endDate: ""
    };

    this.reportForm = this.reportForm.bind(this);
    this.reportShow = this.reportShow.bind(this);
    this.getReport = this.getReport.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  getReport() {
    this.props.fetchReport(this.state);
  }

  reportForm() {
    return (
      <form>
        Start Date <input type='date' value={this.state.startDate}
          onChange={this.update("startDate")} />
        <br />
        End Date <input type='date' value={this.state.endDate}
          onChange={this.update("endDate")} />
        <br />
        <button onClick={this.getReport}>Run Report</button>
      </form>
    );
  }

  reportWeek(week) {
    debugger;
    return (
      <div className='week-summary'>
        Week from { week.start_date } to { week.end_date }
        <ul className='report-expense-index'>
          {reportArray(week.expenses).map( (expense, idx) => (
            <Link to={'/expenses/'+expense.id} key={idx}>
              <li className='expense-item'>
                { expense.amount }
                { expense.description }
              </li>
            </Link>
          ))}
        </ul>
        Weekly Total: {week.total}
      </div>
    );
  }

  reportShow() {
    if (this.props.report) {
      return (
        <section>
          <div className='report-summary'>
            Expenses between { this.props.report.start_date } and { this.props.report.end_date }
            <br />
            Total spent: { this.props.report.total }
          </div>
          <br />
          { this.props.report.weeks.map(week => this.reportWeek(week)) }
        </section>
      );
    }
  }

  render() {
    return (
      <div>
        { this.reportForm() }
        <br />
        { this.reportShow() }
      </div>
    );
  }
}

export default Report;
