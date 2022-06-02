import React, { useState } from "react";
import { MuiThemeProvider } from "@material-ui/core";
import "./App.css";
import EiWebHeader from "./components/ui/header/EiWebHeader";

import defaultTheme from "./components/ui/styles/EiWebDefaultTheme";

const bigQuery = "https://bigquery.googleapis.com/bigquery/v2/projects/228351284416/datasets/dayOffTool/tables/requestType";
const swapi = "https://swapi.dev/api/films/";
const GET_TOKEN = 'ya29.c.b0AXv0zTMyrc6TeA8Zf5eSI55Ol8h_e5yp2yWZ_1vTpVzYnUYnDIMr2Lhw6Ad4ysyNTVhZrsOETKHJfxcbibE6ByuOxDZH120U6yl1hb7ak9OLIHz90JFxyX4cRNvFpkBQoHPGoITy2yXJKXjQI4JqU1tZYUBe8OtuiyeYZ8E7r55SCALdupcpBNMfsB4X5O0WD6PK_yT2bA39ZhZWep38HkRBJT34Vts........................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................'

const options = {
  headers: {
    Authorization: 'Bearer ' + GET_TOKEN,
    Accept: 'application/json'
  }
}

const App = () => {
  const [movies, setMovies] = useState([]);

  const getDataFromBQ = () => {
    console.log("Connection to BQ...");
    fetch(bigQuery, options)
      .then((response) => {
        // response.json();
        console.log( response.json() )
      })
      // .then((data) => {
      //   console.log(data);
      // });
    console.log(movies);
  };

  return (
    <MuiThemeProvider theme={defaultTheme}>
      <EiWebHeader></EiWebHeader>
      <React.Fragment>
        <button onClick={getDataFromBQ}>CONNECT TO BQ</button>
      </React.Fragment>
    </MuiThemeProvider>
  );
};

export default App;
