import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
});

const propTypes = {
  classes: PropTypes.shape({
    appBar: PropTypes.string.isRequired,
  }).isRequired,
};

function NavAppBar(props) {
  const { classes } = props;
  return (
    <AppBar position="absolute" className={classes.appBar}>
      <Toolbar>
        <Typography variant="title" color="inherit" noWrap>
          Its Forms All The Way Down
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
NavAppBar.propTypes = propTypes;

export default withStyles(styles)(NavAppBar);
