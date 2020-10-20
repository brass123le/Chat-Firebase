import { map } from "lodash";
import { db } from "../../util/firebase";
import { typeName } from "../../util/typeName";

export const obtenerChat = () => async (dispatch) => {
  await db
    .collection("Mensaje")
    .orderBy("date")
    .onSnapshot((query) => {
      let arrayMensaje = [];

      map(query.docs, (doc) => {
        arrayMensaje.push({ ...doc.data(), id: doc.id });
      });
      
      dispatch({ type: typeName.chat_obtener, payload: arrayMensaje });
    });
};

export const agregarChat = ({ msg }) => async (dispatch, getState) => {
  const { usuario } = getState().user;

  await db.collection("Mensaje").add({
    msg,
    date: Date.now(),
    uid: usuario.uid,
  });
};
