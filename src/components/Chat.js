import React, { useEffect, useRef } from "react";
import {
 
  Box,
  Chip,
  Divider,
  Grid,
  makeStyles,
  
} from "@material-ui/core";
import { Agregar } from "./Agregar";
import { useDispatch, useSelector } from "react-redux";
import { obtenerChat } from "../redux/aciones/chat";
import { map } from "lodash";
import { Face } from "@material-ui/icons";
const useStyles = makeStyles((theme) => ({
  box: {
    height: "60vh",
    overflow: "scroll",
  },
  mensaje: {
    fontSize: "calc(1em + 1vw);",
  },
}));

export const Chat = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { user, chat } = useSelector((state) => state);
  const scrollPersonal = useRef(null);

  useEffect(() => {
    dispatch(obtenerChat());
  }, [dispatch]);

  useEffect(() => {
    scrollPersonal.current.scrollTop = scrollPersonal.current.scrollHeight;
  }, [scrollPersonal, chat.mensage]);
  return (
    <>
      <Box
        color="primary"
        border={2}
        mb={2}
        p={2}
        className={classes.box}
        ref={scrollPersonal}
      >
        {map(chat.mensage, (text) =>
          text.uid !== user.usuario.uid ? (
            <Grid container key={text.id}>
              <Chip label={text.msg} icon={<Face   />} color="secondary" />
            </Grid>
          ) : (
            <Grid container justify="flex-end" key={text.id}>
              <Chip label={text.msg} icon={<Face />}  color="primary" />
            </Grid>
          )
        )}
      </Box>
      <Divider />

      <Agregar />
    </>
  );
};
