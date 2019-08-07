import React from 'react';
import Button from '@material-ui/core/Button';
import { styled } from '@material-ui/styles';
import './App.css';

const StyledComponentButton = styled(Button)({
  backgroundColor: "#61dafb"
});

export default function ButtonStyledComponent(props) {
  return <>
    <a href="/" className="App-link">test</a>
    <StyledComponentButton>StyledComponent Button {props.someProps}</StyledComponentButton>
  </>
}
