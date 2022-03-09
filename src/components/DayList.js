import React from "react";

import DayListItem from "./DayListItem";

export default function DayList(props) {
  return (
    <ul>
      {props.days.map((day) => (
        <DayListItem
          key={day.id}
          name={day.name}
          spots={day.spots}
          selected={day.name === props.value}
          setDay={props.setDay} // setDay is a function that is passed in as a prop from the parent component (Application) and is called when the li is clicked on.
        />
      ))}
    </ul>
  );
}
