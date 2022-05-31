import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
  },
}));

const EiWebHeader = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <AppBar>
        <Toolbar>
          <Typography variant="h6">EI WEB CONSOLE</Typography>
        </Toolbar>
      </AppBar>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
};

export default EiWebHeader;
