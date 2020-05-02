import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import styles from './TripSummary.scss';
import {Col} from 'react-flexbox-grid';
import {parseOptionPrice} from '../../../utils/parseOptionPrice';
import {formatPrice} from '../../../utils/formatPrice';
import {promoPrice} from '../../../utils/promoPrice';

const TripSummary = ({id, image, name, cost, days, tags, discount}) => (
  <Col xs={12} sm={6} lg={4} className={styles.column}>
    <Link to={`/trip/${id}`} className={styles.link}>
      <article className={styles.component}>
        <img src={image} alt={name} />
        <h3 className={styles.title}>{name}</h3>
        <div className={styles.details}>
          <span>{days} days</span>
          <span>from {formatPrice(promoPrice(cost, discount))}</span>
          <span> Standard price: {formatPrice(parseOptionPrice(cost).value)}</span>
        </div>
        {tags == false ? null :(
          <div className={styles.tags}>
            {tags.map(tag => (
              <span className={styles.tag} key={tag.toString()}>{tag}</span>
            ))}
          </div>
        )}
      </article>
    </Link>
  </Col>
);

TripSummary.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  image: PropTypes.string,
  name: PropTypes.string,
  intro: PropTypes.string,
  cost: PropTypes.string,
  days: PropTypes.number,
  tags: PropTypes.array,
  discount: PropTypes,
};

export default TripSummary;
