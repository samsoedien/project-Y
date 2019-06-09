import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ProfileItem = ({
  profile: {
    user: { _id, name, avatar },
    company,
  },
}) => {
  return (
    <div>
      <h2>{name}</h2>
      {company && <span>at {company}</span>}
    </div>
  );
};

ProfileItem.propTypes = {
  profile: PropTypes.shape({
    user: PropTypes.object,
    company: PropTypes.string,
  }).isRequired,
};

export default ProfileItem;
