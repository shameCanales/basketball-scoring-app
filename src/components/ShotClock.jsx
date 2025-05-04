import { useSelector, useDispatch } from "react-redux";
import {
  startShotclock,
  stopShotclock,
  pauseShotclock,
} from "../store/shotclockThunks";
import ShotClockButton from "./shotclockButton";
// import { useEffect } from "react";

export default function ShotClock() {
  const dispatch = useDispatch();
  const shotclockTime = useSelector((state) => state.shotclock.time);
  const shootingTeam = useSelector((state) => state.shotclock.shootingTeam);

  const handleStartShotclock = () => {
    dispatch(startShotclock());
    return () => {
      dispatch(stopShotclock()); // Stop the shot clock when the component unmounts
    };
  };

  const handlePauseShotclock = () => {
    dispatch(pauseShotclock());
    console.log("pause");
  };

  const handleSwitchTeam = () => {
    dispatch(stopShotclock());
    dispatch(startShotclock());
  };

  // useEffect(() => {
  //   dispatch(startShotclock()); // Start the shot clock when the component mounts
  //   return () => {
  //     dispatch(stopShotclock());
  //   };
  // }, [dispatch]);

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
