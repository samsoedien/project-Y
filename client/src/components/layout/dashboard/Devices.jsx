import React from 'react';
import PropTypes from 'prop-types';

const Devices = ({ device }) => {
  const devices = device.map(dev => (
    <tr key={dev._id}>
      <td>{dev.name}</td>
    </tr>
  ));

  return (
    <div>
      <h2>Connected Devices</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>{devices}</tbody>
      </table>
    </div>
  );
};

Devices.propTypes = {
  device: PropTypes.array.isRequired,
};

export default Devices;
