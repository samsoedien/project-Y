import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addDevice } from '../actions/profileActions';

import DeviceForm from '../components/layout/dashboard/DeviceForm';

const DeviceFormContainer = ({ addDevice, history }) => {
  const [formData, setFormData] = useState({
    name: '',
  });

  const { name } = formData;

  const onChangeCallback = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmitCallback = e => {
    e.preventDefault();
    const deviceData = {
      name,
    };
    addDevice(deviceData, history);
  };

  return (
    <DeviceForm
      name={name}
      onChangeCallback={onChangeCallback}
      onSubmitCallback={onSubmitCallback}
    />
  );
};

DeviceFormContainer.propTypes = {
  addDevice: PropTypes.func.isRequired,
};

export default connect(
  null,
  { addDevice },
)(DeviceFormContainer);
