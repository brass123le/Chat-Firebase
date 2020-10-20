import { typeName } from "../../util/typeName";

const initialState = {
  usuario: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case typeName.user_obtener:
      return { ...state, usuario: payload };

      case typeName.user_logaut:
      return { ...state, usuario: null };

    default:
      return state;
  }
};
