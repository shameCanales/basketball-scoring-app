export default function ShotClockButton({label, handleClick}) {
  return (
    <button
      className="bg-stone-50 text-stone-800 px-8 py-4 font-bold m-8 rounded-xs"
      onClick={handleClick}
    >
      {label}
    </button>
  );
}
