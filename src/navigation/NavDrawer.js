import React from 'react';
import PropTypes from 'prop-types';
import Drawer from '@material-ui/core/Drawer';
import { withStyles } from '@material-ui/core/styles';

import NavDrawerContent from './NavDrawerContent';

const styles = theme => ({
  drawerPaper: {
    position: 'relative',
    width: 240,
  },
  toolbar: theme.mixins.toolbar,
});

const propTypes = {
  classes: PropTypes.shape({
    drawerPaper: PropTypes.string.isRequired,
    toolbar: PropTypes.string.isRequired,
  }).isRequired,
};

function NavDrawer(props) {
  const { classes } = props;
  return (
    <Drawer
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={classes.toolbar} />
      <NavDrawerContent />
    </Drawer>
  );
}
NavDrawer.propTypes = propTypes;

export default withStyles(styles)(NavDrawer);
