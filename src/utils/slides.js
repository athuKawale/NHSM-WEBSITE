const breakpoints = [4320, 2160, 1080, 640, 384, 256, 128];

// Define an array to hold your own image information
const yourPhotos = [
  {
    src: require("../static/images/1.jpeg"), // Replace with the actual path to your image
    width: 1080,
    height: 720,
  },
  {
    src: require("../static/images/2.jpg"), // Replace with the actual path to your image
    width: 1080,
    height: 720,
  },
  {
    src: require("../static/images/3.jpg"), // Replace with the actual path to your image
    width: 1080,
    height: 720,
  },
  {
    src: require("../static/images/4.jpg"), // Replace with the actual path to your image
    width: 1080,
    height: 720,
  },
  {
    src: require("../static/images/5.jpg"), // Replace with the actual path to your image
    width: 1080,
    height: 720,
  },
  // ... add more images as needed
];

export const slides = yourPhotos.map((photo) => {
  const width = photo.width * 4;
  const height = photo.height * 4;
  return {
    src: photo.src, // Use the direct image path here
    width,
    height,
    srcSet: breakpoints.map((breakpoint) => {
      const breakpointHeight = Math.round((height / width) * breakpoint);
      return {
        src: photo.src, // Use the direct image path for srcSet as well
        width: breakpoint,
        height: breakpointHeight,
      };
    }),
  };
});

export default slides;
