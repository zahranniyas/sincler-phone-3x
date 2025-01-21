import {
  blackImg,
  // blueImg,
  redImg,
  // whiteImg,
  greenImg,
  blueImg,
  vid,
} from "../utils";

export const navLists = ["Home", "Features", "3D View", "Material", "Contact"];

export const hightlightsSlides = [
  {
    id: 1,
    textLists: ["S-Chip 4.", "Powerhouse chip.", "Groundbreaking performance."],
    video: vid.highlightOne,
    videoDuration: 4,
  },
  {
    id: 2,
    textLists: ["6,000 mAh.", "The biggest battery among Flagships"],
    video: vid.highlightTwo,
    videoDuration: 4,
  },
  {
    id: 3,
    textLists: [
      "200 MP Main Wide Camera",
      "with a 50 MP ultrawide",
      "Say Goodbye to Professional Cameras",
    ],
    video: vid.highlightThree,
    videoDuration: 4,
  },
  {
    id: 4,
    textLists: [
      "Under-display Ultrasonic biometrics",
      "Always keeps you secure",
    ],
    video: vid.highlightFour,
    videoDuration: 4,
  },
];

export const models = [
  {
    id: 1,
    title: "Sincler 3x in Blue",
    color: ["#4d7e9c", "#68b5e6", "#082330"],
    img: blueImg,
  },
  {
    id: 2,
    title: "Sincler 3x in Red",
    color: ["#6d535d", "#e73f60", "#2d2025"],
    img: redImg,
  },
  {
    id: 3,
    title: "Sincler 3x in Green",
    color: ["#626b53", "#6a9925", "#272b1f"],
    img: greenImg,
  },
  {
    id: 4,
    title: "Sincler 3x in Black",
    color: ["#454749", "#3b3b3b", "#181819"],
    img: blackImg,
  },
];

export const sizes = [
  { label: '6.1"', value: "small" },
  { label: '6.7"', value: "large" },
];

export const footerLinks = [
  "Privacy Policy",
  "Terms of Use",
  "Sales Policy",
  "Legal",
  "Site Map",
];
