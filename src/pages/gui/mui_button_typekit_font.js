import React from "react"
import Layout from "../../components/layout"
// GATSBY
import { Link } from "gatsby"

// MATERIAL UI
// function Mui
import { createMuiTheme, withStyles } from "@material-ui/core/styles"
// Component Mui
import Button from "@material-ui/core/Button"
import { ThemeProvider } from "@material-ui/core/styles"

// https://www.gatsbyjs.com/docs/using-web-fonts/
// if id is define in .env look https://www.gatsbyjs.com/docs/environment-variables/  for the deployment and build part
// set the secret on netlify or in your github project setting

// https://www.gatsbyjs.com/docs/gatsby-link/

const theme = createMuiTheme({
  typography: {
    fontFamily: "Malaga, serif",
    // fontFamily: "Metalista-web, serif",
    fontSize: 20,
  },
})

// https://material-ui.com/components/buttons/
const SuperButton = withStyles({
  root: {
    boxShadow: "none",
    textTransform: "none",
    fontSize: 30,
    padding: "6px 12px",
    border: "10px solid",
    lineHeight: 1.5,
    backgroundColor: "rgba(255,0,0,1)",
    borderColor: "rgba(0,0,0,1)",
    fontWeight: "800",
    fontStyle: "italic",
    fontFamily: [
      "Malaga",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:hover": {
      backgroundColor: "rgba(255,0,0,0.5)",
      borderColor: "rgba(0,0,0,1)",
      boxShadow: "none",
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: "rgba(255,0,0,0.25)",
      borderColor: "rgba(0,0,0,1)",
    },
    "&:focus": {
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
    },
  },
})(Button)

export default function MUISimple() {
  return (
    <div>
      <Layout
        title="Material UI: Button setting with Typekit font"
        link="false"
      ></Layout>
      <ThemeProvider theme={theme}>
        <Link to="/">
          <Button
            variant="contained"
            color="primary"
            fullWidth="true"
            textTransform="none"
          >
            Quick Button alltime in upper case to back home
          </Button>
        </Link>
      </ThemeProvider>
      <Link to="/">
        <SuperButton variant="contained" color="primary" fullWidth="true">
          Button make with passion to back home
        </SuperButton>
      </Link>
    </div>
  )
}
