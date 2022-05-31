import React from "react";
import { AppBar, Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import EiWebUserConnected from "./EiWebUserConnected";
import EiWebAppTitle from "./EiWebAppTitle";
import EiWebAppLeftMainMenu from "./EiWebAppLeftMainMenu";

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
  },
  avatar: {
    marginLeft: "auto",
    marginRight: "100px",
    width: 55,
    height: 55,
  },
  hamburgerMenu: {
      color: 'white',
      fontWeight: 700
  }
}));

const EiWebHeader = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <AppBar>
        <Toolbar>
          <EiWebAppLeftMainMenu classes={classes}/>
          <EiWebAppTitle />
          <EiWebUserConnected classes={classes} />
        </Toolbar>
      </AppBar>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
};

export default EiWebHeader;
