import React from 'react';
import PropTypes from 'prop-types';

import styles from './OrderOption.scss';

import OrderOptionDropdown from './OrderOptionDropdown';
import OrderOptionIcons from './OrderOptionIcons';
import OrderOptionNumber from './OrderOptionNumber';
import OrderOptionCheckboxes from './OrderOptionCheckboxes';


const optionTypes = {
  dropdown: OrderOptionDropdown,
  icons: OrderOptionIcons,
  checkboxes: OrderOptionCheckboxes,
  number: OrderOptionNumber,
};

const OrderOption = ({name, type, setOrderOption, id, ...otherProps}) => {

  const OptionComponent = optionTypes[type];
  if(!OptionComponent) {
    return null;
  } else {
    return (
      <div className={styles.component}>
        <h3 className={styles.title}>{name}</h3>
        <OptionComponent {...otherProps} setOrderValue={value => setOrderOption({[id]: value})} />
      </div>
    );
  }
};

OrderOption.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  setOrderOption: PropTypes.func,
  id: PropTypes.string,
};

export default OrderOption;