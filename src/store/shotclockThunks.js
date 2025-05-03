import { shotclockActions } from "./shotclock-slice";

let shotclockInterval;

export const startShotclock = () => (dispatch, getState) => {
  clearInterval(shotclockInterval); // to clear any existing interval po

  shotclockInterval = setInterval(() => {
    const { time } = getState().shotclock; // destructure the time from the state. like shotclock.time

    if (time > 0) {
      dispatch(shotclockActions.decrementTime()); // decrement the time by 1 second
    } else {
      dispatch(shotclockActions.resetTime());
      dispatch(shotclockActions.switchTeam());
    }
  }, 1000);
};

export const stopShotclock = () => (dispatch) => {
  clearInterval(shotclockInterval); // to clear the interval po
  dispatch(shotclockActions.resetTime()); // reset the time to 24 seconds
  dispatch(shotclockActions.switchTeam()); // switch the team po
};
