export default {
  name: "MazeScene",
  children: [
    {
      gameObject: {
        name: "MainCamera", components: [
          { name: "WorldCameraComponent" }
        ]
      }, sx: .75, sy: .75
    },
    {
      gameObject: {
        name: "ScreenCamera", components: [
          { name: "ScreenCameraComponent" }
        ], children: [
          { gameObject: { name: "ScreenTextShadow", components: [{ name: "ScreenTextComponent", args: ["Adventure", { color: "gray" }] }] }, x: 111, y: 21 },
          { gameObject: { name: "ScreenText", components: [{ name: "ScreenTextComponent", args: ["Adventure", { color: "white" }] }] }, x: 110, y: 20 },
        ]
      }
    },
    {
      gameObject: {
        name: "Ground",
        components: [
          { name: "DrawGeometryComponent", args: ["gray"] },
          { name: "RectangleGeometryComponent", args: [640, 480] },
        ]
      }, x:-320, y:-240
    },
    {
      gameObject: {
        name: "EndButton",
        components: [
          { name: "DrawGeometryComponent", args: ["yellow"] },
          { name: "RectangleGeometryComponent", args: [30, 30] },
        ]
      }, x: -315, y: 205
    },
    {
      gameObject: {
        name: "MazeWall",
        components: [
          { name: "DrawGeometryComponent", args: ["blue"] },
          { name: "RectangleGeometryComponent", args: [100, 15] },
        ], children: [
          {
            gameObject: {
              name: "Vertical",
              components: [
                { name: "DrawGeometryComponent", args: ["blue"] },
                { name: "RectangleGeometryComponent", args: [15, 100] },
              ]
            }, x: 42, y: -42
          },
          {
            gameObject: {
              name: "Horizontal",
              components: [
                { name: "DrawGeometryComponent", args: ["blue"] },
                { name: "RectangleGeometryComponent", args: [100, 15] },
              ]
            }, x: 0, y: -44
          },
          {
            gameObject: {
              name: "Vertical",
              components: [
                { name: "DrawGeometryComponent", args: ["blue"] },
                { name: "RectangleGeometryComponent", args: [15, 100] },
              ]
            }, x: -40, y: -88
          },
          {
            gameObject: {
              name: "Vertical",
              components: [
                { name: "DrawGeometryComponent", args: ["blue"] },
                { name: "RectangleGeometryComponent", args: [15, 100] },
              ]
            }, x: -10, y: 0
          },
          {
            gameObject: {
              name: "Vertical",
              components: [
                { name: "DrawGeometryComponent", args: ["blue"] },
                { name: "RectangleGeometryComponent", args: [15, 100] },
              ]
            }, x: -82, y: -135
          },
          {
            gameObject: {
              name: "Horizontal",
              components: [
                { name: "DrawGeometryComponent", args: ["blue"] },
                { name: "RectangleGeometryComponent", args: [100, 15] },
              ]
            }, x: -40, y: 0
          },
          {
            gameObject: {
              name: "Horizontal",
              components: [
                { name: "DrawGeometryComponent", args: ["blue"] },
                { name: "RectangleGeometryComponent", args: [100, 15] },
              ]
            }, x: -80, y: -135
          },
          {
            gameObject: {
              name: "Horizontal",
              components: [
                { name: "DrawGeometryComponent", args: ["blue"] },
                { name: "RectangleGeometryComponent", args: [100, 15] },
              ]
            }, x: -180, y: 0
          },
          {
            gameObject: {
              name: "Vertical",
              components: [
                { name: "DrawGeometryComponent", args: ["blue"] },
                { name: "RectangleGeometryComponent", args: [15, 100] },
              ]
            }, x: -130, y: -100
          },
          {
            gameObject: {
              name: "Vertical",
              components: [
                { name: "DrawGeometryComponent", args: ["blue"] },
                { name: "RectangleGeometryComponent", args: [15, 100] },
              ]
            }, x: -90, y: 0
          },
          {
            gameObject: {
              name: "Horizontal",
              components: [
                { name: "DrawGeometryComponent", args: ["blue"] },
                { name: "RectangleGeometryComponent", args: [100, 15] },
              ]
            }, x: -140, y: 45
          },
          {
            gameObject: {
              name: "Horizontal",
              components: [
                { name: "DrawGeometryComponent", args: ["blue"] },
                { name: "RectangleGeometryComponent", args: [100, 15] },
              ]
            }, x: -45, y: 85
          },
          {
            gameObject: {
              name: "Vertical",
              components: [
                { name: "DrawGeometryComponent", args: ["blue"] },
                { name: "RectangleGeometryComponent", args: [15, 100] },
              ]
            }, x: 5, y: -170
          },
          {
            gameObject: {
              name: "Vertical",
              components: [
                { name: "DrawGeometryComponent", args: ["blue"] },
                { name: "RectangleGeometryComponent", args: [15, 100] },
              ]
            }, x: 50, y: -170
          },
          {
            gameObject: {
              name: "Horizontal",
              components: [
                { name: "DrawGeometryComponent", args: ["blue"] },
                { name: "RectangleGeometryComponent", args: [100, 15] },
              ]
            }, x: 55, y: -85
          },
          {
            gameObject: {
              name: "Vertical",
              components: [
                { name: "DrawGeometryComponent", args: ["blue"] },
                { name: "RectangleGeometryComponent", args: [15, 100] },
              ]
            }, x: 140, y: -80
          },
          {
            gameObject: {
              name: "Vertical",
              components: [
                { name: "DrawGeometryComponent", args: ["blue"] },
                { name: "RectangleGeometryComponent", args: [15, 100] },
              ]
            }, x: 90, y: 0
          },
          {
            gameObject: {
              name: "Horizontal",
              components: [
                { name: "DrawGeometryComponent", args: ["blue"] },
                { name: "RectangleGeometryComponent", args: [100, 15] },
              ]
            }, x: 100, y: 50
          },
          {
            gameObject: {
              name: "Horizontal",
              components: [
                { name: "DrawGeometryComponent", args: ["blue"] },
                { name: "RectangleGeometryComponent", args: [100, 15] },
              ]
            }, x: -225, y: -75
          },
          {
            gameObject: {
              name: "Vertical",
              components: [
                { name: "DrawGeometryComponent", args: ["blue"] },
                { name: "RectangleGeometryComponent", args: [15, 100] },
              ]
            }, x: -190, y: -30
          },
          {
            gameObject: {
              name: "Horizontal",
              components: [
                { name: "DrawGeometryComponent", args: ["blue"] },
                { name: "RectangleGeometryComponent", args: [100, 15] },
              ]
            }, x: -215, y: -150
          },
          {
            gameObject: {
              name: "Vertical",
              components: [
                { name: "DrawGeometryComponent", args: ["blue"] },
                { name: "RectangleGeometryComponent", args: [15, 100] },
              ]
            }, x: -180, y: -205
          },
          {
            gameObject: {
              name: "Vertical",
              components: [
                { name: "DrawGeometryComponent", args: ["blue"] },
                { name: "RectangleGeometryComponent", args: [15, 100] },
              ]
            }, x: -40, y: -230
          },
          {
            gameObject: {
              name: "Horizontal",
              components: [
                { name: "DrawGeometryComponent", args: ["blue"] },
                { name: "RectangleGeometryComponent", args: [100, 15] },
              ]
            }, x: -140, y: -190
          },
          {
            gameObject: {
              name: "Vertical",
              components: [
                { name: "DrawGeometryComponent", args: ["blue"] },
                { name: "RectangleGeometryComponent", args: [15, 75] },
              ]
            }, x: -100, y: -260
          },
          {
            gameObject: {
              name: "Horizontal",
              components: [
                { name: "DrawGeometryComponent", args: ["blue"] },
                { name: "RectangleGeometryComponent", args: [100, 15] },
              ]
            }, x: -190, y: -235
          },
          {
            gameObject: {
              name: "Vertical",
              components: [
                { name: "DrawGeometryComponent", args: ["blue"] },
                { name: "RectangleGeometryComponent", args: [15, 100] },
              ]
            }, x: -230, y: -235
          },
          {
            gameObject: {
              name: "Vertical",
              components: [
                { name: "DrawGeometryComponent", args: ["blue"] },
                { name: "RectangleGeometryComponent", args: [15, 100] },
              ]
            }, x: -260, y: 80
          },
          {
            gameObject: {
              name: "Horizontal",
              components: [
                { name: "DrawGeometryComponent", args: ["blue"] },
                { name: "RectangleGeometryComponent", args: [100, 15] },
              ]
            }, x: -260, y: 170
          },
          {
            gameObject: {
              name: "Horizontal",
              components: [
                { name: "DrawGeometryComponent", args: ["blue"] },
                { name: "RectangleGeometryComponent", args: [100, 15] },
              ]
            }, x: -30, y: -230
          },
          {
            gameObject: {
              name: "Horizontal",
              components: [
                { name: "DrawGeometryComponent", args: ["blue"] },
                { name: "RectangleGeometryComponent", args: [100, 15] },
              ]
            }, x: 100, y: -230
          },
          {
            gameObject: {
              name: "Horizontal",
              components: [
                { name: "DrawGeometryComponent", args: ["blue"] },
                { name: "RectangleGeometryComponent", args: [100, 15] },
              ]
            }, x: 55, y: -150
          },
          {
            gameObject: {
              name: "Horizontal",
              components: [
                { name: "DrawGeometryComponent", args: ["blue"] },
                { name: "RectangleGeometryComponent", args: [40, 15] },
              ]
            }, x: -300, y: -190
          },
          {
            gameObject: {
              name: "Vertical",
              components: [
                { name: "DrawGeometryComponent", args: ["blue"] },
                { name: "RectangleGeometryComponent", args: [15, 80] },
              ]
            }, x: 140, y: -260
          },
          {
            gameObject: {
              name: "Vertical",
              components: [
                { name: "DrawGeometryComponent", args: ["blue"] },
                { name: "RectangleGeometryComponent", args: [15, 40] },
              ]
            }, x: 100, y: -145
          },
          {
            gameObject: {
              name: "Vertical",
              components: [
                { name: "DrawGeometryComponent", args: ["blue"] },
                { name: "RectangleGeometryComponent", args: [15, 50] },
              ]
            }, x: 95, y: -185
          },
          {
            gameObject: {
              name: "Vertical",
              components: [
                { name: "DrawGeometryComponent", args: ["blue"] },
                { name: "RectangleGeometryComponent", args: [15, 100] },
              ]
            }, x: -235, y: -100
          },
          {
            gameObject: {
              name: "Vertical",
              components: [
                { name: "DrawGeometryComponent", args: ["blue"] },
                { name: "RectangleGeometryComponent", args: [15, 60] },
              ]
            }, x: -270, y: -235
          },
        ]
      }, x: -20, y: 20
    },
  
    
    {
      prefabName: "MainController"
    },
    { prefabName: "Hero" },
    
  ]
}