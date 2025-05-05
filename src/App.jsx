import "./App.css";
import Team from "./components/Team";
import Clear from "./components/Clear";
import ShotClock from "./components/ShotClock";
import {  useSelector } from "react-redux";

function App() {
  const shootingTeam = useSelector((state) => state.shotclock.shootingTeam);
  const teamData = useSelector((state) => state.score);

  return (
    <div className="p-6 m-6 rounded-2xl text-center text-neutral-50 bg-gradient-to-tl from-neutral-900 to-neutral-700  ">
      <h1 className=" uppercase font-[Poppins] font-bold mt-4 mb-4 text-base ">
        Simple Basketball Scorer
      </h1>

      <ShotClock />

      <section className="teams rounded-2xl overflow-auto bg-neutral-100 sm:grid sm:grid-cols-2">
        <Team
          teamColor={"blue"}
          teamName={teamData.home.name}
          teamScore={teamData.home.score}
          disabled={shootingTeam !== "home"}
        />

        <Team
          teamColor={"red"}
          teamName={teamData.guest.name}
          teamScore={teamData.guest.score}
          disabled={shootingTeam !== "guest"}
        />
      </section>

      <Clear />
    </div>
  );
}

export default App;
