import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/styles';

const styles = {
  buttonWithStyle: {
    backgroundColor: "#61dafb"
  },
  link: {
    color: "#61dafb"
  }
}

const ButtonWithStylesHOC = (props) => {
  const { classes } = props;
  return <>
    <a href="/" className={ classes.link }>test</a>
    <Button className={ classes.buttonWithStyle }>withStyles HOC Button {props.someProps}</Button>
  </>;
}

export default withStyles(styles)(ButtonWithStylesHOC);
