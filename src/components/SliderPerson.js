
import React from "react";
import AwesomeSlider from "react-awesome-slider";
import { makeStyles } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
  slider: {
    height: "83vh",
  },
}));

export const SliderPerson = () => {
  const clasess = useStyles();
  return (
    <AwesomeSlider animation="cubeAnimation" className={clasess.slider}>
      <div data-src="https://cdn.pixabay.com/photo/2018/03/22/02/37/email-3249062_960_720.png" />
      <div data-src="https://cdn.pixabay.com/photo/2017/05/31/23/44/email-marketing-2362038_960_720.png" />
      <div data-src="https://cdn.pixabay.com/photo/2016/06/04/14/56/icon-1435687_960_720.png" />
    </AwesomeSlider>
  );
};
