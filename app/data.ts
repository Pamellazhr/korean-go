export const data = {
  scenes: [
    {
      id: "0",
      name: "Default",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
      ],
      faceSize: 512,
      initialViewParameters: {
        yaw: 0,
        pitch: 0.1,
        fov: 2,
      },
      linkHotspots: [],
      infoHotspots: [],
    },
  ],
  name: "JapanTrip",
  settings: {
    mouseViewMode: "drag",
    autorotateEnabled: true,
    fullscreenButton: false,
    viewControlButtons: false,
  },
};
