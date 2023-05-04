/* eslint-disable @next/next/no-img-element */
import React, { Fragment } from "react";
import classes from "./MeetupDetail.module.css";

const MeetupDetail = (props) => {
  return (
    <section className={classes.detail}>
      <img src={props.image} alt="image meetup" />
      <h1>{props.title}</h1>
      <h3>{props.content}</h3>
      <p>{props.address}</p>
    </section>
  );
};

export default MeetupDetail;
