import React from "react";
import {
  AppBar,
  Button,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { ExitToApp, Accessibility } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { ingresarUsuario, logoutUsuario } from "../redux/aciones/user";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  offset: theme.mixins.toolbar,
  menuButton: {
    marginRight: theme.spacing(),
  },
  title: {
    flexGrow: 1,
  },
}));

export const NavBar = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { usuario } = useSelector((state) => state.user);
  

  return (
    <div className={classes.root}>
      <AppBar position="relative" color="primary" >
        <Toolbar>
          <Typography variant="subtitle1" className={classes.title}>
            {usuario ? usuario?.name : "Default"}
          </Typography>

          {usuario ? (
            <Button
              startIcon={<ExitToApp />}
              onClick={() => dispatch(logoutUsuario())}
            >
              Cerrar
            </Button>
          ) : (
            <Button
              startIcon={<Accessibility />}
              onClick={() => dispatch(ingresarUsuario())}
            >
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
      
    </div>
  );
};
