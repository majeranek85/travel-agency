import React from 'react';
//import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker-cssmodules.css';

class OrderOptionDate extends React.Component {

  state = {
    startDate: new Date(),
  };

  handleChange = date => {
    this.setState({
      startDate: date,
    });
  };

  render() {
    return (
      <DatePicker
        selected={this.state.startDate}
        onChange={date => this.handleChange(date)}
        dateFormat='dd/MM/yyyy'
        minDate={this.state.startDate}
      />
    );
  }
}

export default OrderOptionDate;