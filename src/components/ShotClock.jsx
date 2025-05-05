import { useSelector, useDispatch } from "react-redux";
import {
  startShotclock,
  stopShotclock,
  pauseShotclock,
} from "../store/shotclockThunks";
import { shotclockActions } from "../store/shotclock-slice";
import ShotClockButton from "./shotclockButton";

export default function ShotClock() {
  const dispatch = useDispatch();
  const shotclockTime = useSelector((state) => state.shotclock.time);
  const shootingTeam = useSelector((state) => state.shotclock.shootingTeam);

  const handleStartShotclock = () => {
    dispatch(startShotclock());
    return () => {
      dispatch(stopShotclock());
    };
  };

  const handlePauseShotclock = () => {
    dispatch(pauseShotclock());
  };

  const handleSwitchTeam = () => {
    dispatch(shotclockActions.switchTeam());
  };

  return (
    <div>
      <h1 className="text-8xl font-black my-8">{shotclockTime}</h1>
      <p>current team: {shootingTeam}</p>

      <div>
        <ShotClockButton handleClick={handleStartShotclock} label="PLAY" />
        <ShotClockButton handleClick={handlePauseShotclock} label="PAUSE" />
        <ShotClockButton handleClick={handleSwitchTeam} label="SWITCH" />
      </div>
    </div>
  );
}
