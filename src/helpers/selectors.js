export function getAppointmentsForDay(state, day) {
  const resultArr = [];
  for (const value of state.days) {
    if (value.name === day) {
      for (const appointment of value.appointments) {
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
  return {
    student: interview.student,
    interviewer: interviewer,
  };
}

export function getInterviewersForDay(state, day) {
  const resultArr = [];
  for (const value of state.days) {
    if (value.name === day) {
      for (const appointment of value.interviewers) {
        if (state.interviewers[appointment]) {
          resultArr.push(state.interviewers[appointment]);
        }
      }
    }
  }
  return resultArr;
}
