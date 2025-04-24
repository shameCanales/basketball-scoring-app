import Button from "./Button.jsx";

export default function Team({
  teamColor,
  teamName,
  teamScore,
  onHandleClick,
}) {
  let color = teamColor === "blue" ? "bg-blue-800" : "bg-red-500";

  return (
    <>
      <div className={`team ${color} p-4 text-xs`}>
        <p className="teamName font-bold uppercase font-[montserrat]">{teamName}</p>
        <h2 className="score text-5xl font-bold mt-4 mb-6">{teamScore}</h2>

        <div className="scorebuttons">
          <Button team={teamName} point={1} onHandleClick={onHandleClick} />
          <Button team={teamName} point={2} onHandleClick={onHandleClick} />
          <Button team={teamName} point={3} onHandleClick={onHandleClick} />
        </div>
      </div>
    </>
  );
}
