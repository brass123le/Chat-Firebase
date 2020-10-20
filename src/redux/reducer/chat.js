import { typeName } from "../../util/typeName";

const initialState = {
  mensage: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case typeName.chat_obtener:
      return { ...state, mensage: payload };

    default:
      return state;
  }
};
