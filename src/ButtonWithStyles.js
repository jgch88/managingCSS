import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/styles';

const styles = {
  buttonWithStyle: {
    backgroundColor: "#61dafb"
  }
}

const ButtonWithStylesHOC = (props) => {
  const { classes } = props;
  return <Button className={ classes.buttonWithStyle }>HOC</Button>;
}

export default withStyles(styles)(ButtonWithStylesHOC);
