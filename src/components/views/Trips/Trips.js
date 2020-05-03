import React from 'react';
import PropTypes from 'prop-types';

import TripSummary from '../../features/TripSummary/TripSummary';
import Section from '../../layout/Section/Section';
import PageTitle from '../../common/PageTitle/PageTitle';

import {Grid, Row, Col} from 'react-flexbox-grid';
import TripListOptions from '../../features/TripListOptions/TripListOptionsContainer';

const Trips = ({trips}) => (
  <Section>
    <Grid>
      <Row>
        <Col xs={12}>
          <PageTitle text='All trips' />
          <TripListOptions />
          <Row>
            {trips.length ? trips.map(trip => (
              <TripSummary key={trip.id} {...trip} /*discount={20}*/ />
            )) : (
              <p>Sorry, no results found. Try adjusting the filters.</p>
            )}
          </Row>
        </Col>
      </Row>
    </Grid>
  </Section>
);

Trips.propTypes = {
  trips: PropTypes.arrayOf(PropTypes.object),
  //discount:PropTypes.number,
};

export default Trips;
