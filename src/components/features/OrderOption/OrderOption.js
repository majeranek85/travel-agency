import React from 'react';
import PropTypes from 'prop-types';

import styles from './OrderOption.scss';

class OrderOption extends React.Component {

  render() {
    const {name} = this.props;
    return (
      <div className={styles.component}>
        <h3 className={styles.title}>{name}</h3>
      </div>
    );
  }
}

OrderOption.propTypes = {
  name: PropTypes.string,
};

export default OrderOption;