import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchBackground,
  selectBackground,
  selectCurrentBackground,
} from "./BackgroundSlice";

export const Background = () => {
  const dispatch = useDispatch();
  const background = useSelector(selectBackground);

  useEffect(() => {
    if (!background.length) {
      dispatch(fetchBackground());
    }
  }, [dispatch, background]);

  const currentBackground = useSelector(selectCurrentBackground);

  return (
    <>
      <img
        id="background"
        src={currentBackground}
        alt="Random inspiration background that shows something inspirational"
      />
    </>
  );
};