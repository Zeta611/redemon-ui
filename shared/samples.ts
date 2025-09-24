import { TimelineInfo } from "@/shared/types";

const samples = new Map<string, [string, TimelineInfo[]]>();
samples.set("Counter", [
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
  [
    {
      timeline: [
        {
          TAG: "Action",
          _0: {
            label: {
              TAG: "Label",
              _0: 1,
              _1: null,
            },
            action_type: "Click",
          },
        },
        {
          TAG: "Edit",
          _0: {
            hd: {
              TAG: "Index",
              _0: 0,
            },
            tl: {
              hd: {
                TAG: "Index",
                _0: 0,
              },
              tl: 0,
            },
          },
          _1: {
            TAG: "ConstReplace",
            _0: {
              TAG: "Int",
              _0: 1,
            },
          },
        },
      ],
      snapshots: [
        '<div className="flex flex-col items-center gap-1">\n  <div className="text-lg font-semibold">{0}</div>\n  <div className="flex gap-2">\n    <button\n      className="rounded border-none bg-red-200 px-2 py-1 font-bold text-red-700"\n      onClick={$0}\n    >\n      -\n    </button>\n    <button\n      className="rounded border-none bg-green-200 px-2 py-1 font-bold text-green-700"\n      onClick={$1}\n    >\n      +\n    </button>\n  </div>\n</div>',
        '<div className="flex flex-col items-center gap-1">\n  <div className="text-lg font-semibold">{1}</div>\n  <div className="flex gap-2">\n    <button\n      className="rounded border-none bg-red-200 px-2 py-1 font-bold text-red-700"\n      onClick={$0}\n    >\n      -\n    </button>\n    <button\n      className="rounded border-none bg-green-200 px-2 py-1 font-bold text-green-700"\n      onClick={$1}\n    >\n      +\n    </button>\n  </div>\n</div>',
      ],
    },
    {
      timeline: [
        {
          TAG: "Action",
          _0: {
            label: {
              TAG: "Label",
              _0: 0,
              _1: null,
            },
            action_type: "Click",
          },
        },
        {
          TAG: "Edit",
          _0: {
            hd: {
              TAG: "Index",
              _0: 0,
            },
            tl: {
              hd: {
                TAG: "Index",
                _0: 0,
              },
              tl: 0,
            },
          },
          _1: {
            TAG: "ConstReplace",
            _0: {
              TAG: "Int",
              _0: -1,
            },
          },
        },
      ],
      snapshots: [
        '<div className="flex flex-col items-center gap-1">\n  <div className="text-lg font-semibold">{0}</div>\n  <div className="flex gap-2">\n    <button\n      className="rounded border-none bg-red-200 px-2 py-1 font-bold text-red-700"\n      onClick={$0}\n    >\n      -\n    </button>\n    <button\n      className="rounded border-none bg-green-200 px-2 py-1 font-bold text-green-700"\n      onClick={$1}\n    >\n      +\n    </button>\n  </div>\n</div>',
        '<div className="flex flex-col items-center gap-1">\n  <div className="text-lg font-semibold">{-1}</div>\n  <div className="flex gap-2">\n    <button\n      className="rounded border-none bg-red-200 px-2 py-1 font-bold text-red-700"\n      onClick={$0}\n    >\n      -\n    </button>\n    <button\n      className="rounded border-none bg-green-200 px-2 py-1 font-bold text-green-700"\n      onClick={$1}\n    >\n      +\n    </button>\n  </div>\n</div>',
      ],
    },
  ] as unknown as TimelineInfo[],
]);

samples.set("Text setter", [
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
  [
    {
      timeline: [
        {
          TAG: "Action",
          _0: {
            label: {
              TAG: "Label",
              _0: 1,
              _1: null,
            },
            action_type: "Input",
            arg: "42",
          },
        },
        {
          TAG: "Action",
          _0: {
            label: {
              TAG: "Label",
              _0: 0,
              _1: null,
            },
            action_type: "Click",
          },
        },
        {
          TAG: "Edit",
          _0: {
            hd: {
              TAG: "Index",
              _0: 0,
            },
            tl: 0,
          },
          _1: {
            TAG: "NodeInsert",
            _0: {
              TAG: "Index",
              _0: 0,
            },
            _1: {
              TAG: "Const",
              _0: {
                TAG: "String",
                _0: "42",
              },
            },
          },
        },
        {
          TAG: "Action",
          _0: {
            label: {
              TAG: "Label",
              _0: 1,
              _1: null,
            },
            action_type: "Input",
            arg: "hello, world",
          },
        },
        {
          TAG: "Action",
          _0: {
            label: {
              TAG: "Label",
              _0: 0,
              _1: null,
            },
            action_type: "Click",
          },
        },
        {
          TAG: "Edit",
          _0: {
            hd: {
              TAG: "Index",
              _0: 0,
            },
            tl: {
              hd: {
                TAG: "Index",
                _0: 0,
              },
              tl: 0,
            },
          },
          _1: {
            TAG: "ConstReplace",
            _0: {
              TAG: "String",
              _0: "hello, world",
            },
          },
        },
      ],
      snapshots: [
        '<div className="flex flex-col items-center gap-2">\n  <div className="text-lg font-semibold"></div>\n  <button\n    className="rounded border-none bg-stone-500 px-2 py-1 text-white"\n    onClick={$0}\n  >\n    Set text\n  </button>\n  <input\n    type="text"\n    value=""\n    onChange={$1}\n    className="w-16 rounded border border-stone-300 px-2 py-1 text-center focus:border-transparent focus:ring-2 focus:ring-orange-300 focus:outline-none"\n  />\n</div>',
        '<div className="flex flex-col items-center gap-2">\n  <div className="text-lg font-semibold"></div>\n  <button\n    className="rounded border-none bg-stone-500 px-2 py-1 text-white"\n    onClick={$0}\n  >\n    Set text\n  </button>\n  <input\n    type="text"\n    value=""\n    onChange={$1}\n    className="w-16 rounded border border-stone-300 px-2 py-1 text-center focus:border-transparent focus:ring-2 focus:ring-orange-300 focus:outline-none"\n  />\n</div>',
        '<div className="flex flex-col items-center gap-2">\n  <div className="text-lg font-semibold">\n  42</div>\n  <button\n    className="rounded border-none bg-stone-500 px-2 py-1 text-white"\n    onClick={$0}\n  >\n    Set text\n  </button>\n  <input\n    type="text"\n    value="42"\n    onChange={$1}\n    className="w-16 rounded border border-stone-300 px-2 py-1 text-center focus:border-transparent focus:ring-2 focus:ring-orange-300 focus:outline-none"\n  />\n</div>',
        '<div className="flex flex-col items-center gap-2">\n  <div className="text-lg font-semibold">\n  42</div>\n  <button\n    className="rounded border-none bg-stone-500 px-2 py-1 text-white"\n    onClick={$0}\n  >\n    Set text\n  </button>\n  <input\n    type="text"\n    value="42"\n    onChange={$1}\n    className="w-16 rounded border border-stone-300 px-2 py-1 text-center focus:border-transparent focus:ring-2 focus:ring-orange-300 focus:outline-none"\n  />\n</div>',
        '<div className="flex flex-col items-center gap-2">\n  <div className="text-lg font-semibold">\n  42</div>\n  <button\n    className="rounded border-none bg-stone-500 px-2 py-1 text-white"\n    onClick={$0}\n  >\n    Set text\n  </button>\n  <input\n    type="text"\n    value="42"\n    onChange={$1}\n    className="w-16 rounded border border-stone-300 px-2 py-1 text-center focus:border-transparent focus:ring-2 focus:ring-orange-300 focus:outline-none"\n  />\n</div>',
        '<div className="flex flex-col items-center gap-2">\n  <div className="text-lg font-semibold">\n  hello, world</div>\n  <button\n    className="rounded border-none bg-stone-500 px-2 py-1 text-white"\n    onClick={$0}\n  >\n    Set text\n  </button>\n  <input\n    type="text"\n    value="hello, world"\n    onChange={$1}\n    className="w-16 rounded border border-stone-300 px-2 py-1 text-center focus:border-transparent focus:ring-2 focus:ring-orange-300 focus:outline-none"\n  />\n</div>',
      ],
    },
  ] as unknown as TimelineInfo[],
]);

samples.set("Todo list", [
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
  [
    {
      timeline: [
        {
          TAG: "Action",
          _0: {
            label: {
              TAG: "Label",
              _0: 1,
              _1: null,
            },
            action_type: "Input",
            arg: "Todo 1",
          },
        },
        {
          TAG: "Action",
          _0: {
            label: {
              TAG: "Label",
              _0: 0,
              _1: null,
            },
            action_type: "Click",
          },
        },
        {
          TAG: "Edit",
          _0: {
            hd: {
              TAG: "Index",
              _0: 2,
            },
            tl: 0,
          },
          _1: {
            TAG: "NodeCopy",
            _0: {
              TAG: "Index",
              _0: 0,
            },
          },
        },
        {
          TAG: "Edit",
          _0: {
            hd: {
              TAG: "Index",
              _0: 2,
            },
            tl: {
              hd: {
                TAG: "Index",
                _0: 1,
              },
              tl: {
                hd: {
                  TAG: "Index",
                  _0: 0,
                },
                tl: {
                  hd: {
                    TAG: "Index",
                    _0: 0,
                  },
                  tl: 0,
                },
              },
            },
          },
          _1: {
            TAG: "ConstReplace",
            _0: {
              TAG: "String",
              _0: "Todo 1",
            },
          },
        },
        {
          TAG: "Action",
          _0: {
            label: {
              TAG: "Label",
              _0: 3,
              _1: null,
            },
            action_type: "Click",
          },
        },
        {
          TAG: "Edit",
          _0: {
            hd: {
              TAG: "Index",
              _0: 2,
            },
            tl: 0,
          },
          _1: {
            TAG: "NodeDelete",
            _0: {
              TAG: "Index",
              _0: 0,
            },
          },
        },
      ],
      snapshots: [
        '<div className="flex flex-col gap-3">\n  <div className="font-semibold text-lg text-center">Research TODOs</div>\n  <div className="flex gap-1">\n    <input\n      type="text"\n      className="border border-stone-300 p-2 rounded"\n      value=""\n      onChange={$1}\n    />\n    <button\n      className="border-none bg-orange-500 text-white px-4 py-2 rounded"\n      onClick={$0}\n    >\n      +\n    </button>\n  </div>\n  <ol className="m-0 pl-2 flex flex-col gap-2">\n    <li className="flex gap-2">\n      <span className="flex-1">UIST submission</span>\n      <button\n        className="p-1.5 border-none bg-green-200 text-green-700 rounded"\n        onClick={$3}\n      >\n        Done\n      </button>\n    </li>\n  </ol>\n</div>',
        '<div className="flex flex-col gap-3">\n  <div className="font-semibold text-lg text-center">Research TODOs</div>\n  <div className="flex gap-1">\n    <input\n      type="text"\n      className="border border-stone-300 p-2 rounded"\n      value=""\n      onChange={$1}\n    />\n    <button\n      className="border-none bg-orange-500 text-white px-4 py-2 rounded"\n      onClick={$0}\n    >\n      +\n    </button>\n  </div>\n  <ol className="m-0 pl-2 flex flex-col gap-2">\n    <li className="flex gap-2">\n      <span className="flex-1">UIST submission</span>\n      <button\n        className="p-1.5 border-none bg-green-200 text-green-700 rounded"\n        onClick={$3}\n      >\n        Done\n      </button>\n    </li>\n  </ol>\n</div>',
        '<div className="flex flex-col gap-3">\n  <div className="font-semibold text-lg text-center">Research TODOs</div>\n  <div className="flex gap-1">\n    <input\n      type="text"\n      className="border border-stone-300 p-2 rounded"\n      value="Todo 1"\n      onChange={$1}\n    />\n    <button\n      className="border-none bg-orange-500 text-white px-4 py-2 rounded"\n      onClick={$0}\n    >\n      +\n    </button>\n  </div>\n  <ol className="m-0 pl-2 flex flex-col gap-2">\n    <li className="flex gap-2">\n      <span className="flex-1">UIST submission</span>\n      <button\n        className="p-1.5 border-none bg-green-200 text-green-700 rounded"\n        onClick={$3}\n      >\n        Done\n      </button>\n    </li>\n    <li className="flex gap-2">\n      <span className="flex-1">UIST submission</span>\n      <button\n        className="p-1.5 border-none bg-green-200 text-green-700 rounded"\n        onClick={$4}\n      >\n        Done\n      </button>\n    </li>\n  </ol>\n</div>',
        '<div className="flex flex-col gap-3">\n  <div className="font-semibold text-lg text-center">Research TODOs</div>\n  <div className="flex gap-1">\n    <input\n      type="text"\n      className="border border-stone-300 p-2 rounded"\n      value="Todo 1"\n      onChange={$1}\n    />\n    <button\n      className="border-none bg-orange-500 text-white px-4 py-2 rounded"\n      onClick={$0}\n    >\n      +\n    </button>\n  </div>\n  <ol className="m-0 pl-2 flex flex-col gap-2">\n    <li className="flex gap-2">\n      <span className="flex-1">UIST submission</span>\n      <button\n        className="p-1.5 border-none bg-green-200 text-green-700 rounded"\n        onClick={$3}\n      >\n        Done\n      </button>\n    </li>\n    <li className="flex gap-2">\n      <span className="flex-1">Todo 1</span>\n      <button\n        className="p-1.5 border-none bg-green-200 text-green-700 rounded"\n        onClick={$4}\n      >\n        Done\n      </button>\n    </li>\n  </ol>\n</div>',
        '<div className="flex flex-col gap-3">\n  <div className="font-semibold text-lg text-center">Research TODOs</div>\n  <div className="flex gap-1">\n    <input\n      type="text"\n      className="border border-stone-300 p-2 rounded"\n      value="Todo 1"\n      onChange={$1}\n    />\n    <button\n      className="border-none bg-orange-500 text-white px-4 py-2 rounded"\n      onClick={$0}\n    >\n      +\n    </button>\n  </div>\n  <ol className="m-0 pl-2 flex flex-col gap-2">\n    <li className="flex gap-2">\n      <span className="flex-1">UIST submission</span>\n      <button\n        className="p-1.5 border-none bg-green-200 text-green-700 rounded"\n        onClick={$3}\n      >\n        Done\n      </button>\n    </li>\n    <li className="flex gap-2">\n      <span className="flex-1">Todo 1</span>\n      <button\n        className="p-1.5 border-none bg-green-200 text-green-700 rounded"\n        onClick={$4}\n      >\n        Done\n      </button>\n    </li>\n  </ol>\n</div>',
        '<div className="flex flex-col gap-3">\n  <div className="font-semibold text-lg text-center">Research TODOs</div>\n  <div className="flex gap-1">\n    <input\n      type="text"\n      className="border border-stone-300 p-2 rounded"\n      value="Todo 1"\n      onChange={$1}\n    />\n    <button\n      className="border-none bg-orange-500 text-white px-4 py-2 rounded"\n      onClick={$0}\n    >\n      +\n    </button>\n  </div>\n  <ol className="m-0 pl-2 flex flex-col gap-2">\n    <li className="flex gap-2">\n      <span className="flex-1">Todo 1</span>\n      <button\n        className="p-1.5 border-none bg-green-200 text-green-700 rounded"\n        onClick={$4}\n      >\n        Done\n      </button>\n    </li>\n  </ol>\n</div>',
      ],
    },
  ] as unknown as TimelineInfo[],
]);

samples.set("Calculator", [
  `<div className="grid grid-rows-6 grid-cols-4 gap-1">
  <div className="text-lg font-semibold col-span-4 text-right bg-stone-200 rounded px-2">{0}</div>
  <button
    className="rounded border-none bg-stone-400 text-white"
    onClick={$0}
  >
    AC
  </button>
  <button
    className="rounded border-none bg-stone-400 text-white"
    onClick={$1}
  >
    +/-
  </button>
  <button
    className="rounded border-none bg-stone-400 text-white"
    onClick={$2}
  >
    %
  </button>
  <button
    className="rounded border-none bg-orange-400 text-white"
    onClick={$3}
  >
    /
  </button>
  <button
    className="rounded border-none bg-stone-500 text-white"
    onClick={$4}
  >
    7
  </button>
  <button
    className="rounded border-none bg-stone-500 text-white"
    onClick={$5}
  >
    8
  </button>
  <button
    className="rounded border-none bg-stone-500 text-white"
    onClick={$6}
  >
    9
  </button>
  <button
    className="rounded border-none bg-orange-400 text-white"
    onClick={$7}
  >
    x
  </button>
  <button
    className="rounded border-none bg-stone-500 text-white"
    onClick={$8}
  >
    4
  </button>
  <button
    className="rounded border-none bg-stone-500 text-white"
    onClick={$9}
  >
    5
  </button>
  <button
    className="rounded border-none bg-stone-500 text-white"
    onClick={$10}
  >
    6
  </button>
  <button
    className="rounded border-none bg-orange-400 text-white"
    onClick={$11}
  >
    -
  </button>
  <button
    className="rounded border-none bg-stone-500 text-white"
    onClick={$12}
  >
    1
  </button>
  <button
    className="rounded border-none bg-stone-500 text-white"
    onClick={$13}
  >
    2
  </button>
  <button
    className="rounded border-none bg-stone-500 text-white"
    onClick={$14}
  >
    3
  </button>
  <button
    className="rounded border-none bg-orange-400 text-white"
    onClick={$15}
  >
    +
  </button>
  <button
    className="col-span-3 rounded border-none bg-stone-500 text-white"
    onClick={$16}
  >
    0
  </button>
  <button
    className="rounded border-none bg-orange-400 text-white"
    onClick={$17}
  >
    =
  </button>
</div>`,
  [
    {
      timeline: [
        {
          TAG: "Action",
          _0: {
            label: {
              TAG: "Label",
              _0: 12,
              _1: null,
            },
            action_type: "Click",
          },
        },
        {
          TAG: "Edit",
          _0: {
            hd: {
              TAG: "Index",
              _0: 0,
            },
            tl: {
              hd: {
                TAG: "Index",
                _0: 0,
              },
              tl: 0,
            },
          },
          _1: {
            TAG: "ConstReplace",
            _0: {
              TAG: "Int",
              _0: 1,
            },
          },
        },
        {
          TAG: "Action",
          _0: {
            label: {
              TAG: "Label",
              _0: 13,
              _1: null,
            },
            action_type: "Click",
          },
        },
        {
          TAG: "Edit",
          _0: {
            hd: {
              TAG: "Index",
              _0: 0,
            },
            tl: {
              hd: {
                TAG: "Index",
                _0: 0,
              },
              tl: 0,
            },
          },
          _1: {
            TAG: "ConstReplace",
            _0: {
              TAG: "Int",
              _0: 12,
            },
          },
        },
        {
          TAG: "Action",
          _0: {
            label: {
              TAG: "Label",
              _0: 14,
              _1: null,
            },
            action_type: "Click",
          },
        },
        {
          TAG: "Edit",
          _0: {
            hd: {
              TAG: "Index",
              _0: 0,
            },
            tl: {
              hd: {
                TAG: "Index",
                _0: 0,
              },
              tl: 0,
            },
          },
          _1: {
            TAG: "ConstReplace",
            _0: {
              TAG: "Int",
              _0: 123,
            },
          },
        },
      ],
      snapshots: [
        '<div className="grid grid-rows-6 grid-cols-4 gap-1">\n  <div className="text-lg font-semibold col-span-4 text-right bg-stone-200 rounded px-2">{0}</div>\n  <button\n    className="rounded border-none bg-stone-400 text-white"\n    onClick={$0}\n  >\n    AC\n  </button>\n  <button\n    className="rounded border-none bg-stone-400 text-white"\n    onClick={$1}\n  >\n    +/-\n  </button>\n  <button\n    className="rounded border-none bg-stone-400 text-white"\n    onClick={$2}\n  >\n    %\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$3}\n  >\n    /\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$4}\n  >\n    7\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$5}\n  >\n    8\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$6}\n  >\n    9\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$7}\n  >\n    x\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$8}\n  >\n    4\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$9}\n  >\n    5\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$10}\n  >\n    6\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$11}\n  >\n    -\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$12}\n  >\n    1\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$13}\n  >\n    2\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$14}\n  >\n    3\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$15}\n  >\n    +\n  </button>\n  <button\n    className="col-span-3 rounded border-none bg-stone-500 text-white"\n    onClick={$16}\n  >\n    0\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$17}\n  >\n    =\n  </button>\n</div>',
        '<div className="grid grid-rows-6 grid-cols-4 gap-1">\n  <div className="text-lg font-semibold col-span-4 text-right bg-stone-200 rounded px-2">{1}</div>\n  <button\n    className="rounded border-none bg-stone-400 text-white"\n    onClick={$0}\n  >\n    AC\n  </button>\n  <button\n    className="rounded border-none bg-stone-400 text-white"\n    onClick={$1}\n  >\n    +/-\n  </button>\n  <button\n    className="rounded border-none bg-stone-400 text-white"\n    onClick={$2}\n  >\n    %\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$3}\n  >\n    /\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$4}\n  >\n    7\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$5}\n  >\n    8\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$6}\n  >\n    9\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$7}\n  >\n    x\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$8}\n  >\n    4\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$9}\n  >\n    5\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$10}\n  >\n    6\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$11}\n  >\n    -\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$12}\n  >\n    1\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$13}\n  >\n    2\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$14}\n  >\n    3\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$15}\n  >\n    +\n  </button>\n  <button\n    className="col-span-3 rounded border-none bg-stone-500 text-white"\n    onClick={$16}\n  >\n    0\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$17}\n  >\n    =\n  </button>\n</div>',
        '<div className="grid grid-rows-6 grid-cols-4 gap-1">\n  <div className="text-lg font-semibold col-span-4 text-right bg-stone-200 rounded px-2">{1}</div>\n  <button\n    className="rounded border-none bg-stone-400 text-white"\n    onClick={$0}\n  >\n    AC\n  </button>\n  <button\n    className="rounded border-none bg-stone-400 text-white"\n    onClick={$1}\n  >\n    +/-\n  </button>\n  <button\n    className="rounded border-none bg-stone-400 text-white"\n    onClick={$2}\n  >\n    %\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$3}\n  >\n    /\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$4}\n  >\n    7\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$5}\n  >\n    8\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$6}\n  >\n    9\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$7}\n  >\n    x\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$8}\n  >\n    4\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$9}\n  >\n    5\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$10}\n  >\n    6\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$11}\n  >\n    -\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$12}\n  >\n    1\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$13}\n  >\n    2\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$14}\n  >\n    3\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$15}\n  >\n    +\n  </button>\n  <button\n    className="col-span-3 rounded border-none bg-stone-500 text-white"\n    onClick={$16}\n  >\n    0\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$17}\n  >\n    =\n  </button>\n</div>',
        '<div className="grid grid-rows-6 grid-cols-4 gap-1">\n  <div className="text-lg font-semibold col-span-4 text-right bg-stone-200 rounded px-2">{12}</div>\n  <button\n    className="rounded border-none bg-stone-400 text-white"\n    onClick={$0}\n  >\n    AC\n  </button>\n  <button\n    className="rounded border-none bg-stone-400 text-white"\n    onClick={$1}\n  >\n    +/-\n  </button>\n  <button\n    className="rounded border-none bg-stone-400 text-white"\n    onClick={$2}\n  >\n    %\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$3}\n  >\n    /\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$4}\n  >\n    7\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$5}\n  >\n    8\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$6}\n  >\n    9\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$7}\n  >\n    x\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$8}\n  >\n    4\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$9}\n  >\n    5\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$10}\n  >\n    6\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$11}\n  >\n    -\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$12}\n  >\n    1\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$13}\n  >\n    2\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$14}\n  >\n    3\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$15}\n  >\n    +\n  </button>\n  <button\n    className="col-span-3 rounded border-none bg-stone-500 text-white"\n    onClick={$16}\n  >\n    0\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$17}\n  >\n    =\n  </button>\n</div>',
        '<div className="grid grid-rows-6 grid-cols-4 gap-1">\n  <div className="text-lg font-semibold col-span-4 text-right bg-stone-200 rounded px-2">{12}</div>\n  <button\n    className="rounded border-none bg-stone-400 text-white"\n    onClick={$0}\n  >\n    AC\n  </button>\n  <button\n    className="rounded border-none bg-stone-400 text-white"\n    onClick={$1}\n  >\n    +/-\n  </button>\n  <button\n    className="rounded border-none bg-stone-400 text-white"\n    onClick={$2}\n  >\n    %\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$3}\n  >\n    /\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$4}\n  >\n    7\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$5}\n  >\n    8\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$6}\n  >\n    9\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$7}\n  >\n    x\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$8}\n  >\n    4\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$9}\n  >\n    5\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$10}\n  >\n    6\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$11}\n  >\n    -\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$12}\n  >\n    1\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$13}\n  >\n    2\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$14}\n  >\n    3\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$15}\n  >\n    +\n  </button>\n  <button\n    className="col-span-3 rounded border-none bg-stone-500 text-white"\n    onClick={$16}\n  >\n    0\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$17}\n  >\n    =\n  </button>\n</div>',
        '<div className="grid grid-rows-6 grid-cols-4 gap-1">\n  <div className="text-lg font-semibold col-span-4 text-right bg-stone-200 rounded px-2">{123}</div>\n  <button\n    className="rounded border-none bg-stone-400 text-white"\n    onClick={$0}\n  >\n    AC\n  </button>\n  <button\n    className="rounded border-none bg-stone-400 text-white"\n    onClick={$1}\n  >\n    +/-\n  </button>\n  <button\n    className="rounded border-none bg-stone-400 text-white"\n    onClick={$2}\n  >\n    %\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$3}\n  >\n    /\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$4}\n  >\n    7\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$5}\n  >\n    8\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$6}\n  >\n    9\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$7}\n  >\n    x\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$8}\n  >\n    4\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$9}\n  >\n    5\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$10}\n  >\n    6\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$11}\n  >\n    -\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$12}\n  >\n    1\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$13}\n  >\n    2\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$14}\n  >\n    3\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$15}\n  >\n    +\n  </button>\n  <button\n    className="col-span-3 rounded border-none bg-stone-500 text-white"\n    onClick={$16}\n  >\n    0\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$17}\n  >\n    =\n  </button>\n</div>',
      ],
    },
    {
      timeline: [
        {
          TAG: "Action",
          _0: {
            label: {
              TAG: "Label",
              _0: 12,
              _1: null,
            },
            action_type: "Click",
          },
        },
        {
          TAG: "Edit",
          _0: {
            hd: {
              TAG: "Index",
              _0: 0,
            },
            tl: {
              hd: {
                TAG: "Index",
                _0: 0,
              },
              tl: 0,
            },
          },
          _1: {
            TAG: "ConstReplace",
            _0: {
              TAG: "Int",
              _0: 1,
            },
          },
        },
        {
          TAG: "Action",
          _0: {
            label: {
              TAG: "Label",
              _0: 15,
              _1: null,
            },
            action_type: "Click",
          },
        },
        {
          TAG: "Edit",
          _0: {
            hd: {
              TAG: "Index",
              _0: 16,
            },
            tl: 0,
          },
          _1: {
            TAG: "AttributeReplace",
            _0: "className",
            _1: {
              TAG: "String",
              _0: "rounded border-none bg-orange-600 text-white",
            },
          },
        },
        {
          TAG: "Edit",
          _0: {
            hd: {
              TAG: "Index",
              _0: 0,
            },
            tl: {
              hd: {
                TAG: "Index",
                _0: 0,
              },
              tl: 0,
            },
          },
          _1: {
            TAG: "ConstReplace",
            _0: {
              TAG: "Int",
              _0: 0,
            },
          },
        },
        {
          TAG: "Action",
          _0: {
            label: {
              TAG: "Label",
              _0: 13,
              _1: null,
            },
            action_type: "Click",
          },
        },
        {
          TAG: "Edit",
          _0: {
            hd: {
              TAG: "Index",
              _0: 0,
            },
            tl: {
              hd: {
                TAG: "Index",
                _0: 0,
              },
              tl: 0,
            },
          },
          _1: {
            TAG: "ConstReplace",
            _0: {
              TAG: "Int",
              _0: 2,
            },
          },
        },
        {
          TAG: "Action",
          _0: {
            label: {
              TAG: "Label",
              _0: 17,
              _1: null,
            },
            action_type: "Click",
          },
        },
        {
          TAG: "Edit",
          _0: {
            hd: {
              TAG: "Index",
              _0: 16,
            },
            tl: 0,
          },
          _1: {
            TAG: "AttributeReplace",
            _0: "className",
            _1: {
              TAG: "String",
              _0: "rounded border-none bg-orange-400 text-white",
            },
          },
        },
        {
          TAG: "Edit",
          _0: {
            hd: {
              TAG: "Index",
              _0: 0,
            },
            tl: {
              hd: {
                TAG: "Index",
                _0: 0,
              },
              tl: 0,
            },
          },
          _1: {
            TAG: "ConstReplace",
            _0: {
              TAG: "Int",
              _0: 3,
            },
          },
        },
      ],
      snapshots: [
        '<div className="grid grid-rows-6 grid-cols-4 gap-1">\n  <div className="text-lg font-semibold col-span-4 text-right bg-stone-200 rounded px-2">{0}</div>\n  <button\n    className="rounded border-none bg-stone-400 text-white"\n    onClick={$0}\n  >\n    AC\n  </button>\n  <button\n    className="rounded border-none bg-stone-400 text-white"\n    onClick={$1}\n  >\n    +/-\n  </button>\n  <button\n    className="rounded border-none bg-stone-400 text-white"\n    onClick={$2}\n  >\n    %\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$3}\n  >\n    /\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$4}\n  >\n    7\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$5}\n  >\n    8\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$6}\n  >\n    9\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$7}\n  >\n    x\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$8}\n  >\n    4\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$9}\n  >\n    5\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$10}\n  >\n    6\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$11}\n  >\n    -\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$12}\n  >\n    1\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$13}\n  >\n    2\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$14}\n  >\n    3\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$15}\n  >\n    +\n  </button>\n  <button\n    className="col-span-3 rounded border-none bg-stone-500 text-white"\n    onClick={$16}\n  >\n    0\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$17}\n  >\n    =\n  </button>\n</div>',
        '<div className="grid grid-rows-6 grid-cols-4 gap-1">\n  <div className="text-lg font-semibold col-span-4 text-right bg-stone-200 rounded px-2">{1}</div>\n  <button\n    className="rounded border-none bg-stone-400 text-white"\n    onClick={$0}\n  >\n    AC\n  </button>\n  <button\n    className="rounded border-none bg-stone-400 text-white"\n    onClick={$1}\n  >\n    +/-\n  </button>\n  <button\n    className="rounded border-none bg-stone-400 text-white"\n    onClick={$2}\n  >\n    %\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$3}\n  >\n    /\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$4}\n  >\n    7\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$5}\n  >\n    8\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$6}\n  >\n    9\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$7}\n  >\n    x\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$8}\n  >\n    4\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$9}\n  >\n    5\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$10}\n  >\n    6\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$11}\n  >\n    -\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$12}\n  >\n    1\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$13}\n  >\n    2\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$14}\n  >\n    3\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$15}\n  >\n    +\n  </button>\n  <button\n    className="col-span-3 rounded border-none bg-stone-500 text-white"\n    onClick={$16}\n  >\n    0\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$17}\n  >\n    =\n  </button>\n</div>',
        '<div className="grid grid-rows-6 grid-cols-4 gap-1">\n  <div className="text-lg font-semibold col-span-4 text-right bg-stone-200 rounded px-2">{1}</div>\n  <button\n    className="rounded border-none bg-stone-400 text-white"\n    onClick={$0}\n  >\n    AC\n  </button>\n  <button\n    className="rounded border-none bg-stone-400 text-white"\n    onClick={$1}\n  >\n    +/-\n  </button>\n  <button\n    className="rounded border-none bg-stone-400 text-white"\n    onClick={$2}\n  >\n    %\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$3}\n  >\n    /\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$4}\n  >\n    7\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$5}\n  >\n    8\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$6}\n  >\n    9\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$7}\n  >\n    x\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$8}\n  >\n    4\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$9}\n  >\n    5\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$10}\n  >\n    6\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$11}\n  >\n    -\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$12}\n  >\n    1\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$13}\n  >\n    2\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$14}\n  >\n    3\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$15}\n  >\n    +\n  </button>\n  <button\n    className="col-span-3 rounded border-none bg-stone-500 text-white"\n    onClick={$16}\n  >\n    0\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$17}\n  >\n    =\n  </button>\n</div>',
        '<div className="grid grid-rows-6 grid-cols-4 gap-1">\n  <div className="text-lg font-semibold col-span-4 text-right bg-stone-200 rounded px-2">{1}</div>\n  <button\n    className="rounded border-none bg-stone-400 text-white"\n    onClick={$0}\n  >\n    AC\n  </button>\n  <button\n    className="rounded border-none bg-stone-400 text-white"\n    onClick={$1}\n  >\n    +/-\n  </button>\n  <button\n    className="rounded border-none bg-stone-400 text-white"\n    onClick={$2}\n  >\n    %\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$3}\n  >\n    /\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$4}\n  >\n    7\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$5}\n  >\n    8\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$6}\n  >\n    9\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$7}\n  >\n    x\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$8}\n  >\n    4\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$9}\n  >\n    5\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$10}\n  >\n    6\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$11}\n  >\n    -\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$12}\n  >\n    1\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$13}\n  >\n    2\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$14}\n  >\n    3\n  </button>\n  <button\n    className="rounded border-none bg-orange-600 text-white"\n    onClick={$15}\n  >\n    +\n  </button>\n  <button\n    className="col-span-3 rounded border-none bg-stone-500 text-white"\n    onClick={$16}\n  >\n    0\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$17}\n  >\n    =\n  </button>\n</div>',
        '<div className="grid grid-rows-6 grid-cols-4 gap-1">\n  <div className="text-lg font-semibold col-span-4 text-right bg-stone-200 rounded px-2">{0}</div>\n  <button\n    className="rounded border-none bg-stone-400 text-white"\n    onClick={$0}\n  >\n    AC\n  </button>\n  <button\n    className="rounded border-none bg-stone-400 text-white"\n    onClick={$1}\n  >\n    +/-\n  </button>\n  <button\n    className="rounded border-none bg-stone-400 text-white"\n    onClick={$2}\n  >\n    %\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$3}\n  >\n    /\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$4}\n  >\n    7\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$5}\n  >\n    8\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$6}\n  >\n    9\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$7}\n  >\n    x\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$8}\n  >\n    4\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$9}\n  >\n    5\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$10}\n  >\n    6\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$11}\n  >\n    -\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$12}\n  >\n    1\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$13}\n  >\n    2\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$14}\n  >\n    3\n  </button>\n  <button\n    className="rounded border-none bg-orange-600 text-white"\n    onClick={$15}\n  >\n    +\n  </button>\n  <button\n    className="col-span-3 rounded border-none bg-stone-500 text-white"\n    onClick={$16}\n  >\n    0\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$17}\n  >\n    =\n  </button>\n</div>',
        '<div className="grid grid-rows-6 grid-cols-4 gap-1">\n  <div className="text-lg font-semibold col-span-4 text-right bg-stone-200 rounded px-2">{0}</div>\n  <button\n    className="rounded border-none bg-stone-400 text-white"\n    onClick={$0}\n  >\n    AC\n  </button>\n  <button\n    className="rounded border-none bg-stone-400 text-white"\n    onClick={$1}\n  >\n    +/-\n  </button>\n  <button\n    className="rounded border-none bg-stone-400 text-white"\n    onClick={$2}\n  >\n    %\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$3}\n  >\n    /\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$4}\n  >\n    7\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$5}\n  >\n    8\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$6}\n  >\n    9\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$7}\n  >\n    x\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$8}\n  >\n    4\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$9}\n  >\n    5\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$10}\n  >\n    6\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$11}\n  >\n    -\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$12}\n  >\n    1\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$13}\n  >\n    2\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$14}\n  >\n    3\n  </button>\n  <button\n    className="rounded border-none bg-orange-600 text-white"\n    onClick={$15}\n  >\n    +\n  </button>\n  <button\n    className="col-span-3 rounded border-none bg-stone-500 text-white"\n    onClick={$16}\n  >\n    0\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$17}\n  >\n    =\n  </button>\n</div>',
        '<div className="grid grid-rows-6 grid-cols-4 gap-1">\n  <div className="text-lg font-semibold col-span-4 text-right bg-stone-200 rounded px-2">{2}</div>\n  <button\n    className="rounded border-none bg-stone-400 text-white"\n    onClick={$0}\n  >\n    AC\n  </button>\n  <button\n    className="rounded border-none bg-stone-400 text-white"\n    onClick={$1}\n  >\n    +/-\n  </button>\n  <button\n    className="rounded border-none bg-stone-400 text-white"\n    onClick={$2}\n  >\n    %\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$3}\n  >\n    /\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$4}\n  >\n    7\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$5}\n  >\n    8\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$6}\n  >\n    9\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$7}\n  >\n    x\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$8}\n  >\n    4\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$9}\n  >\n    5\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$10}\n  >\n    6\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$11}\n  >\n    -\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$12}\n  >\n    1\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$13}\n  >\n    2\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$14}\n  >\n    3\n  </button>\n  <button\n    className="rounded border-none bg-orange-600 text-white"\n    onClick={$15}\n  >\n    +\n  </button>\n  <button\n    className="col-span-3 rounded border-none bg-stone-500 text-white"\n    onClick={$16}\n  >\n    0\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$17}\n  >\n    =\n  </button>\n</div>',
        '<div className="grid grid-rows-6 grid-cols-4 gap-1">\n  <div className="text-lg font-semibold col-span-4 text-right bg-stone-200 rounded px-2">{2}</div>\n  <button\n    className="rounded border-none bg-stone-400 text-white"\n    onClick={$0}\n  >\n    AC\n  </button>\n  <button\n    className="rounded border-none bg-stone-400 text-white"\n    onClick={$1}\n  >\n    +/-\n  </button>\n  <button\n    className="rounded border-none bg-stone-400 text-white"\n    onClick={$2}\n  >\n    %\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$3}\n  >\n    /\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$4}\n  >\n    7\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$5}\n  >\n    8\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$6}\n  >\n    9\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$7}\n  >\n    x\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$8}\n  >\n    4\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$9}\n  >\n    5\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$10}\n  >\n    6\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$11}\n  >\n    -\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$12}\n  >\n    1\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$13}\n  >\n    2\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$14}\n  >\n    3\n  </button>\n  <button\n    className="rounded border-none bg-orange-600 text-white"\n    onClick={$15}\n  >\n    +\n  </button>\n  <button\n    className="col-span-3 rounded border-none bg-stone-500 text-white"\n    onClick={$16}\n  >\n    0\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$17}\n  >\n    =\n  </button>\n</div>',
        '<div className="grid grid-rows-6 grid-cols-4 gap-1">\n  <div className="text-lg font-semibold col-span-4 text-right bg-stone-200 rounded px-2">{2}</div>\n  <button\n    className="rounded border-none bg-stone-400 text-white"\n    onClick={$0}\n  >\n    AC\n  </button>\n  <button\n    className="rounded border-none bg-stone-400 text-white"\n    onClick={$1}\n  >\n    +/-\n  </button>\n  <button\n    className="rounded border-none bg-stone-400 text-white"\n    onClick={$2}\n  >\n    %\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$3}\n  >\n    /\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$4}\n  >\n    7\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$5}\n  >\n    8\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$6}\n  >\n    9\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$7}\n  >\n    x\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$8}\n  >\n    4\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$9}\n  >\n    5\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$10}\n  >\n    6\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$11}\n  >\n    -\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$12}\n  >\n    1\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$13}\n  >\n    2\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$14}\n  >\n    3\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$15}\n  >\n    +\n  </button>\n  <button\n    className="col-span-3 rounded border-none bg-stone-500 text-white"\n    onClick={$16}\n  >\n    0\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$17}\n  >\n    =\n  </button>\n</div>',
        '<div className="grid grid-rows-6 grid-cols-4 gap-1">\n  <div className="text-lg font-semibold col-span-4 text-right bg-stone-200 rounded px-2">{3}</div>\n  <button\n    className="rounded border-none bg-stone-400 text-white"\n    onClick={$0}\n  >\n    AC\n  </button>\n  <button\n    className="rounded border-none bg-stone-400 text-white"\n    onClick={$1}\n  >\n    +/-\n  </button>\n  <button\n    className="rounded border-none bg-stone-400 text-white"\n    onClick={$2}\n  >\n    %\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$3}\n  >\n    /\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$4}\n  >\n    7\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$5}\n  >\n    8\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$6}\n  >\n    9\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$7}\n  >\n    x\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$8}\n  >\n    4\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$9}\n  >\n    5\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$10}\n  >\n    6\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$11}\n  >\n    -\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$12}\n  >\n    1\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$13}\n  >\n    2\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$14}\n  >\n    3\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$15}\n  >\n    +\n  </button>\n  <button\n    className="col-span-3 rounded border-none bg-stone-500 text-white"\n    onClick={$16}\n  >\n    0\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$17}\n  >\n    =\n  </button>\n</div>',
      ],
    },
    {
      timeline: [
        {
          TAG: "Action",
          _0: {
            label: {
              TAG: "Label",
              _0: 14,
              _1: null,
            },
            action_type: "Click",
          },
        },
        {
          TAG: "Edit",
          _0: {
            hd: {
              TAG: "Index",
              _0: 0,
            },
            tl: {
              hd: {
                TAG: "Index",
                _0: 0,
              },
              tl: 0,
            },
          },
          _1: {
            TAG: "ConstReplace",
            _0: {
              TAG: "Int",
              _0: 3,
            },
          },
        },
        {
          TAG: "Action",
          _0: {
            label: {
              TAG: "Label",
              _0: 7,
              _1: null,
            },
            action_type: "Click",
          },
        },
        {
          TAG: "Edit",
          _0: {
            hd: {
              TAG: "Index",
              _0: 8,
            },
            tl: 0,
          },
          _1: {
            TAG: "AttributeReplace",
            _0: "className",
            _1: {
              TAG: "String",
              _0: "rounded border-none bg-orange-600 text-white",
            },
          },
        },
        {
          TAG: "Edit",
          _0: {
            hd: {
              TAG: "Index",
              _0: 0,
            },
            tl: {
              hd: {
                TAG: "Index",
                _0: 0,
              },
              tl: 0,
            },
          },
          _1: {
            TAG: "ConstReplace",
            _0: {
              TAG: "Int",
              _0: 0,
            },
          },
        },
        {
          TAG: "Action",
          _0: {
            label: {
              TAG: "Label",
              _0: 8,
              _1: null,
            },
            action_type: "Click",
          },
        },
        {
          TAG: "Edit",
          _0: {
            hd: {
              TAG: "Index",
              _0: 0,
            },
            tl: {
              hd: {
                TAG: "Index",
                _0: 0,
              },
              tl: 0,
            },
          },
          _1: {
            TAG: "ConstReplace",
            _0: {
              TAG: "Int",
              _0: 4,
            },
          },
        },
        {
          TAG: "Action",
          _0: {
            label: {
              TAG: "Label",
              _0: 17,
              _1: null,
            },
            action_type: "Click",
          },
        },
        {
          TAG: "Edit",
          _0: {
            hd: {
              TAG: "Index",
              _0: 8,
            },
            tl: 0,
          },
          _1: {
            TAG: "AttributeReplace",
            _0: "className",
            _1: {
              TAG: "String",
              _0: "rounded border-none bg-orange-400 text-white",
            },
          },
        },
        {
          TAG: "Edit",
          _0: {
            hd: {
              TAG: "Index",
              _0: 0,
            },
            tl: {
              hd: {
                TAG: "Index",
                _0: 0,
              },
              tl: 0,
            },
          },
          _1: {
            TAG: "ConstReplace",
            _0: {
              TAG: "Int",
              _0: 12,
            },
          },
        },
      ],
      snapshots: [
        '<div className="grid grid-rows-6 grid-cols-4 gap-1">\n  <div className="text-lg font-semibold col-span-4 text-right bg-stone-200 rounded px-2">{0}</div>\n  <button\n    className="rounded border-none bg-stone-400 text-white"\n    onClick={$0}\n  >\n    AC\n  </button>\n  <button\n    className="rounded border-none bg-stone-400 text-white"\n    onClick={$1}\n  >\n    +/-\n  </button>\n  <button\n    className="rounded border-none bg-stone-400 text-white"\n    onClick={$2}\n  >\n    %\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$3}\n  >\n    /\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$4}\n  >\n    7\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$5}\n  >\n    8\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$6}\n  >\n    9\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$7}\n  >\n    x\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$8}\n  >\n    4\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$9}\n  >\n    5\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$10}\n  >\n    6\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$11}\n  >\n    -\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$12}\n  >\n    1\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$13}\n  >\n    2\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$14}\n  >\n    3\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$15}\n  >\n    +\n  </button>\n  <button\n    className="col-span-3 rounded border-none bg-stone-500 text-white"\n    onClick={$16}\n  >\n    0\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$17}\n  >\n    =\n  </button>\n</div>',
        '<div className="grid grid-rows-6 grid-cols-4 gap-1">\n  <div className="text-lg font-semibold col-span-4 text-right bg-stone-200 rounded px-2">{3}</div>\n  <button\n    className="rounded border-none bg-stone-400 text-white"\n    onClick={$0}\n  >\n    AC\n  </button>\n  <button\n    className="rounded border-none bg-stone-400 text-white"\n    onClick={$1}\n  >\n    +/-\n  </button>\n  <button\n    className="rounded border-none bg-stone-400 text-white"\n    onClick={$2}\n  >\n    %\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$3}\n  >\n    /\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$4}\n  >\n    7\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$5}\n  >\n    8\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$6}\n  >\n    9\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$7}\n  >\n    x\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$8}\n  >\n    4\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$9}\n  >\n    5\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$10}\n  >\n    6\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$11}\n  >\n    -\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$12}\n  >\n    1\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$13}\n  >\n    2\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$14}\n  >\n    3\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$15}\n  >\n    +\n  </button>\n  <button\n    className="col-span-3 rounded border-none bg-stone-500 text-white"\n    onClick={$16}\n  >\n    0\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$17}\n  >\n    =\n  </button>\n</div>',
        '<div className="grid grid-rows-6 grid-cols-4 gap-1">\n  <div className="text-lg font-semibold col-span-4 text-right bg-stone-200 rounded px-2">{3}</div>\n  <button\n    className="rounded border-none bg-stone-400 text-white"\n    onClick={$0}\n  >\n    AC\n  </button>\n  <button\n    className="rounded border-none bg-stone-400 text-white"\n    onClick={$1}\n  >\n    +/-\n  </button>\n  <button\n    className="rounded border-none bg-stone-400 text-white"\n    onClick={$2}\n  >\n    %\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$3}\n  >\n    /\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$4}\n  >\n    7\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$5}\n  >\n    8\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$6}\n  >\n    9\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$7}\n  >\n    x\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$8}\n  >\n    4\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$9}\n  >\n    5\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$10}\n  >\n    6\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$11}\n  >\n    -\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$12}\n  >\n    1\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$13}\n  >\n    2\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$14}\n  >\n    3\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$15}\n  >\n    +\n  </button>\n  <button\n    className="col-span-3 rounded border-none bg-stone-500 text-white"\n    onClick={$16}\n  >\n    0\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$17}\n  >\n    =\n  </button>\n</div>',
        '<div className="grid grid-rows-6 grid-cols-4 gap-1">\n  <div className="text-lg font-semibold col-span-4 text-right bg-stone-200 rounded px-2">{3}</div>\n  <button\n    className="rounded border-none bg-stone-400 text-white"\n    onClick={$0}\n  >\n    AC\n  </button>\n  <button\n    className="rounded border-none bg-stone-400 text-white"\n    onClick={$1}\n  >\n    +/-\n  </button>\n  <button\n    className="rounded border-none bg-stone-400 text-white"\n    onClick={$2}\n  >\n    %\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$3}\n  >\n    /\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$4}\n  >\n    7\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$5}\n  >\n    8\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$6}\n  >\n    9\n  </button>\n  <button\n    className="rounded border-none bg-orange-600 text-white"\n    onClick={$7}\n  >\n    x\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$8}\n  >\n    4\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$9}\n  >\n    5\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$10}\n  >\n    6\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$11}\n  >\n    -\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$12}\n  >\n    1\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$13}\n  >\n    2\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$14}\n  >\n    3\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$15}\n  >\n    +\n  </button>\n  <button\n    className="col-span-3 rounded border-none bg-stone-500 text-white"\n    onClick={$16}\n  >\n    0\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$17}\n  >\n    =\n  </button>\n</div>',
        '<div className="grid grid-rows-6 grid-cols-4 gap-1">\n  <div className="text-lg font-semibold col-span-4 text-right bg-stone-200 rounded px-2">{0}</div>\n  <button\n    className="rounded border-none bg-stone-400 text-white"\n    onClick={$0}\n  >\n    AC\n  </button>\n  <button\n    className="rounded border-none bg-stone-400 text-white"\n    onClick={$1}\n  >\n    +/-\n  </button>\n  <button\n    className="rounded border-none bg-stone-400 text-white"\n    onClick={$2}\n  >\n    %\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$3}\n  >\n    /\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$4}\n  >\n    7\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$5}\n  >\n    8\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$6}\n  >\n    9\n  </button>\n  <button\n    className="rounded border-none bg-orange-600 text-white"\n    onClick={$7}\n  >\n    x\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$8}\n  >\n    4\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$9}\n  >\n    5\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$10}\n  >\n    6\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$11}\n  >\n    -\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$12}\n  >\n    1\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$13}\n  >\n    2\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$14}\n  >\n    3\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$15}\n  >\n    +\n  </button>\n  <button\n    className="col-span-3 rounded border-none bg-stone-500 text-white"\n    onClick={$16}\n  >\n    0\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$17}\n  >\n    =\n  </button>\n</div>',
        '<div className="grid grid-rows-6 grid-cols-4 gap-1">\n  <div className="text-lg font-semibold col-span-4 text-right bg-stone-200 rounded px-2">{0}</div>\n  <button\n    className="rounded border-none bg-stone-400 text-white"\n    onClick={$0}\n  >\n    AC\n  </button>\n  <button\n    className="rounded border-none bg-stone-400 text-white"\n    onClick={$1}\n  >\n    +/-\n  </button>\n  <button\n    className="rounded border-none bg-stone-400 text-white"\n    onClick={$2}\n  >\n    %\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$3}\n  >\n    /\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$4}\n  >\n    7\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$5}\n  >\n    8\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$6}\n  >\n    9\n  </button>\n  <button\n    className="rounded border-none bg-orange-600 text-white"\n    onClick={$7}\n  >\n    x\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$8}\n  >\n    4\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$9}\n  >\n    5\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$10}\n  >\n    6\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$11}\n  >\n    -\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$12}\n  >\n    1\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$13}\n  >\n    2\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$14}\n  >\n    3\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$15}\n  >\n    +\n  </button>\n  <button\n    className="col-span-3 rounded border-none bg-stone-500 text-white"\n    onClick={$16}\n  >\n    0\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$17}\n  >\n    =\n  </button>\n</div>',
        '<div className="grid grid-rows-6 grid-cols-4 gap-1">\n  <div className="text-lg font-semibold col-span-4 text-right bg-stone-200 rounded px-2">{4}</div>\n  <button\n    className="rounded border-none bg-stone-400 text-white"\n    onClick={$0}\n  >\n    AC\n  </button>\n  <button\n    className="rounded border-none bg-stone-400 text-white"\n    onClick={$1}\n  >\n    +/-\n  </button>\n  <button\n    className="rounded border-none bg-stone-400 text-white"\n    onClick={$2}\n  >\n    %\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$3}\n  >\n    /\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$4}\n  >\n    7\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$5}\n  >\n    8\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$6}\n  >\n    9\n  </button>\n  <button\n    className="rounded border-none bg-orange-600 text-white"\n    onClick={$7}\n  >\n    x\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$8}\n  >\n    4\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$9}\n  >\n    5\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$10}\n  >\n    6\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$11}\n  >\n    -\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$12}\n  >\n    1\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$13}\n  >\n    2\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$14}\n  >\n    3\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$15}\n  >\n    +\n  </button>\n  <button\n    className="col-span-3 rounded border-none bg-stone-500 text-white"\n    onClick={$16}\n  >\n    0\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$17}\n  >\n    =\n  </button>\n</div>',
        '<div className="grid grid-rows-6 grid-cols-4 gap-1">\n  <div className="text-lg font-semibold col-span-4 text-right bg-stone-200 rounded px-2">{4}</div>\n  <button\n    className="rounded border-none bg-stone-400 text-white"\n    onClick={$0}\n  >\n    AC\n  </button>\n  <button\n    className="rounded border-none bg-stone-400 text-white"\n    onClick={$1}\n  >\n    +/-\n  </button>\n  <button\n    className="rounded border-none bg-stone-400 text-white"\n    onClick={$2}\n  >\n    %\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$3}\n  >\n    /\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$4}\n  >\n    7\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$5}\n  >\n    8\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$6}\n  >\n    9\n  </button>\n  <button\n    className="rounded border-none bg-orange-600 text-white"\n    onClick={$7}\n  >\n    x\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$8}\n  >\n    4\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$9}\n  >\n    5\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$10}\n  >\n    6\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$11}\n  >\n    -\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$12}\n  >\n    1\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$13}\n  >\n    2\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$14}\n  >\n    3\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$15}\n  >\n    +\n  </button>\n  <button\n    className="col-span-3 rounded border-none bg-stone-500 text-white"\n    onClick={$16}\n  >\n    0\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$17}\n  >\n    =\n  </button>\n</div>',
        '<div className="grid grid-rows-6 grid-cols-4 gap-1">\n  <div className="text-lg font-semibold col-span-4 text-right bg-stone-200 rounded px-2">{4}</div>\n  <button\n    className="rounded border-none bg-stone-400 text-white"\n    onClick={$0}\n  >\n    AC\n  </button>\n  <button\n    className="rounded border-none bg-stone-400 text-white"\n    onClick={$1}\n  >\n    +/-\n  </button>\n  <button\n    className="rounded border-none bg-stone-400 text-white"\n    onClick={$2}\n  >\n    %\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$3}\n  >\n    /\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$4}\n  >\n    7\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$5}\n  >\n    8\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$6}\n  >\n    9\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$7}\n  >\n    x\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$8}\n  >\n    4\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$9}\n  >\n    5\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$10}\n  >\n    6\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$11}\n  >\n    -\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$12}\n  >\n    1\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$13}\n  >\n    2\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$14}\n  >\n    3\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$15}\n  >\n    +\n  </button>\n  <button\n    className="col-span-3 rounded border-none bg-stone-500 text-white"\n    onClick={$16}\n  >\n    0\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$17}\n  >\n    =\n  </button>\n</div>',
        '<div className="grid grid-rows-6 grid-cols-4 gap-1">\n  <div className="text-lg font-semibold col-span-4 text-right bg-stone-200 rounded px-2">{12}</div>\n  <button\n    className="rounded border-none bg-stone-400 text-white"\n    onClick={$0}\n  >\n    AC\n  </button>\n  <button\n    className="rounded border-none bg-stone-400 text-white"\n    onClick={$1}\n  >\n    +/-\n  </button>\n  <button\n    className="rounded border-none bg-stone-400 text-white"\n    onClick={$2}\n  >\n    %\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$3}\n  >\n    /\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$4}\n  >\n    7\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$5}\n  >\n    8\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$6}\n  >\n    9\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$7}\n  >\n    x\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$8}\n  >\n    4\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$9}\n  >\n    5\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$10}\n  >\n    6\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$11}\n  >\n    -\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$12}\n  >\n    1\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$13}\n  >\n    2\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$14}\n  >\n    3\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$15}\n  >\n    +\n  </button>\n  <button\n    className="col-span-3 rounded border-none bg-stone-500 text-white"\n    onClick={$16}\n  >\n    0\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$17}\n  >\n    =\n  </button>\n</div>',
      ],
    },
    {
      timeline: [
        {
          TAG: "Action",
          _0: {
            label: {
              TAG: "Label",
              _0: 10,
              _1: null,
            },
            action_type: "Click",
          },
        },
        {
          TAG: "Edit",
          _0: {
            hd: {
              TAG: "Index",
              _0: 0,
            },
            tl: {
              hd: {
                TAG: "Index",
                _0: 0,
              },
              tl: 0,
            },
          },
          _1: {
            TAG: "ConstReplace",
            _0: {
              TAG: "Int",
              _0: 6,
            },
          },
        },
        {
          TAG: "Action",
          _0: {
            label: {
              TAG: "Label",
              _0: 4,
              _1: null,
            },
            action_type: "Click",
          },
        },
        {
          TAG: "Edit",
          _0: {
            hd: {
              TAG: "Index",
              _0: 0,
            },
            tl: {
              hd: {
                TAG: "Index",
                _0: 0,
              },
              tl: 0,
            },
          },
          _1: {
            TAG: "ConstReplace",
            _0: {
              TAG: "Int",
              _0: 67,
            },
          },
        },
        {
          TAG: "Action",
          _0: {
            label: {
              TAG: "Label",
              _0: 11,
              _1: null,
            },
            action_type: "Click",
          },
        },
        {
          TAG: "Edit",
          _0: {
            hd: {
              TAG: "Index",
              _0: 12,
            },
            tl: 0,
          },
          _1: {
            TAG: "AttributeReplace",
            _0: "className",
            _1: {
              TAG: "String",
              _0: "rounded border-none bg-orange-600 text-white",
            },
          },
        },
        {
          TAG: "Edit",
          _0: {
            hd: {
              TAG: "Index",
              _0: 0,
            },
            tl: {
              hd: {
                TAG: "Index",
                _0: 0,
              },
              tl: 0,
            },
          },
          _1: {
            TAG: "ConstReplace",
            _0: {
              TAG: "Int",
              _0: 0,
            },
          },
        },
        {
          TAG: "Action",
          _0: {
            label: {
              TAG: "Label",
              _0: 5,
              _1: null,
            },
            action_type: "Click",
          },
        },
        {
          TAG: "Edit",
          _0: {
            hd: {
              TAG: "Index",
              _0: 0,
            },
            tl: {
              hd: {
                TAG: "Index",
                _0: 0,
              },
              tl: 0,
            },
          },
          _1: {
            TAG: "ConstReplace",
            _0: {
              TAG: "Int",
              _0: 8,
            },
          },
        },
        {
          TAG: "Action",
          _0: {
            label: {
              TAG: "Label",
              _0: 17,
              _1: null,
            },
            action_type: "Click",
          },
        },
        {
          TAG: "Edit",
          _0: {
            hd: {
              TAG: "Index",
              _0: 12,
            },
            tl: 0,
          },
          _1: {
            TAG: "AttributeReplace",
            _0: "className",
            _1: {
              TAG: "String",
              _0: "rounded border-none bg-orange-400 text-white",
            },
          },
        },
        {
          TAG: "Edit",
          _0: {
            hd: {
              TAG: "Index",
              _0: 0,
            },
            tl: {
              hd: {
                TAG: "Index",
                _0: 0,
              },
              tl: 0,
            },
          },
          _1: {
            TAG: "ConstReplace",
            _0: {
              TAG: "Int",
              _0: 59,
            },
          },
        },
      ],
      snapshots: [
        '<div className="grid grid-rows-6 grid-cols-4 gap-1">\n  <div className="text-lg font-semibold col-span-4 text-right bg-stone-200 rounded px-2">{0}</div>\n  <button\n    className="rounded border-none bg-stone-400 text-white"\n    onClick={$0}\n  >\n    AC\n  </button>\n  <button\n    className="rounded border-none bg-stone-400 text-white"\n    onClick={$1}\n  >\n    +/-\n  </button>\n  <button\n    className="rounded border-none bg-stone-400 text-white"\n    onClick={$2}\n  >\n    %\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$3}\n  >\n    /\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$4}\n  >\n    7\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$5}\n  >\n    8\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$6}\n  >\n    9\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$7}\n  >\n    x\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$8}\n  >\n    4\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$9}\n  >\n    5\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$10}\n  >\n    6\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$11}\n  >\n    -\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$12}\n  >\n    1\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$13}\n  >\n    2\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$14}\n  >\n    3\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$15}\n  >\n    +\n  </button>\n  <button\n    className="col-span-3 rounded border-none bg-stone-500 text-white"\n    onClick={$16}\n  >\n    0\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$17}\n  >\n    =\n  </button>\n</div>',
        '<div className="grid grid-rows-6 grid-cols-4 gap-1">\n  <div className="text-lg font-semibold col-span-4 text-right bg-stone-200 rounded px-2">{6}</div>\n  <button\n    className="rounded border-none bg-stone-400 text-white"\n    onClick={$0}\n  >\n    AC\n  </button>\n  <button\n    className="rounded border-none bg-stone-400 text-white"\n    onClick={$1}\n  >\n    +/-\n  </button>\n  <button\n    className="rounded border-none bg-stone-400 text-white"\n    onClick={$2}\n  >\n    %\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$3}\n  >\n    /\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$4}\n  >\n    7\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$5}\n  >\n    8\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$6}\n  >\n    9\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$7}\n  >\n    x\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$8}\n  >\n    4\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$9}\n  >\n    5\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$10}\n  >\n    6\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$11}\n  >\n    -\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$12}\n  >\n    1\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$13}\n  >\n    2\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$14}\n  >\n    3\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$15}\n  >\n    +\n  </button>\n  <button\n    className="col-span-3 rounded border-none bg-stone-500 text-white"\n    onClick={$16}\n  >\n    0\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$17}\n  >\n    =\n  </button>\n</div>',
        '<div className="grid grid-rows-6 grid-cols-4 gap-1">\n  <div className="text-lg font-semibold col-span-4 text-right bg-stone-200 rounded px-2">{6}</div>\n  <button\n    className="rounded border-none bg-stone-400 text-white"\n    onClick={$0}\n  >\n    AC\n  </button>\n  <button\n    className="rounded border-none bg-stone-400 text-white"\n    onClick={$1}\n  >\n    +/-\n  </button>\n  <button\n    className="rounded border-none bg-stone-400 text-white"\n    onClick={$2}\n  >\n    %\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$3}\n  >\n    /\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$4}\n  >\n    7\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$5}\n  >\n    8\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$6}\n  >\n    9\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$7}\n  >\n    x\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$8}\n  >\n    4\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$9}\n  >\n    5\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$10}\n  >\n    6\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$11}\n  >\n    -\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$12}\n  >\n    1\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$13}\n  >\n    2\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$14}\n  >\n    3\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$15}\n  >\n    +\n  </button>\n  <button\n    className="col-span-3 rounded border-none bg-stone-500 text-white"\n    onClick={$16}\n  >\n    0\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$17}\n  >\n    =\n  </button>\n</div>',
        '<div className="grid grid-rows-6 grid-cols-4 gap-1">\n  <div className="text-lg font-semibold col-span-4 text-right bg-stone-200 rounded px-2">{67}</div>\n  <button\n    className="rounded border-none bg-stone-400 text-white"\n    onClick={$0}\n  >\n    AC\n  </button>\n  <button\n    className="rounded border-none bg-stone-400 text-white"\n    onClick={$1}\n  >\n    +/-\n  </button>\n  <button\n    className="rounded border-none bg-stone-400 text-white"\n    onClick={$2}\n  >\n    %\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$3}\n  >\n    /\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$4}\n  >\n    7\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$5}\n  >\n    8\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$6}\n  >\n    9\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$7}\n  >\n    x\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$8}\n  >\n    4\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$9}\n  >\n    5\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$10}\n  >\n    6\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$11}\n  >\n    -\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$12}\n  >\n    1\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$13}\n  >\n    2\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$14}\n  >\n    3\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$15}\n  >\n    +\n  </button>\n  <button\n    className="col-span-3 rounded border-none bg-stone-500 text-white"\n    onClick={$16}\n  >\n    0\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$17}\n  >\n    =\n  </button>\n</div>',
        '<div className="grid grid-rows-6 grid-cols-4 gap-1">\n  <div className="text-lg font-semibold col-span-4 text-right bg-stone-200 rounded px-2">{67}</div>\n  <button\n    className="rounded border-none bg-stone-400 text-white"\n    onClick={$0}\n  >\n    AC\n  </button>\n  <button\n    className="rounded border-none bg-stone-400 text-white"\n    onClick={$1}\n  >\n    +/-\n  </button>\n  <button\n    className="rounded border-none bg-stone-400 text-white"\n    onClick={$2}\n  >\n    %\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$3}\n  >\n    /\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$4}\n  >\n    7\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$5}\n  >\n    8\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$6}\n  >\n    9\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$7}\n  >\n    x\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$8}\n  >\n    4\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$9}\n  >\n    5\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$10}\n  >\n    6\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$11}\n  >\n    -\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$12}\n  >\n    1\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$13}\n  >\n    2\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$14}\n  >\n    3\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$15}\n  >\n    +\n  </button>\n  <button\n    className="col-span-3 rounded border-none bg-stone-500 text-white"\n    onClick={$16}\n  >\n    0\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$17}\n  >\n    =\n  </button>\n</div>',
        '<div className="grid grid-rows-6 grid-cols-4 gap-1">\n  <div className="text-lg font-semibold col-span-4 text-right bg-stone-200 rounded px-2">{67}</div>\n  <button\n    className="rounded border-none bg-stone-400 text-white"\n    onClick={$0}\n  >\n    AC\n  </button>\n  <button\n    className="rounded border-none bg-stone-400 text-white"\n    onClick={$1}\n  >\n    +/-\n  </button>\n  <button\n    className="rounded border-none bg-stone-400 text-white"\n    onClick={$2}\n  >\n    %\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$3}\n  >\n    /\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$4}\n  >\n    7\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$5}\n  >\n    8\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$6}\n  >\n    9\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$7}\n  >\n    x\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$8}\n  >\n    4\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$9}\n  >\n    5\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$10}\n  >\n    6\n  </button>\n  <button\n    className="rounded border-none bg-orange-600 text-white"\n    onClick={$11}\n  >\n    -\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$12}\n  >\n    1\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$13}\n  >\n    2\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$14}\n  >\n    3\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$15}\n  >\n    +\n  </button>\n  <button\n    className="col-span-3 rounded border-none bg-stone-500 text-white"\n    onClick={$16}\n  >\n    0\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$17}\n  >\n    =\n  </button>\n</div>',
        '<div className="grid grid-rows-6 grid-cols-4 gap-1">\n  <div className="text-lg font-semibold col-span-4 text-right bg-stone-200 rounded px-2">{0}</div>\n  <button\n    className="rounded border-none bg-stone-400 text-white"\n    onClick={$0}\n  >\n    AC\n  </button>\n  <button\n    className="rounded border-none bg-stone-400 text-white"\n    onClick={$1}\n  >\n    +/-\n  </button>\n  <button\n    className="rounded border-none bg-stone-400 text-white"\n    onClick={$2}\n  >\n    %\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$3}\n  >\n    /\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$4}\n  >\n    7\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$5}\n  >\n    8\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$6}\n  >\n    9\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$7}\n  >\n    x\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$8}\n  >\n    4\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$9}\n  >\n    5\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$10}\n  >\n    6\n  </button>\n  <button\n    className="rounded border-none bg-orange-600 text-white"\n    onClick={$11}\n  >\n    -\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$12}\n  >\n    1\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$13}\n  >\n    2\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$14}\n  >\n    3\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$15}\n  >\n    +\n  </button>\n  <button\n    className="col-span-3 rounded border-none bg-stone-500 text-white"\n    onClick={$16}\n  >\n    0\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$17}\n  >\n    =\n  </button>\n</div>',
        '<div className="grid grid-rows-6 grid-cols-4 gap-1">\n  <div className="text-lg font-semibold col-span-4 text-right bg-stone-200 rounded px-2">{0}</div>\n  <button\n    className="rounded border-none bg-stone-400 text-white"\n    onClick={$0}\n  >\n    AC\n  </button>\n  <button\n    className="rounded border-none bg-stone-400 text-white"\n    onClick={$1}\n  >\n    +/-\n  </button>\n  <button\n    className="rounded border-none bg-stone-400 text-white"\n    onClick={$2}\n  >\n    %\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$3}\n  >\n    /\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$4}\n  >\n    7\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$5}\n  >\n    8\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$6}\n  >\n    9\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$7}\n  >\n    x\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$8}\n  >\n    4\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$9}\n  >\n    5\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$10}\n  >\n    6\n  </button>\n  <button\n    className="rounded border-none bg-orange-600 text-white"\n    onClick={$11}\n  >\n    -\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$12}\n  >\n    1\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$13}\n  >\n    2\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$14}\n  >\n    3\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$15}\n  >\n    +\n  </button>\n  <button\n    className="col-span-3 rounded border-none bg-stone-500 text-white"\n    onClick={$16}\n  >\n    0\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$17}\n  >\n    =\n  </button>\n</div>',
        '<div className="grid grid-rows-6 grid-cols-4 gap-1">\n  <div className="text-lg font-semibold col-span-4 text-right bg-stone-200 rounded px-2">{8}</div>\n  <button\n    className="rounded border-none bg-stone-400 text-white"\n    onClick={$0}\n  >\n    AC\n  </button>\n  <button\n    className="rounded border-none bg-stone-400 text-white"\n    onClick={$1}\n  >\n    +/-\n  </button>\n  <button\n    className="rounded border-none bg-stone-400 text-white"\n    onClick={$2}\n  >\n    %\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$3}\n  >\n    /\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$4}\n  >\n    7\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$5}\n  >\n    8\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$6}\n  >\n    9\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$7}\n  >\n    x\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$8}\n  >\n    4\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$9}\n  >\n    5\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$10}\n  >\n    6\n  </button>\n  <button\n    className="rounded border-none bg-orange-600 text-white"\n    onClick={$11}\n  >\n    -\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$12}\n  >\n    1\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$13}\n  >\n    2\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$14}\n  >\n    3\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$15}\n  >\n    +\n  </button>\n  <button\n    className="col-span-3 rounded border-none bg-stone-500 text-white"\n    onClick={$16}\n  >\n    0\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$17}\n  >\n    =\n  </button>\n</div>',
        '<div className="grid grid-rows-6 grid-cols-4 gap-1">\n  <div className="text-lg font-semibold col-span-4 text-right bg-stone-200 rounded px-2">{8}</div>\n  <button\n    className="rounded border-none bg-stone-400 text-white"\n    onClick={$0}\n  >\n    AC\n  </button>\n  <button\n    className="rounded border-none bg-stone-400 text-white"\n    onClick={$1}\n  >\n    +/-\n  </button>\n  <button\n    className="rounded border-none bg-stone-400 text-white"\n    onClick={$2}\n  >\n    %\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$3}\n  >\n    /\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$4}\n  >\n    7\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$5}\n  >\n    8\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$6}\n  >\n    9\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$7}\n  >\n    x\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$8}\n  >\n    4\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$9}\n  >\n    5\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$10}\n  >\n    6\n  </button>\n  <button\n    className="rounded border-none bg-orange-600 text-white"\n    onClick={$11}\n  >\n    -\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$12}\n  >\n    1\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$13}\n  >\n    2\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$14}\n  >\n    3\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$15}\n  >\n    +\n  </button>\n  <button\n    className="col-span-3 rounded border-none bg-stone-500 text-white"\n    onClick={$16}\n  >\n    0\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$17}\n  >\n    =\n  </button>\n</div>',
        '<div className="grid grid-rows-6 grid-cols-4 gap-1">\n  <div className="text-lg font-semibold col-span-4 text-right bg-stone-200 rounded px-2">{8}</div>\n  <button\n    className="rounded border-none bg-stone-400 text-white"\n    onClick={$0}\n  >\n    AC\n  </button>\n  <button\n    className="rounded border-none bg-stone-400 text-white"\n    onClick={$1}\n  >\n    +/-\n  </button>\n  <button\n    className="rounded border-none bg-stone-400 text-white"\n    onClick={$2}\n  >\n    %\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$3}\n  >\n    /\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$4}\n  >\n    7\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$5}\n  >\n    8\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$6}\n  >\n    9\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$7}\n  >\n    x\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$8}\n  >\n    4\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$9}\n  >\n    5\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$10}\n  >\n    6\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$11}\n  >\n    -\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$12}\n  >\n    1\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$13}\n  >\n    2\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$14}\n  >\n    3\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$15}\n  >\n    +\n  </button>\n  <button\n    className="col-span-3 rounded border-none bg-stone-500 text-white"\n    onClick={$16}\n  >\n    0\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$17}\n  >\n    =\n  </button>\n</div>',
        '<div className="grid grid-rows-6 grid-cols-4 gap-1">\n  <div className="text-lg font-semibold col-span-4 text-right bg-stone-200 rounded px-2">{59}</div>\n  <button\n    className="rounded border-none bg-stone-400 text-white"\n    onClick={$0}\n  >\n    AC\n  </button>\n  <button\n    className="rounded border-none bg-stone-400 text-white"\n    onClick={$1}\n  >\n    +/-\n  </button>\n  <button\n    className="rounded border-none bg-stone-400 text-white"\n    onClick={$2}\n  >\n    %\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$3}\n  >\n    /\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$4}\n  >\n    7\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$5}\n  >\n    8\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$6}\n  >\n    9\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$7}\n  >\n    x\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$8}\n  >\n    4\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$9}\n  >\n    5\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$10}\n  >\n    6\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$11}\n  >\n    -\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$12}\n  >\n    1\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$13}\n  >\n    2\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$14}\n  >\n    3\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$15}\n  >\n    +\n  </button>\n  <button\n    className="col-span-3 rounded border-none bg-stone-500 text-white"\n    onClick={$16}\n  >\n    0\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$17}\n  >\n    =\n  </button>\n</div>',
      ],
    },
    {
      timeline: [
        {
          TAG: "Action",
          _0: {
            label: {
              TAG: "Label",
              _0: 12,
              _1: null,
            },
            action_type: "Click",
          },
        },
        {
          TAG: "Edit",
          _0: {
            hd: {
              TAG: "Index",
              _0: 0,
            },
            tl: {
              hd: {
                TAG: "Index",
                _0: 0,
              },
              tl: 0,
            },
          },
          _1: {
            TAG: "ConstReplace",
            _0: {
              TAG: "Int",
              _0: 1,
            },
          },
        },
        {
          TAG: "Action",
          _0: {
            label: {
              TAG: "Label",
              _0: 1,
              _1: null,
            },
            action_type: "Click",
          },
        },
        {
          TAG: "Edit",
          _0: {
            hd: {
              TAG: "Index",
              _0: 0,
            },
            tl: {
              hd: {
                TAG: "Index",
                _0: 0,
              },
              tl: 0,
            },
          },
          _1: {
            TAG: "ConstReplace",
            _0: {
              TAG: "Int",
              _0: -1,
            },
          },
        },
        {
          TAG: "Action",
          _0: {
            label: {
              TAG: "Label",
              _0: 1,
              _1: null,
            },
            action_type: "Click",
          },
        },
        {
          TAG: "Edit",
          _0: {
            hd: {
              TAG: "Index",
              _0: 0,
            },
            tl: {
              hd: {
                TAG: "Index",
                _0: 0,
              },
              tl: 0,
            },
          },
          _1: {
            TAG: "ConstReplace",
            _0: {
              TAG: "Int",
              _0: 1,
            },
          },
        },
        {
          TAG: "Action",
          _0: {
            label: {
              TAG: "Label",
              _0: 0,
              _1: null,
            },
            action_type: "Click",
          },
        },
        {
          TAG: "Edit",
          _0: {
            hd: {
              TAG: "Index",
              _0: 0,
            },
            tl: {
              hd: {
                TAG: "Index",
                _0: 0,
              },
              tl: 0,
            },
          },
          _1: {
            TAG: "ConstReplace",
            _0: {
              TAG: "Int",
              _0: 0,
            },
          },
        },
      ],
      snapshots: [
        '<div className="grid grid-rows-6 grid-cols-4 gap-1">\n  <div className="text-lg font-semibold col-span-4 text-right bg-stone-200 rounded px-2">{0}</div>\n  <button\n    className="rounded border-none bg-stone-400 text-white"\n    onClick={$0}\n  >\n    AC\n  </button>\n  <button\n    className="rounded border-none bg-stone-400 text-white"\n    onClick={$1}\n  >\n    +/-\n  </button>\n  <button\n    className="rounded border-none bg-stone-400 text-white"\n    onClick={$2}\n  >\n    %\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$3}\n  >\n    /\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$4}\n  >\n    7\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$5}\n  >\n    8\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$6}\n  >\n    9\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$7}\n  >\n    x\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$8}\n  >\n    4\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$9}\n  >\n    5\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$10}\n  >\n    6\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$11}\n  >\n    -\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$12}\n  >\n    1\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$13}\n  >\n    2\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$14}\n  >\n    3\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$15}\n  >\n    +\n  </button>\n  <button\n    className="col-span-3 rounded border-none bg-stone-500 text-white"\n    onClick={$16}\n  >\n    0\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$17}\n  >\n    =\n  </button>\n</div>',
        '<div className="grid grid-rows-6 grid-cols-4 gap-1">\n  <div className="text-lg font-semibold col-span-4 text-right bg-stone-200 rounded px-2">{1}</div>\n  <button\n    className="rounded border-none bg-stone-400 text-white"\n    onClick={$0}\n  >\n    AC\n  </button>\n  <button\n    className="rounded border-none bg-stone-400 text-white"\n    onClick={$1}\n  >\n    +/-\n  </button>\n  <button\n    className="rounded border-none bg-stone-400 text-white"\n    onClick={$2}\n  >\n    %\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$3}\n  >\n    /\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$4}\n  >\n    7\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$5}\n  >\n    8\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$6}\n  >\n    9\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$7}\n  >\n    x\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$8}\n  >\n    4\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$9}\n  >\n    5\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$10}\n  >\n    6\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$11}\n  >\n    -\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$12}\n  >\n    1\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$13}\n  >\n    2\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$14}\n  >\n    3\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$15}\n  >\n    +\n  </button>\n  <button\n    className="col-span-3 rounded border-none bg-stone-500 text-white"\n    onClick={$16}\n  >\n    0\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$17}\n  >\n    =\n  </button>\n</div>',
        '<div className="grid grid-rows-6 grid-cols-4 gap-1">\n  <div className="text-lg font-semibold col-span-4 text-right bg-stone-200 rounded px-2">{1}</div>\n  <button\n    className="rounded border-none bg-stone-400 text-white"\n    onClick={$0}\n  >\n    AC\n  </button>\n  <button\n    className="rounded border-none bg-stone-400 text-white"\n    onClick={$1}\n  >\n    +/-\n  </button>\n  <button\n    className="rounded border-none bg-stone-400 text-white"\n    onClick={$2}\n  >\n    %\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$3}\n  >\n    /\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$4}\n  >\n    7\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$5}\n  >\n    8\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$6}\n  >\n    9\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$7}\n  >\n    x\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$8}\n  >\n    4\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$9}\n  >\n    5\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$10}\n  >\n    6\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$11}\n  >\n    -\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$12}\n  >\n    1\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$13}\n  >\n    2\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$14}\n  >\n    3\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$15}\n  >\n    +\n  </button>\n  <button\n    className="col-span-3 rounded border-none bg-stone-500 text-white"\n    onClick={$16}\n  >\n    0\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$17}\n  >\n    =\n  </button>\n</div>',
        '<div className="grid grid-rows-6 grid-cols-4 gap-1">\n  <div className="text-lg font-semibold col-span-4 text-right bg-stone-200 rounded px-2">{-1}</div>\n  <button\n    className="rounded border-none bg-stone-400 text-white"\n    onClick={$0}\n  >\n    AC\n  </button>\n  <button\n    className="rounded border-none bg-stone-400 text-white"\n    onClick={$1}\n  >\n    +/-\n  </button>\n  <button\n    className="rounded border-none bg-stone-400 text-white"\n    onClick={$2}\n  >\n    %\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$3}\n  >\n    /\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$4}\n  >\n    7\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$5}\n  >\n    8\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$6}\n  >\n    9\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$7}\n  >\n    x\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$8}\n  >\n    4\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$9}\n  >\n    5\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$10}\n  >\n    6\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$11}\n  >\n    -\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$12}\n  >\n    1\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$13}\n  >\n    2\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$14}\n  >\n    3\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$15}\n  >\n    +\n  </button>\n  <button\n    className="col-span-3 rounded border-none bg-stone-500 text-white"\n    onClick={$16}\n  >\n    0\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$17}\n  >\n    =\n  </button>\n</div>',
        '<div className="grid grid-rows-6 grid-cols-4 gap-1">\n  <div className="text-lg font-semibold col-span-4 text-right bg-stone-200 rounded px-2">{-1}</div>\n  <button\n    className="rounded border-none bg-stone-400 text-white"\n    onClick={$0}\n  >\n    AC\n  </button>\n  <button\n    className="rounded border-none bg-stone-400 text-white"\n    onClick={$1}\n  >\n    +/-\n  </button>\n  <button\n    className="rounded border-none bg-stone-400 text-white"\n    onClick={$2}\n  >\n    %\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$3}\n  >\n    /\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$4}\n  >\n    7\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$5}\n  >\n    8\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$6}\n  >\n    9\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$7}\n  >\n    x\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$8}\n  >\n    4\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$9}\n  >\n    5\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$10}\n  >\n    6\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$11}\n  >\n    -\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$12}\n  >\n    1\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$13}\n  >\n    2\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$14}\n  >\n    3\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$15}\n  >\n    +\n  </button>\n  <button\n    className="col-span-3 rounded border-none bg-stone-500 text-white"\n    onClick={$16}\n  >\n    0\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$17}\n  >\n    =\n  </button>\n</div>',
        '<div className="grid grid-rows-6 grid-cols-4 gap-1">\n  <div className="text-lg font-semibold col-span-4 text-right bg-stone-200 rounded px-2">{1}</div>\n  <button\n    className="rounded border-none bg-stone-400 text-white"\n    onClick={$0}\n  >\n    AC\n  </button>\n  <button\n    className="rounded border-none bg-stone-400 text-white"\n    onClick={$1}\n  >\n    +/-\n  </button>\n  <button\n    className="rounded border-none bg-stone-400 text-white"\n    onClick={$2}\n  >\n    %\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$3}\n  >\n    /\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$4}\n  >\n    7\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$5}\n  >\n    8\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$6}\n  >\n    9\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$7}\n  >\n    x\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$8}\n  >\n    4\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$9}\n  >\n    5\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$10}\n  >\n    6\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$11}\n  >\n    -\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$12}\n  >\n    1\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$13}\n  >\n    2\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$14}\n  >\n    3\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$15}\n  >\n    +\n  </button>\n  <button\n    className="col-span-3 rounded border-none bg-stone-500 text-white"\n    onClick={$16}\n  >\n    0\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$17}\n  >\n    =\n  </button>\n</div>',
        '<div className="grid grid-rows-6 grid-cols-4 gap-1">\n  <div className="text-lg font-semibold col-span-4 text-right bg-stone-200 rounded px-2">{1}</div>\n  <button\n    className="rounded border-none bg-stone-400 text-white"\n    onClick={$0}\n  >\n    AC\n  </button>\n  <button\n    className="rounded border-none bg-stone-400 text-white"\n    onClick={$1}\n  >\n    +/-\n  </button>\n  <button\n    className="rounded border-none bg-stone-400 text-white"\n    onClick={$2}\n  >\n    %\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$3}\n  >\n    /\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$4}\n  >\n    7\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$5}\n  >\n    8\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$6}\n  >\n    9\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$7}\n  >\n    x\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$8}\n  >\n    4\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$9}\n  >\n    5\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$10}\n  >\n    6\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$11}\n  >\n    -\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$12}\n  >\n    1\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$13}\n  >\n    2\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$14}\n  >\n    3\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$15}\n  >\n    +\n  </button>\n  <button\n    className="col-span-3 rounded border-none bg-stone-500 text-white"\n    onClick={$16}\n  >\n    0\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$17}\n  >\n    =\n  </button>\n</div>',
        '<div className="grid grid-rows-6 grid-cols-4 gap-1">\n  <div className="text-lg font-semibold col-span-4 text-right bg-stone-200 rounded px-2">{0}</div>\n  <button\n    className="rounded border-none bg-stone-400 text-white"\n    onClick={$0}\n  >\n    AC\n  </button>\n  <button\n    className="rounded border-none bg-stone-400 text-white"\n    onClick={$1}\n  >\n    +/-\n  </button>\n  <button\n    className="rounded border-none bg-stone-400 text-white"\n    onClick={$2}\n  >\n    %\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$3}\n  >\n    /\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$4}\n  >\n    7\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$5}\n  >\n    8\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$6}\n  >\n    9\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$7}\n  >\n    x\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$8}\n  >\n    4\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$9}\n  >\n    5\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$10}\n  >\n    6\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$11}\n  >\n    -\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$12}\n  >\n    1\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$13}\n  >\n    2\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$14}\n  >\n    3\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$15}\n  >\n    +\n  </button>\n  <button\n    className="col-span-3 rounded border-none bg-stone-500 text-white"\n    onClick={$16}\n  >\n    0\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$17}\n  >\n    =\n  </button>\n</div>',
      ],
    },
    {
      timeline: [
        {
          TAG: "Action",
          _0: {
            label: {
              TAG: "Label",
              _0: 9,
              _1: null,
            },
            action_type: "Click",
          },
        },
        {
          TAG: "Edit",
          _0: {
            hd: {
              TAG: "Index",
              _0: 0,
            },
            tl: {
              hd: {
                TAG: "Index",
                _0: 0,
              },
              tl: 0,
            },
          },
          _1: {
            TAG: "ConstReplace",
            _0: {
              TAG: "Int",
              _0: 5,
            },
          },
        },
        {
          TAG: "Action",
          _0: {
            label: {
              TAG: "Label",
              _0: 3,
              _1: null,
            },
            action_type: "Click",
          },
        },
        {
          TAG: "Edit",
          _0: {
            hd: {
              TAG: "Index",
              _0: 4,
            },
            tl: 0,
          },
          _1: {
            TAG: "AttributeReplace",
            _0: "className",
            _1: {
              TAG: "String",
              _0: "rounded border-none bg-orange-600 text-white",
            },
          },
        },
        {
          TAG: "Edit",
          _0: {
            hd: {
              TAG: "Index",
              _0: 0,
            },
            tl: {
              hd: {
                TAG: "Index",
                _0: 0,
              },
              tl: 0,
            },
          },
          _1: {
            TAG: "ConstReplace",
            _0: {
              TAG: "Int",
              _0: 0,
            },
          },
        },
        {
          TAG: "Action",
          _0: {
            label: {
              TAG: "Label",
              _0: 9,
              _1: null,
            },
            action_type: "Click",
          },
        },
        {
          TAG: "Edit",
          _0: {
            hd: {
              TAG: "Index",
              _0: 0,
            },
            tl: {
              hd: {
                TAG: "Index",
                _0: 0,
              },
              tl: 0,
            },
          },
          _1: {
            TAG: "ConstReplace",
            _0: {
              TAG: "Int",
              _0: 5,
            },
          },
        },
        {
          TAG: "Action",
          _0: {
            label: {
              TAG: "Label",
              _0: 17,
              _1: null,
            },
            action_type: "Click",
          },
        },
        {
          TAG: "Edit",
          _0: {
            hd: {
              TAG: "Index",
              _0: 4,
            },
            tl: 0,
          },
          _1: {
            TAG: "AttributeReplace",
            _0: "className",
            _1: {
              TAG: "String",
              _0: "rounded border-none bg-orange-400 text-white",
            },
          },
        },
        {
          TAG: "Edit",
          _0: {
            hd: {
              TAG: "Index",
              _0: 0,
            },
            tl: {
              hd: {
                TAG: "Index",
                _0: 0,
              },
              tl: 0,
            },
          },
          _1: {
            TAG: "ConstReplace",
            _0: {
              TAG: "Int",
              _0: 1,
            },
          },
        },
      ],
      snapshots: [
        '<div className="grid grid-rows-6 grid-cols-4 gap-1">\n  <div className="text-lg font-semibold col-span-4 text-right bg-stone-200 rounded px-2">{0}</div>\n  <button\n    className="rounded border-none bg-stone-400 text-white"\n    onClick={$0}\n  >\n    AC\n  </button>\n  <button\n    className="rounded border-none bg-stone-400 text-white"\n    onClick={$1}\n  >\n    +/-\n  </button>\n  <button\n    className="rounded border-none bg-stone-400 text-white"\n    onClick={$2}\n  >\n    %\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$3}\n  >\n    /\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$4}\n  >\n    7\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$5}\n  >\n    8\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$6}\n  >\n    9\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$7}\n  >\n    x\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$8}\n  >\n    4\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$9}\n  >\n    5\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$10}\n  >\n    6\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$11}\n  >\n    -\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$12}\n  >\n    1\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$13}\n  >\n    2\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$14}\n  >\n    3\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$15}\n  >\n    +\n  </button>\n  <button\n    className="col-span-3 rounded border-none bg-stone-500 text-white"\n    onClick={$16}\n  >\n    0\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$17}\n  >\n    =\n  </button>\n</div>',
        '<div className="grid grid-rows-6 grid-cols-4 gap-1">\n  <div className="text-lg font-semibold col-span-4 text-right bg-stone-200 rounded px-2">{5}</div>\n  <button\n    className="rounded border-none bg-stone-400 text-white"\n    onClick={$0}\n  >\n    AC\n  </button>\n  <button\n    className="rounded border-none bg-stone-400 text-white"\n    onClick={$1}\n  >\n    +/-\n  </button>\n  <button\n    className="rounded border-none bg-stone-400 text-white"\n    onClick={$2}\n  >\n    %\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$3}\n  >\n    /\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$4}\n  >\n    7\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$5}\n  >\n    8\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$6}\n  >\n    9\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$7}\n  >\n    x\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$8}\n  >\n    4\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$9}\n  >\n    5\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$10}\n  >\n    6\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$11}\n  >\n    -\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$12}\n  >\n    1\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$13}\n  >\n    2\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$14}\n  >\n    3\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$15}\n  >\n    +\n  </button>\n  <button\n    className="col-span-3 rounded border-none bg-stone-500 text-white"\n    onClick={$16}\n  >\n    0\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$17}\n  >\n    =\n  </button>\n</div>',
        '<div className="grid grid-rows-6 grid-cols-4 gap-1">\n  <div className="text-lg font-semibold col-span-4 text-right bg-stone-200 rounded px-2">{5}</div>\n  <button\n    className="rounded border-none bg-stone-400 text-white"\n    onClick={$0}\n  >\n    AC\n  </button>\n  <button\n    className="rounded border-none bg-stone-400 text-white"\n    onClick={$1}\n  >\n    +/-\n  </button>\n  <button\n    className="rounded border-none bg-stone-400 text-white"\n    onClick={$2}\n  >\n    %\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$3}\n  >\n    /\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$4}\n  >\n    7\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$5}\n  >\n    8\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$6}\n  >\n    9\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$7}\n  >\n    x\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$8}\n  >\n    4\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$9}\n  >\n    5\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$10}\n  >\n    6\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$11}\n  >\n    -\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$12}\n  >\n    1\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$13}\n  >\n    2\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$14}\n  >\n    3\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$15}\n  >\n    +\n  </button>\n  <button\n    className="col-span-3 rounded border-none bg-stone-500 text-white"\n    onClick={$16}\n  >\n    0\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$17}\n  >\n    =\n  </button>\n</div>',
        '<div className="grid grid-rows-6 grid-cols-4 gap-1">\n  <div className="text-lg font-semibold col-span-4 text-right bg-stone-200 rounded px-2">{5}</div>\n  <button\n    className="rounded border-none bg-stone-400 text-white"\n    onClick={$0}\n  >\n    AC\n  </button>\n  <button\n    className="rounded border-none bg-stone-400 text-white"\n    onClick={$1}\n  >\n    +/-\n  </button>\n  <button\n    className="rounded border-none bg-stone-400 text-white"\n    onClick={$2}\n  >\n    %\n  </button>\n  <button\n    className="rounded border-none bg-orange-600 text-white"\n    onClick={$3}\n  >\n    /\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$4}\n  >\n    7\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$5}\n  >\n    8\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$6}\n  >\n    9\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$7}\n  >\n    x\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$8}\n  >\n    4\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$9}\n  >\n    5\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$10}\n  >\n    6\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$11}\n  >\n    -\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$12}\n  >\n    1\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$13}\n  >\n    2\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$14}\n  >\n    3\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$15}\n  >\n    +\n  </button>\n  <button\n    className="col-span-3 rounded border-none bg-stone-500 text-white"\n    onClick={$16}\n  >\n    0\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$17}\n  >\n    =\n  </button>\n</div>',
        '<div className="grid grid-rows-6 grid-cols-4 gap-1">\n  <div className="text-lg font-semibold col-span-4 text-right bg-stone-200 rounded px-2">{0}</div>\n  <button\n    className="rounded border-none bg-stone-400 text-white"\n    onClick={$0}\n  >\n    AC\n  </button>\n  <button\n    className="rounded border-none bg-stone-400 text-white"\n    onClick={$1}\n  >\n    +/-\n  </button>\n  <button\n    className="rounded border-none bg-stone-400 text-white"\n    onClick={$2}\n  >\n    %\n  </button>\n  <button\n    className="rounded border-none bg-orange-600 text-white"\n    onClick={$3}\n  >\n    /\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$4}\n  >\n    7\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$5}\n  >\n    8\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$6}\n  >\n    9\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$7}\n  >\n    x\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$8}\n  >\n    4\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$9}\n  >\n    5\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$10}\n  >\n    6\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$11}\n  >\n    -\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$12}\n  >\n    1\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$13}\n  >\n    2\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$14}\n  >\n    3\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$15}\n  >\n    +\n  </button>\n  <button\n    className="col-span-3 rounded border-none bg-stone-500 text-white"\n    onClick={$16}\n  >\n    0\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$17}\n  >\n    =\n  </button>\n</div>',
        '<div className="grid grid-rows-6 grid-cols-4 gap-1">\n  <div className="text-lg font-semibold col-span-4 text-right bg-stone-200 rounded px-2">{0}</div>\n  <button\n    className="rounded border-none bg-stone-400 text-white"\n    onClick={$0}\n  >\n    AC\n  </button>\n  <button\n    className="rounded border-none bg-stone-400 text-white"\n    onClick={$1}\n  >\n    +/-\n  </button>\n  <button\n    className="rounded border-none bg-stone-400 text-white"\n    onClick={$2}\n  >\n    %\n  </button>\n  <button\n    className="rounded border-none bg-orange-600 text-white"\n    onClick={$3}\n  >\n    /\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$4}\n  >\n    7\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$5}\n  >\n    8\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$6}\n  >\n    9\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$7}\n  >\n    x\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$8}\n  >\n    4\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$9}\n  >\n    5\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$10}\n  >\n    6\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$11}\n  >\n    -\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$12}\n  >\n    1\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$13}\n  >\n    2\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$14}\n  >\n    3\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$15}\n  >\n    +\n  </button>\n  <button\n    className="col-span-3 rounded border-none bg-stone-500 text-white"\n    onClick={$16}\n  >\n    0\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$17}\n  >\n    =\n  </button>\n</div>',
        '<div className="grid grid-rows-6 grid-cols-4 gap-1">\n  <div className="text-lg font-semibold col-span-4 text-right bg-stone-200 rounded px-2">{5}</div>\n  <button\n    className="rounded border-none bg-stone-400 text-white"\n    onClick={$0}\n  >\n    AC\n  </button>\n  <button\n    className="rounded border-none bg-stone-400 text-white"\n    onClick={$1}\n  >\n    +/-\n  </button>\n  <button\n    className="rounded border-none bg-stone-400 text-white"\n    onClick={$2}\n  >\n    %\n  </button>\n  <button\n    className="rounded border-none bg-orange-600 text-white"\n    onClick={$3}\n  >\n    /\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$4}\n  >\n    7\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$5}\n  >\n    8\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$6}\n  >\n    9\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$7}\n  >\n    x\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$8}\n  >\n    4\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$9}\n  >\n    5\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$10}\n  >\n    6\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$11}\n  >\n    -\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$12}\n  >\n    1\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$13}\n  >\n    2\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$14}\n  >\n    3\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$15}\n  >\n    +\n  </button>\n  <button\n    className="col-span-3 rounded border-none bg-stone-500 text-white"\n    onClick={$16}\n  >\n    0\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$17}\n  >\n    =\n  </button>\n</div>',
        '<div className="grid grid-rows-6 grid-cols-4 gap-1">\n  <div className="text-lg font-semibold col-span-4 text-right bg-stone-200 rounded px-2">{5}</div>\n  <button\n    className="rounded border-none bg-stone-400 text-white"\n    onClick={$0}\n  >\n    AC\n  </button>\n  <button\n    className="rounded border-none bg-stone-400 text-white"\n    onClick={$1}\n  >\n    +/-\n  </button>\n  <button\n    className="rounded border-none bg-stone-400 text-white"\n    onClick={$2}\n  >\n    %\n  </button>\n  <button\n    className="rounded border-none bg-orange-600 text-white"\n    onClick={$3}\n  >\n    /\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$4}\n  >\n    7\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$5}\n  >\n    8\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$6}\n  >\n    9\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$7}\n  >\n    x\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$8}\n  >\n    4\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$9}\n  >\n    5\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$10}\n  >\n    6\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$11}\n  >\n    -\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$12}\n  >\n    1\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$13}\n  >\n    2\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$14}\n  >\n    3\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$15}\n  >\n    +\n  </button>\n  <button\n    className="col-span-3 rounded border-none bg-stone-500 text-white"\n    onClick={$16}\n  >\n    0\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$17}\n  >\n    =\n  </button>\n</div>',
        '<div className="grid grid-rows-6 grid-cols-4 gap-1">\n  <div className="text-lg font-semibold col-span-4 text-right bg-stone-200 rounded px-2">{5}</div>\n  <button\n    className="rounded border-none bg-stone-400 text-white"\n    onClick={$0}\n  >\n    AC\n  </button>\n  <button\n    className="rounded border-none bg-stone-400 text-white"\n    onClick={$1}\n  >\n    +/-\n  </button>\n  <button\n    className="rounded border-none bg-stone-400 text-white"\n    onClick={$2}\n  >\n    %\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$3}\n  >\n    /\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$4}\n  >\n    7\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$5}\n  >\n    8\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$6}\n  >\n    9\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$7}\n  >\n    x\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$8}\n  >\n    4\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$9}\n  >\n    5\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$10}\n  >\n    6\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$11}\n  >\n    -\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$12}\n  >\n    1\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$13}\n  >\n    2\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$14}\n  >\n    3\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$15}\n  >\n    +\n  </button>\n  <button\n    className="col-span-3 rounded border-none bg-stone-500 text-white"\n    onClick={$16}\n  >\n    0\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$17}\n  >\n    =\n  </button>\n</div>',
        '<div className="grid grid-rows-6 grid-cols-4 gap-1">\n  <div className="text-lg font-semibold col-span-4 text-right bg-stone-200 rounded px-2">{1}</div>\n  <button\n    className="rounded border-none bg-stone-400 text-white"\n    onClick={$0}\n  >\n    AC\n  </button>\n  <button\n    className="rounded border-none bg-stone-400 text-white"\n    onClick={$1}\n  >\n    +/-\n  </button>\n  <button\n    className="rounded border-none bg-stone-400 text-white"\n    onClick={$2}\n  >\n    %\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$3}\n  >\n    /\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$4}\n  >\n    7\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$5}\n  >\n    8\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$6}\n  >\n    9\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$7}\n  >\n    x\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$8}\n  >\n    4\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$9}\n  >\n    5\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$10}\n  >\n    6\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$11}\n  >\n    -\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$12}\n  >\n    1\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$13}\n  >\n    2\n  </button>\n  <button\n    className="rounded border-none bg-stone-500 text-white"\n    onClick={$14}\n  >\n    3\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$15}\n  >\n    +\n  </button>\n  <button\n    className="col-span-3 rounded border-none bg-stone-500 text-white"\n    onClick={$16}\n  >\n    0\n  </button>\n  <button\n    className="rounded border-none bg-orange-400 text-white"\n    onClick={$17}\n  >\n    =\n  </button>\n</div>',
      ],
    },
  ] as unknown as TimelineInfo[],
]);

export default samples;
