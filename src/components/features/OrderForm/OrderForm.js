import React from 'react';
import PropTypes from 'prop-types';
//import styles from './OrderForm.scss';

import {Row, Col, Grid} from 'react-flexbox-grid';

import OrderSummary from '../OrderSummary/OrderSummary';
import pricing from '../../../data/pricing.json';
import OrderOption from '../OrderOption/OrderOption';
import Button from '../../common/Button/Button';
import settings from '../../../data/settings';
import {formatPrice} from '../../../utils/formatPrice';
import {calculateTotal} from '../../../utils/calculateTotal';

const sendOrder = (options, tripCost) => {
  const totalCost = formatPrice(calculateTotal(tripCost, options));

  const payload = {
    ...options,
    totalCost,
  };

  const url = settings.db.url + '/' + settings.db.endpoint.orders;

  const fetchOptions = {
    cache: 'no-cache',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  };

  fetch(url, fetchOptions)
    .then(function(response){
      return response.json();
    }).then(function(parsedResponse){
      console.log('parsedResponse', parsedResponse);
    });
};

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
      <Button onClick={() => sendOrder(options, cost)}>Order now!</Button>
    </Row>
  </Grid>
);


OrderForm.propTypes = {
  cost: PropTypes.node,
  options: PropTypes.object,
  setOrderOption: PropTypes.func,
};

export default OrderForm;