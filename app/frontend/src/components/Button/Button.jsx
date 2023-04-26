import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

function Button(props) {
  const { onClick, label } = props;

  return (
    <button className={styles.c_button} type="button" onClick={onClick}>
      {label}
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};

export default Button;