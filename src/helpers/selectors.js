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
  // console.log("here");
  // console.log(interviewer.name);
  return {
    student: interview.student,
    interviewer: interviewer,
  };
}

export function getInterviewsForDay(state, day) {
  //console.log("state.day:", state.day); //prints out name of the day
  //console.log("state.days:", state.days); //prints out all the days
  const resultArr = [];
  //console.log("state", state);
  for (const value of state.days) {
    // console.log("state.days", state.days);
    // console.log("value:", value);
    // console.log("value.name:", value.name);
    if (value.name === day) {
      for (const intvw of value.interviewers) {
        // console.log("value.interview:", value.interviewers);
        // console.log("intvw:", intvw);
        if (state.interviewers[intvw]) {
          //console.log("state.interviewers[intvw]:", state.interviewers[intvw]);
          resultArr.push(state.interviewers[intvw]);
        }
      }
    }
  }
  return resultArr;
  //console.log("resultArr:", resultArr);
}
