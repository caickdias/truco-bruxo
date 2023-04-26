const END = 1000;
const TRANSLATEX = 500;

const skyLeftPlxData = [
  {
    start: 0,
    end: END,
    properties: [
      {
        startValue: 1,
        endValue: 2,
        property: "scale",
      },      
      {
        startValue: 1,
        endValue: TRANSLATEX * -1 -500,
        property: "translateX",
      },
      {
        startValue: 1,
        endValue: 0,
        property: "opacity",
      },
    ],
  },
];

const skyRightPlxData = [
  {
    start: 0,
    end: END,
    properties: [
      {
        startValue: 1,
        endValue: 2,
        property: "scale",
      },      
      {
        startValue: 1,
        endValue: TRANSLATEX,
        property: "translateX",
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
  skyLeftPlxData,
  skyRightPlxData
}