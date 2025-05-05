import { shotclockActions } from "./shotclock-slice";

let shotclockInterval;

export const startShotclock = () => (dispatch, getState) => {
  clearInterval(shotclockInterval); 

  shotclockInterval = setInterval(() => {
    const { time } = getState().shotclock; 

    if (time > 0) {
      dispatch(shotclockActions.decrementTime()); 
    } else {
      dispatch(shotclockActions.resetTime());
      dispatch(shotclockActions.switchTeam());
    }
  }, 1000);
};

export const stopShotclock = () => (dispatch) => {
  clearInterval(shotclockInterval); 
  dispatch(shotclockActions.resetTime()); 
  dispatch(shotclockActions.switchTeam()); 
};

export const pauseShotclock = () => (dispatch) => {
  clearInterval(shotclockInterval)
}