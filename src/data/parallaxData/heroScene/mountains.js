const END = 500;
const TRANSLATEY = 1000;
const TRANSLATEX = 500;

const mountainsPlxData = [
  {
    start: 0,
    end: END,
    easing: [0.85, 0.2, 0.1, 1],
    properties: [
      {
        startValue: 1,
        endValue: 3,
        property: "scale",
      },      
      {
        startValue: 1,
        endValue: TRANSLATEX * -1,
        property: "translateX",
      },
      {
        startValue: 1,
        endValue: TRANSLATEY,
        property: "translateY",
      },
      {
        startValue: 1,
        endValue: 0,
        property: "opacity",
      },
    ],
  },
];

export {
    mountainsPlxData
}