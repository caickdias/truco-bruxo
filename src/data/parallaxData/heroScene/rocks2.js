const END = 1000;
const TRANSLATEY = 1300;
const TRANSLATEX = 500;

const rocks2LeftPlxData = [
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
        endValue: TRANSLATEX * -1 -2000,
        property: "translateX",
      },
      {
        startValue: 1,
        endValue: TRANSLATEY - 500,
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

const rocks2RightPlxData = [
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
  rocks2LeftPlxData,
  rocks2RightPlxData
}