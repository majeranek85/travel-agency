import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderSummary.scss';
import {calculateTotal} from '../../../utils/calculateTotal';
import {formatPrice} from '../../../utils/formatPrice';

//import {Row, Col, Grid} from 'react-flexbox-grid';

class OrderSummary extends React.Component {

  render() {
    const {cost, options} = this.props;
    return (
      <h2 className={styles.component}>
        Total:
        <strong>
          ${calculateTotal(formatPrice(cost), options)}
        </strong>
      </h2>
    );
  }
}

OrderSummary.propTypes = {
  cost: PropTypes.string,
  options: PropTypes.object,
};

export default OrderSummary;