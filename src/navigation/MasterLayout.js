import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import NavAppBar from './NavAppBar';
import NavDrawer from './NavDrawer';
import NavContent from './NavContent';

const styles = {
  root: {
    flexGrow: 1,
    zIndex: 1,
    overflow: 'hidden',
    display: 'flex',
  },
};

const propTypes = {
  classes: PropTypes.shape({
    root: PropTypes.string.isRequired,
  }).isRequired,
};

function MasterLayout(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <NavAppBar />
      <NavDrawer />
      <NavContent />
    </div>
  );
}
MasterLayout.propTypes = propTypes;

export default withStyles(styles)(MasterLayout);
