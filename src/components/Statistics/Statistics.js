import React from 'react';
import PropTypes from 'prop-types';
import s from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div>
      <p className={s.text + ' ' + s.good}>Good: {good}</p>
      <p className={s.text}>Neutral: {neutral}</p>
      <p className={s.text + ' ' + s.bad}>Bad: {bad}</p>
      <p className={s.text}>Total: {total}</p>
      <p className={s.text + ' ' + s.good}>
        Positive feedback: {positivePercentage}%
      </p>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
