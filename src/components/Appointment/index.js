import React from "react";

import Header from "./Header";

import "components/Appointment/styles.scss";

export default function Appointment(props) {
  return (
    <article className="appointment" data-testid="appointment">
      <header className="appointment__header">
        <h3 className="text--regular">No appointments</h3>
        <h3 className="text--light">{props.time}</h3>
      </header>
    </article>
  );
}
