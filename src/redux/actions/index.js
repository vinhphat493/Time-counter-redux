function changeCounterTime(payload) {
    return {
      type: "CHANGE__COUNTER",
      payload: payload
    };
}

export { changeCounterTime };