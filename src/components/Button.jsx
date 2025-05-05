export default function Button({ team, point, onHandleClick, disabled }) {
  return (
    <button
      className="bg-amber-50 text-black text-xs font-medium mx-1  p-2 rounded hover:bg-neutral-800 hover:text-neutral-50 shadow-2xl transition-all"
      onClick={() => onHandleClick(team, point)}
      disabled={disabled}
    >
      + {point} Point{point > 1 && "s"}
    </button>
  );
}
