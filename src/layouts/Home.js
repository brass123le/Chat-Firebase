
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Chat } from "../components/Chat";
import { NavBar } from "../components/NavBar";
import { SliderPerson } from "../components/SliderPerson";
import { detectarUsuario } from "../redux/aciones/user";

export const Home = () => {
  const dispatch = useDispatch();
  const { usuario } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(detectarUsuario());
  }, [dispatch]);

  return (
    <>
      <NavBar />
      {usuario?.estado ? (
        <Chat />
      ) : (
        <SliderPerson/>
      )}
    </>
  );
};
