import React from 'react';
import PropTypes from 'prop-types';
//import styles from './OrderForm.scss';

import {Row, Col, Grid} from 'react-flexbox-grid';

import OrderSummary from '../CountrySummary/OrderSummary';

class OrderForm extends React.Component {

  render() {
    const {cost} = this.props;
    return (
      <Grid>
        <Row>
          <Col xs={12}>
            {/*<PageTitle text='Trip options' />*/}
            <OrderSummary tripCost={cost} />
          </Col>
        </Row>
      </Grid>);
  }
}

OrderForm.propTypes = {
  cost: PropTypes.node,
};

export default OrderForm;