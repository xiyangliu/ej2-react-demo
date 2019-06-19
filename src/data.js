export const nodes = [
  { id: "Action", shape: { type: "UmlActivity", shape: "Action" } },
  { id: "Decision", shape: { type: "UmlActivity", shape: "Decision" } },
  { id: "MergeNode", shape: { type: "UmlActivity", shape: "MergeNode" } },
  { id: "InitialNode", shape: { type: "UmlActivity", shape: "InitialNode" } },
  { id: "FinalNode", shape: { type: "UmlActivity", shape: "FinalNode" } },
  { id: "ForkNode", shape: { type: "UmlActivity", shape: "ForkNode" } },
  { id: "JoinNode", shape: { type: "UmlActivity", shape: "JoinNode" } },
  { id: "TimeEvent", shape: { type: "UmlActivity", shape: "TimeEvent" } }
];

export const ports = {
  Action: [
    {
      offset: { x: 0, y: 0.5 },
      text: "IN - 1"
    },
    {
      offset: { x: 1, y: 0.5 },
      text: "OUT - 1"
    },
    {
      offset: { x: 0.5, y: 1 },
      text: "OUT - 2"
    },
    {
      offset: { x: 0.5, y: 0 },
      text: "IN - 2"
    }
  ],
  Decision: [
    {
      offset: { x: 0, y: 0.5 },
      text: "OUT - 1"
    },
    {
      offset: { x: 1, y: 0.5 },
      text: "OUT - 2"
    },
    {
      offset: { x: 0.5, y: 1 },
      text: "IN - 1"
    },
    {
      offset: { x: 0.5, y: 0 },
      text: "OUT - 3"
    }
  ],
  MergeNode: [
    {
      offset: { x: 0, y: 0.5 },
      text: "OUT - 1"
    },
    {
      offset: { x: 1, y: 0.5 },
      text: "OUT - 2"
    },
    {
      offset: { x: 0.5, y: 1 },
      text: "IN - 1"
    },
    {
      offset: { x: 0.5, y: 0 },
      text: "OUT - 3"
    }
  ],
  InitialNode: [
    {
      offset: { x: 1, y: 0.5 },
      text: "OUT - 1"
    }
  ],
  FinalNode: [
    {
      offset: { x: 0, y: 0.5 },
      text: "IN - 1"
    }
  ],
  ForkNode: [
    {
      offset: { x: 0.5, y: 1 },
      text: "IN - 1"
    },
    {
      offset: { x: 0.5, y: 0 },
      text: "OUT - 1"
    }
  ],
  JoinNode: [
    {
      offset: { x: 0, y: 0.5 },
      text: "IN - 1"
    },
    {
      offset: { x: 1, y: 0.5 },
      text: "OUT - 1"
    }
  ],
  TimeEvent: [
    {
      offset: { x: 0.5, y: 1 },
      text: "IN - 1"
    },
    {
      offset: { x: 0.5, y: 0 },
      text: "OUT - 1"
    }
  ]
};
