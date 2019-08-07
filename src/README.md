# Experiments

1. Deleting index.css breaks node_modules/css-loader/
2. One way to globally theme all Mui components is to wrap them in a ThemeProvider, and customise a theme created by createMuiTheme. [example](https://github.com/mui-org/material-ui/tree/master/examples/create-react-app/src)
3. Using withStyles() and a Higher Order Component. [example](https://material-ui.com/styles/basics/)
**Unexpected behavior: Putting the withStyles HOC outside the ThemeProvider causes the ThemeProvider's theme to mess up**

e.g. this works!

        <ThemeProvider theme={theme}>
          <Button variant="contained" color="primary">ThemeProvider Button</Button>
          <ButtonWithStyles>withStyles Button</ButtonWithStyles>
        </ThemeProvider>

this works too!

        <ThemeProvider theme={theme}>
          <Button variant="contained" color="primary">ThemeProvider Button</Button>
        </ThemeProvider>
        <ThemeProvider theme={theme}>
          <ButtonWithStyles>withStyles Button</ButtonWithStyles>
        </ThemeProvider>

but this DOESN'T work!

        <ThemeProvider theme={theme}>
          <Button variant="contained" color="primary">ThemeProvider Button</Button>
        </ThemeProvider>
        <ButtonWithStyles>withStyles Button</ButtonWithStyles>

[explanation: Overall, it's simple to recover from this problem by wrapping each Material-UI application with StylesProvider components at the top of their component trees and using a single class name generator shared between them.](https://material-ui.com/getting-started/faq/)
