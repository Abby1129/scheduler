export default function getAppointmentsForDay(state, day) {
  const resultArr = [];
  for (const value of state.days) {
    if (value.name === day) {
      for (const appointment of value.appointments) {
        console.log(appointment);
        console.log(state.appointments[appointment]);
        if (state.appointments[appointment]) {
          resultArr.push(state.appointments[appointment]);
        }
      }
    }
  }
  return resultArr;
}
