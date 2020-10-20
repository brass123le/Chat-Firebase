import { auth, providerGoogle } from "../../util/firebase";
import { typeName } from "../../util/typeName";

export const detectarUsuario = () => async (dispatch) => {
  await auth.onAuthStateChanged((user) => {
    dispatch({
      type: typeName.user_obtener,
      payload: {
        uid: user.uid,
        email: user.email,
        name: user.displayName,
        estado: true,
      },
    });
  });
  
};

export const ingresarUsuario = () => async (dispatch) => {
  await auth.signInWithPopup(providerGoogle);
  dispatch(detectarUsuario());
};

export const logoutUsuario = () => async (dispatch) => {
  await auth.signOut();
  dispatch({ type: typeName.user_logaut });
};
