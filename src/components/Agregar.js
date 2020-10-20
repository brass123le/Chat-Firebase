import React, { useState } from "react";
import { Button, Grid, makeStyles, TextField } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { agregarChat } from "../redux/aciones/chat";

const useStyles = makeStyles((theme) => ({
  formulario: {
    marginTop: theme.spacing(),
  },
}));

export const Agregar = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [msg, setMsg] = useState("");
  const handlerSubmit = (e) => {
    e.preventDefault();

    dispatch(agregarChat({ msg }));
    setMsg("");
  };
  return (
    <div className={classes.formulario}>
      <form className={classes.form} onSubmit={handlerSubmit}>
        <Grid container>
          <Grid item sm={10} xs={10}>
            <TextField
              label="Mensajes"
              variant="filled"
              fullWidth
              value={msg}
              onChange={(e) => {
                setMsg(e.target.value);
              }}
            />
          </Grid>
          <Grid item sm={2} xs={2} m={5}>
            <Button type="submit" fullWidth disabled={!msg}>
              Enviar
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};
