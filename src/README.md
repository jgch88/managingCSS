# Experiments

1. Deleting index.css breaks node_modules/css-loader/
2. One way to globally theme all Mui components is to wrap them in a ThemeProvider, and customise a theme created by createMuiTheme. [example](https://github.com/mui-org/material-ui/tree/master/examples/create-react-app/src)
3. Using withStyles() and a Higher Order Component. [example](https://material-ui.com/styles/basics/)
**Unexpected behavior: Putting the withStyles HOC outside the ThemeProvider causes the ThemeProvider's theme to mess up**

e.g.

        <ThemeProvider theme={theme}>
          <Button variant="contained" color="primary">ThemeProvider Button</Button>
          <ButtonWithStyles>withStyles Button</ButtonWithStyles>
        </ThemeProvider>

and 

        <ThemeProvider theme={theme}>
          <Button variant="contained" color="primary">ThemeProvider Button</Button>
        </ThemeProvider>
        <ButtonWithStyles>withStyles Button</ButtonWithStyles>

