import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Quote.css";
import { fetchQuote, selectQuote } from "./QuoteSlice";

import ClipLoader from "react-spinners/ClipLoader";

export const Quote = () => {
  const quote = useSelector(selectQuote).quote;

  const dispatch = useDispatch();

  useEffect(() => {
    if (quote === undefined) {
      dispatch(fetchQuote());
    }
  }, [dispatch, quote]);

  let text = "";
  let author = "";

  if (quote !== undefined && quote.hasOwnProperty("success")) {
    text = quote.contents.quotes[0].quote;
    author = quote.contents.quotes[0].author;
  }

  if (quote !== undefined && quote.hasOwnProperty("error")) {
    text =
      "The last time doesn't exist. It's only this time. And everything is going to be different this time. There's only now.";
    author = "Bill Murray";
  }

  return quote === undefined ? (
    <div className="Quote">
      {" "}
      <ClipLoader size={70} color="white" />
    </div>
  ) : (
    <div className="Quote">
      <h4>"{text}"</h4>
      <h5>{author}</h5>
    </div>
  );
};