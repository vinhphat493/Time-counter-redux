import React, { Component } from "react";
import Header from "../component/Header/Header";
import Timers from "../component/Timers/Timers";
import Button from "../component/Button/Button";

import { store } from "../redux/store";
import { changeCounterTime } from "../redux/actions";

import "./CounterContainer.css";
class Counter extends Component {
  constructor(props) {
    super(props);
    const state = store.getState();
    this.state = {
      ...state,
      couter: null,
    };
  }

  componentDidMount() {
    this.setState({ couter: this.setAutoCounter() });
  }

  setAutoCounter = () => {
    const interval = setInterval(() => {
      const payload = this.increaseCounter();
      store.dispatch(changeCounterTime(payload));
    }, 1000);
    return interval;
  };

  decreaseCounter = () => {
    const { days, hours, minutes, seconds } = store.getState();
    let updateSec = seconds - 1;
    let updateMin = minutes;
    let updateHour = hours;
    let updateDay = days;
    if (updateSec < 0) {
      updateSec = 59;
      updateMin = minutes - 1;
      if (updateMin < 0) {
        updateMin = 59;
        updateHour = hours - 1;
        if (updateHour < 0) {
          updateHour = 0;
          updateDay = days - 1 < 0 ? 0 : days - 1;
        }
      }
    }
    return {
      ...store.getState(),
      days: updateDay,
      hours: updateHour,
      minutes: updateMin,
      seconds: updateSec,
    };
  };

  increaseCounter = () => {
    const { days, hours, minutes, seconds } = store.getState();
    let updateSec = seconds + 1;
    let updateMin = minutes;
    let updateHour = hours;
    let updateDay = days;
    if (updateSec > 59) {
      updateSec = 0;
      updateMin = minutes + 1;
      if (updateMin > 59) {
        updateMin = 0;
        updateHour = hours + 1;
        if (updateHour > 23) {
          updateHour = 0;
          updateDay = days + 1;
        }
      }
    }
    return {
      ...store.getState(),
      days: updateDay,
      hours: updateHour,
      minutes: updateMin,
      seconds: updateSec,
    };
  };

  changeCouter = (e) => {
    if (this.state.couter) {
      clearInterval(this.state.couter);
    }
    const typeBtn = e.target.dataset.type;
    let payload;
    switch (typeBtn) {
      case "increase":
        payload = this.increaseCounter();
        break;
      case "decrease":
        payload = this.decreaseCounter();
        break;
      default:
        break;
    }
    store.dispatch(changeCounterTime(payload));
  };

  render() {
    return (
      <div className="Counter">
        <Header />
        <Timers infoTimer={store.getState()} />
        <div style={{ textAlign: "center" }}>
          <Button clicked={this.changeCouter} type={"increase"}>
            increase
          </Button>
          <Button clicked={this.changeCouter} type={"decrease"}>
            decrease
          </Button>
        </div>
      </div>
    );
  }
}

export default Counter;
