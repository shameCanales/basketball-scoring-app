import Button from "./Button.jsx";
import { scoreActions } from "../store/score-slice.js";
import { useDispatch, useSelector } from "react-redux";

export default function Team({ teamColor, teamName, teamScore }) {
  const dispatch = useDispatch();
  const activeTeam = useSelector((state) => state.shotclock.shootingTeam);
  let color = teamColor === "blue" ? "bg-blue-800" : "bg-red-500";
  let activeIndicator = activeTeam === teamName && "border-8 rounded-2xl";

  const handleIncrement = (point) => {
    dispatch(scoreActions.increment({ team: teamName, point: point }));
  };

  return (
    <>
      <div className={`team ${color}  p-4 text-xs ${activeIndicator}`}>
        <p className="teamName font-bold uppercase font-[montserrat]">
          {teamName}
        </p>
        <h2 className="score text-5xl font-bold mt-4 mb-6">{teamScore}</h2>

        <div className="scorebuttons">
          <Button
            team={teamName}
            point={1}
            onHandleClick={() => handleIncrement(1)}
          />
          <Button
            team={teamName}
            point={2}
            onHandleClick={() => handleIncrement(2)}
          />
          <Button
            team={teamName}
            point={3}
            onHandleClick={() => handleIncrement(3)}
          />
        </div>
      </div>
    </>
  );
}
