import React from 'react';
import PropTypes from 'prop-types';
//import styles from './OrderForm.scss';


import {Row, Col, Grid} from 'react-flexbox-grid';

import OrderSummary from '../OrderSummary/OrderSummary';

class OrderForm extends React.Component {

  render() {
    const {cost, options} = this.props;
    return (
      <Grid>
        <Row>
          <Col xs={12}>
            <OrderSummary cost={cost} options={options} />
          </Col>
        </Row>
      </Grid>
    );
  }
}

OrderForm.propTypes = {
  cost: PropTypes.node,
  options: PropTypes.object,
};

export default OrderForm;