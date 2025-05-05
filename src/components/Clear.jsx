import { stopShotclock } from "../store/shotclockThunks";
import { useDispatch } from "react-redux";
import { scoreActions } from "../store/score-slice";

export default function Clear({ onHandleClick }) {
  const dispatch = useDispatch();

  const handleReset = () => {
    dispatch(stopShotclock()); // Stop the shot clock when the component unmounts
    dispatch(scoreActions.reset());
  };

  return (
    <button
      onClick={handleReset}
      className="bg-red-500 mt-4 px-8 py-2 rounded shadow-2xl text-neutral-50 hover:bg-red-700 hover:text-neutral-50 transition-all"
    >
      Reset
    </button>
  );
}
