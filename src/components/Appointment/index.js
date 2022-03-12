import React from "react";
import Header from "./Header";
import Empty from "./Empty";
import Show from "./Show";
import Form from "./Form";
import Status from "./Status";
import Confirm from "./Confirm";
import Error from "./Error";

import { useVisualMode } from "hooks/useVisualMode";

import "components/Appointment/styles.scss";

export default function Appointment(props) {
  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";
  const SAVING = "SAVING";
  const DELETING = "DELETING";
  const CONFIRM = "CONFIRM";
  const EDIT = "EDIT";
  const ERROR_SAVE = "ERROR_SAVE";
  const ERROR_DELETE = "ERROR_DELETE";
  const ERROR_NO_INTERVIEWER = "ERROR_NO_INTERVIEWER";
  const ERROR_NO_NAME = "ERROR_NO_NAME";

  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  const save = (name, interviewer) => {
    if (interviewer === null) {
      transition(ERROR_NO_INTERVIEWER, true);
      return;
    }
    if (name === "") {
      transition(ERROR_NO_NAME, true);
      return;
    }
    const interview = {
      student: name,
      interviewer,
    };

    transition(SAVING);

    props
      .bookInterview(props.id, interview)
      .then(() => {
        transition(SHOW);
      })
      .catch((error) => {
        console.log(error);
        transition(ERROR_SAVE, true);
      });
  };

  const deleteAppointment = () => {
    transition(DELETING, true);

    props
      .cancelInterview(props.id)
      .then(() => {
        transition(EMPTY);
      })
      .catch((error) => {
        console.log(error);
        transition(ERROR_DELETE, true);
      });
  };

  return (
    <article className="appointment">
      <Header time={props.time} />
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === SHOW && (
        <Show
          student={props.interview.student}
          interviewer={props.interview.interviewer.name}
          onDelete={() => transition(CONFIRM)}
          onEdit={() => transition(EDIT)}
        />
      )}
      {mode === CREATE && (
        <Form interviewers={props.interviewers} onCancel={back} onSave={save} />
      )}
      {mode === EDIT && (
        <Form
          interviewers={props.interviewers}
          student={props.interview.student}
          interviewer={props.interviewers.id}
          onCancel={back}
          onSave={save}
        />
      )}
      {mode === SAVING && <Status message="Saving..." />}
      {mode === DELETING && <Status message="Deleting..." />}
      {mode === CONFIRM && (
        <Confirm
          message="Are you sure you would like to delete?"
          onCancel={back}
          onConfirm={deleteAppointment}
        />
      )}
      {mode === ERROR_SAVE && (
        <Error message="Could not save due to an error" onClose={back} />
      )}
      {mode === ERROR_DELETE && (
        <Error message="Could not delete due to an error" onClose={back} />
      )}
      {mode === ERROR_NO_INTERVIEWER && (
        <Error
          message="Cannot create an appointment without an interviewer selected"
          onClose={back}
        />
      )}
      {mode === ERROR_NO_NAME && (
        <Error
          message="Cannot create an appointment without a name"
          onClose={back}
        />
      )}
    </article>
  );
}
