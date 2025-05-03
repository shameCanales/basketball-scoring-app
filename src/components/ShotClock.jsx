import { useSelector, useDispatch } from "react-redux";
import { startShotclock, stopShotclock } from "../store/shotclockThunks";
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
      <button
        className="bg-stone-50 text-stone-800 px-8 py-4 font-bold m-8 rounded-xs"
        onClick={handleStartShotclock}
      >
        START
      </button>
    </div>
  );
}
