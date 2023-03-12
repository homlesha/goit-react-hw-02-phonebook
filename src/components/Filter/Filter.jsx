import React from 'react';
import PropTypes from 'prop-types';

import { Filters } from './Filter.styled';

const Filter = ({ value, onChange }) => {
  return (
    <p>
      Find Contacts by name
      <Filters type="text" value={value} onChange={onChange} />
    </p>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
