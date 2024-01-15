const breakpoints = [4320, 2160, 1080, 640, 384, 256, 128];

// Define an array to hold your own image information
const yourPhotos = [
  {
    src: require("../static/galleryimages/PAN_9809.JPG"),
    width: 1080,
    height: 720,
  },
  {
    src: require("../static/galleryimages/PAN_9800.JPG"),
    width: 1080,
    height: 720,
  },
  {
    src: require("../static/galleryimages/PAN_9794.JPG"),
    width: 1080,
    height: 720,
  },
  {
    src: require("../static/galleryimages/IMG_20240107_131126.jpg"),
    width: 1080,
    height: 720,
  },
  {
    src: require("../static/galleryimages/PAN_9802.JPG"),
    width: 1080,
    height: 720,
  },
  {
    src: require("../static/galleryimages/PAN_9804.JPG"),
    width: 1080,
    height: 720,
  },
  {
    src: require("../static/galleryimages/PAN_9832.JPG"),
    width: 1080,
    height: 720,
  },
  {
    src: require("../static/galleryimages/PAN_9791.JPG"),
    width: 1080,
    height: 720,
  },
  {
    src: require("../static/galleryimages/PAN_9821.JPG"),
    width: 1080,
    height: 720,
  },
  {
    src: require("../static/galleryimages/PAN_9799.JPG"),
    width: 1080,
    height: 720,
  },
  {
    src: require("../static/galleryimages/IMG_20240107_131019.jpg"),
    width: 1080,
    height: 720,
  },
  {
    src: require("../static/galleryimages/PAN_9831.JPG"),
    width: 1080,
    height: 720,
  },
  {
    src: require("../static/galleryimages/PAN_9807.JPG"),
    width: 1080,
    height: 720,
  },
  {
    src: require("../static/galleryimages/PAN_9812.JPG"),
    width: 1080,
    height: 720,
  },
  {
    src: require("../static/galleryimages/PAN_9798.JPG"),
    width: 1080,
    height: 720,
  },
  {
    src: require("../static/galleryimages/PAN_9784.JPG"),
    width: 1080,
    height: 720,
  },
  {
    src: require("../static/galleryimages/PAN_9810.JPG"),
    width: 1080,
    height: 720,
  },
  {
    src: require("../static/galleryimages/PAN_9808.JPG"),
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
