import React from "react";
import { Provider } from "react-redux";
import { Home } from "./layouts/Home";
import { store } from "./redux/store";
import 'react-awesome-slider/dist/styles.css';

export const App = () => {
  return (
    <div>
      <Provider store={store}>
        <Home />
      </Provider>
    </div>
  );
};
