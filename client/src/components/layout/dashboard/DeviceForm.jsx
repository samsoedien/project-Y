import React from 'react';
import PropTypes from 'prop-types';

const DeviceForm = ({ name, onChangeCallback, onSubmitCallback }) => {
  const onChange = e => {
    onChangeCallback(e);
  };

  const onSubmit = e => {
    onSubmitCallback(e);
  };

  return (
    <form onSubmit={e => onSubmit(e)}>
      <input
        name="name"
        value={name}
        placeholder="Name"
        onChange={e => onChange(e)}
      />
      <button type="submit" value="Submit">
        Submit
      </button>
    </form>
  );
};

DeviceForm.propTypes = {
  onChangeCallback: PropTypes.func.isRequired,
  onSubmitCallback: PropTypes.func.isRequired,
};

export default DeviceForm;
