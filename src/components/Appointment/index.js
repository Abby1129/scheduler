import React from "react";

import "components/Appointment/styles.scss";

export default function Appointment(props) {
  return (
    <article className="appointment" data-testid="appointment">
      <header className="appointment__header">
        <h3 className="text--regular">{props.student}</h3>
        <span className="text--light">{props.time}</span>
      </header>
    </article>
  );
}
