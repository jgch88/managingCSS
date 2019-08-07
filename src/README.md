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
4. Using StyledComponents
Feels simpler than HOC? Not sure why we would use HOC over Styled components, unless you want to define multiple style classes and compose them within the HOC.

Compare ButtonStyledComponent vs ButtonWithStylesHOC.
5. CSS modules
(TODO: figure out how compose works)



# Appendix

## What is [JSS](https://cssinjs.org/react-jss/?v=v10.0.0-alpha.23)?

A js object that contains css styles via camelCase used by React components. It has the additional benefit of compiling these classnames to prevent css namespace collisions. Sometimes they contain class names (e.g. when used by Mui's makeStyles(), withStyles()), sometimes they don't (e.g. when used by Mui's styled()).

## Should we use a global css file together with some BEM convention and avoid css modules/jss?
Considerations for using a (global index.css)[https://material-ui.com/guides/interoperability/]:

Pros: Reduce duplication, single source of truth

Part 1 - I think the strongest argument against a global index.css file is that the monolithic css becomes difficult to navigate, and scrolling up and down becomes a major pain to "find" the appropriate classes. Using css modules/jss is almost like increasing cohesion of css to its React components.

Part 2 - It's difficult to style a "complex" Mui component that may have many moving parts, e.g. a progress bar or slider bar
(TODO: try to style a "complex" Mui component)
