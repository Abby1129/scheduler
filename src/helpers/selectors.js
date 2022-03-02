export function getAppointmentsForDay(state, day) {
  const resultArr = [];
  for (const value of state.days) {
    if (value.name === day) {
      for (const appointment of value.appointments) {
        // console.log(appointment);
        // console.log(state.appointments[appointment]);
        if (state.appointments[appointment]) {
          resultArr.push(state.appointments[appointment]);
        }
      }
    }
  }
  return resultArr;
}

export function getInterview(state, interview) {
  if (!interview) {
    return null;
  }
  const interviewer = state.interviewers[interview.interviewer];
  // console.log(state);
  // console.log("++++++++++++");
  // console.log(state.interviewers);
  // console.log("++++++++++++");
  // console.log(interview);
  // console.log(interview.interviewer);
  // console.log("++++++++++++");
  // console.log(interviewer);

  return {
    student: interview.student,
    interviewer: interviewer,
  };
}
