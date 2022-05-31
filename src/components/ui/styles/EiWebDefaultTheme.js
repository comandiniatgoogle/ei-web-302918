import { createTheme } from "@material-ui/core/styles";

export default createTheme({
  palette: {
    primary: {
      main: "#228888",
    },
  },
  typography: {
      fontFamily: [
          'Google Sans'
      ].join(','),
      fontSize: 14,
      h1: { fontSize: '7em' },
      h2: { fontSize: '6em' },
      h3: { fontSize: '5em' },
      h4: { fontSize: '4em' },
      h5: { fontSize: '3em' },
      h6: { fontSize: '2em' },      
  }
});
