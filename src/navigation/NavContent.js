import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';

import PageRouter from '../pages/PageRouter';

const styles = theme => ({
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    minWidth: 0,
  },
  toolbar: theme.mixins.toolbar,
});

const propTypes = {
  classes: PropTypes.shape({
    content: PropTypes.string.isRequired,
    toolbar: PropTypes.string.isRequired,
  }).isRequired,
};

function NavContent(props) {
  const { classes } = props;
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <PageRouter />
    </main>
  );
}
NavContent.propTypes = propTypes;

export default withStyles(styles)(NavContent);
