import {MuiThemeProvider, createMuiTheme} from 'material-ui/styles';


const theme = createMuiTheme({
  primary: {
    light: '#39796b',
    main: '#004d40',
    dark: '00251a',
    contrastText: '#FFF',
  },
  secondary: {
    light: "#ffff6b",
    main: "#fdd835",
    dark: "#c6a700",
    contrastText: '#000'
  },
})

export default theme;