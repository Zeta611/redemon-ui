const sketches = new Map<string, string>();
sketches.set(
  "Counter",
  `<div className="flex flex-col items-center gap-1">
  <div className="text-lg font-semibold">{0}</div>
  <div className="flex gap-2">
    <button
      className="rounded border-none bg-red-200 px-2 py-1 font-bold text-red-700"
      onClick={$0}
    >
      -
    </button>
    <button
      className="rounded border-none bg-green-200 px-2 py-1 font-bold text-green-700"
      onClick={$1}
    >
      +
    </button>
  </div>
</div>`,
);

sketches.set(
  "Text setter",
  `<div className="flex flex-col items-center gap-2">
  <div className="text-lg font-semibold"></div>
  <button
    className="rounded border-none bg-stone-500 px-2 py-1 text-white"
    onClick={$0}
  >
    Set text
  </button>
  <input
    type="text"
    value=""
    onChange={$1}
    className="w-16 rounded border border-stone-300 px-2 py-1 text-center focus:border-transparent focus:ring-2 focus:ring-orange-300 focus:outline-none"
  />
</div>`,
);

sketches.set(
  "Todo list",
  `<div className="flex flex-col gap-3">
  <div className="font-semibold text-lg text-center">Research TODOs</div>
  <div className="flex gap-1">
    <input
      type="text"
      className="border border-stone-300 p-2 rounded"
      value=""
      onChange={$1}
    />
    <button
      className="border-none bg-orange-500 text-white px-4 py-2 rounded"
      onClick={$0}
    >
      +
    </button>
  </div>
  <ol className="m-0 pl-2 flex flex-col gap-2">
    <li className="flex gap-2">
      <span className="flex-1">UIST submission</span>
      <button
        className="p-1.5 border-none bg-green-200 text-green-700 rounded"
        onClick={$3}
      >
        Done
      </button>
    </li>
  </ol>
</div>`,
);

export default sketches;
