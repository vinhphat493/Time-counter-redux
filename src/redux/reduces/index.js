export default (state, action) => {
  switch (action.type) {
    case "CHANGE__COUNTER":
      const { days, seconds, minutes, hours } = action.payload;
      return {
        ...state,
        seconds: seconds,
        minutes: minutes,
        hours: hours,
        days: days
      };
    default:
      return state;
  }
};
