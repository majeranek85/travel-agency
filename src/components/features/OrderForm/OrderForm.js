import React from 'react';
import PropTypes from 'prop-types';
//import styles from './OrderForm.scss';

import {Row, Col, Grid} from 'react-flexbox-grid';

import OrderSummary from '../OrderSummary/OrderSummary';
import pricing from '../../../data/pricing.json';
import OrderOption from '../OrderOption/OrderOption';

const OrderForm = ({cost, options, setOrderOption}) => (
  <Grid>
    <Row>
      {pricing.map(opt => (
        <Col md={4} key={opt.id} >
          <OrderOption {...opt} currentValue={options[opt.id]} setOrderOption={setOrderOption} />
        </Col>
      )
      )}
      <Col xs={12}>
        <OrderSummary cost={cost} options={options} />
      </Col>
    </Row>
  </Grid>
);


OrderForm.propTypes = {
  cost: PropTypes.node,
  options: PropTypes.object,
  setOrderOption: PropTypes.func,
};

export default OrderForm;