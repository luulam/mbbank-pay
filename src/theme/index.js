import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

export { default as colors } from "./colors"
export { default as fonts } from "./fonts"
export { default as metric } from "./metric"

export const mediaScreen = {
  xs: "480px",
  sm: "576px",
  // sm: "640px",
  md: "768px",
  lg: "992px",
  xl: "1200px",
  xxl: "1600px",
}

export const spacing = [
  "4px",
  "8px",
  "12px",
  "16px",
  "24px",
  "32px",
  "48px",
  "64px",
  "76px",
  "88px",
]

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
});

export default theme;