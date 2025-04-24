export default function Clear({onHandleClick}) {
  return(
    <button onClick={onHandleClick} className="bg-red-500 mt-4 px-8 py-2 rounded shadow-2xl text-neutral-50 hover:bg-red-700 hover:text-neutral-50 transition-all">
      Reset
    </button>
  )
}