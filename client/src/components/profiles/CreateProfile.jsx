import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const CreateProfile = ({
  company,
  onChangeCallback,
  onSubmitCallback,
  createProfile,
  history,
  errors,
}) => {
  const onChange = e => {
    onChangeCallback(e);
  };

  const onSubmit = e => {
    onSubmitCallback(e);
  };

  return (
    <form onSubmit={e => onSubmit(e)} className="">
      <h1>Create Profile</h1>
      <input
        type="text"
        placeholder="Company"
        name="company"
        value={company}
        onChange={e => onChange(e)}
      />
      <button onClick={() => toggleSocialInputs(!displaySocialInputs)}>
        Add Social Networks
      </button>

      {displaySocialInputs && (
        <Fragment>
          <p>Social Networks</p>
          <input
            type="text"
            placeholder="Twitter"
            name="twitter"
            value={twitter}
            onChange={e => onChange(e)}
          />
        </Fragment>
      )}

      <button type="submit">Submit</button>
    </form>
  );
};

CreateProfile.propTypes = {
  company: PropTypes.string.isRequired,
  onChangeCallback: PropTypes.func.isRequired,
  onSubmitCallback: PropTypes.func.isRequired,
  createProfile: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  errors: PropTypes.shape({}).isRequired,
};

export default CreateProfile;
