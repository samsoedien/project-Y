import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import {
  Grid,
  Typography,
} from '@material-ui/core';


const styles = theme => ({
  footer: {
    position: 'fixed',
    bottom: 0,
    height: '260px',
    width: '100%',
    zIndex: 0,
    padding: '40px 0',
    backgroundColor: '#2e3131',
    textAlign: 'center',
  },
  footerCopyright: {
    position: 'absolute',
    bottom: '12px',  
    left: '50%',
    transform: 'translateX(-50%)',
  },
  bold: {
    fontSize: '18px',
  }
});

const Footer = ({ classes }) => {
  return (
    <footer className={classes.footer}>

      <Grid container justify="space-evenly">
        <Grid item xs={12} sm={3}>
        </Grid>
      </Grid>
      <div className={classes.footerCopyright}>
        <Typography variant="caption">&copy; {new Date().getFullYear()}, Ansa-Techniek. All rights reserved.</Typography>
        <Typography variant="caption" paragraph>Website created by Samsoedien Design</Typography>
      </div>
    </footer>
  );
};


Footer.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line
};

export default withStyles(styles)(Footer);
