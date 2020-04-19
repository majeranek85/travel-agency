import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker-cssmodules.css';

class OrderOptionDate extends React.Component {

  state = {
    startDate: new Date(),
  };

  handleChange = date => {
    const {setOptionValue} = this.props;
    this.setState({
      startDate: date,
    });
    setOptionValue(date);
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

OrderOptionDate.propTypes = {
  setOptionValue: PropTypes.func,
};

export default OrderOptionDate;