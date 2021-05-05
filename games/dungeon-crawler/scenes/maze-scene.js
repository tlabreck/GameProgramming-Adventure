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
      }
    },
    {
      gameObject: {
        name: "EndButton",
        components: [
          { name: "DrawGeometryComponent", args: ["yellow"] },
          { name: "RectangleGeometryComponent", args: [30, 30] },
        ]
      }, x: -300, y: 220
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
            }, x: 42.5, y: -45
          },
          {
            gameObject: {
              name: "Horizontal",
              components: [
                { name: "DrawGeometryComponent", args: ["blue"] },
                { name: "RectangleGeometryComponent", args: [100, 15] },
              ]
            }, x: -45, y: -44
          },
          {
            gameObject: {
              name: "Vertical",
              components: [
                { name: "DrawGeometryComponent", args: ["blue"] },
                { name: "RectangleGeometryComponent", args: [15, 100] },
              ]
            }, x: -43, y: -88
          },
          {
            gameObject: {
              name: "Vertical",
              components: [
                { name: "DrawGeometryComponent", args: ["blue"] },
                { name: "RectangleGeometryComponent", args: [15, 100] },
              ]
            }, x: -88, y: 42
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
            }, x: -140, y: -.5
          },
          {
            gameObject: {
              name: "Horizontal",
              components: [
                { name: "DrawGeometryComponent", args: ["blue"] },
                { name: "RectangleGeometryComponent", args: [100, 15] },
              ]
            }, x: -35, y: -135
          },
          {
            gameObject: {
              name: "Horizontal",
              components: [
                { name: "DrawGeometryComponent", args: ["blue"] },
                { name: "RectangleGeometryComponent", args: [100, 15] },
              ]
            }, x: 0, y: 45
          },
          {
            gameObject: {
              name: "Vertical",
              components: [
                { name: "DrawGeometryComponent", args: ["blue"] },
                { name: "RectangleGeometryComponent", args: [15, 100] },
              ]
            }, x: -135, y: -50
          },
          {
            gameObject: {
              name: "Vertical",
              components: [
                { name: "DrawGeometryComponent", args: ["blue"] },
                { name: "RectangleGeometryComponent", args: [15, 100] },
              ]
            }, x: -42.5, y: 90
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
            }, x: -45, y: 135
          },
          {
            gameObject: {
              name: "Vertical",
              components: [
                { name: "DrawGeometryComponent", args: ["blue"] },
                { name: "RectangleGeometryComponent", args: [15, 100] },
              ]
            }, x: 5, y: 130
          },
          {
            gameObject: {
              name: "Vertical",
              components: [
                { name: "DrawGeometryComponent", args: ["blue"] },
                { name: "RectangleGeometryComponent", args: [15, 100] },
              ]
            }, x: 50, y: 87.5
          },
          {
            gameObject: {
              name: "Horizontal",
              components: [
                { name: "DrawGeometryComponent", args: ["blue"] },
                { name: "RectangleGeometryComponent", args: [100, 15] },
              ]
            }, x: 45, y: -90
          },
          {
            gameObject: {
              name: "Vertical",
              components: [
                { name: "DrawGeometryComponent", args: ["blue"] },
                { name: "RectangleGeometryComponent", args: [15, 100] },
              ]
            }, x: 55, y: -140
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
            }, x: 100, y: 85
          },
          {
            gameObject: {
              name: "Horizontal",
              components: [
                { name: "DrawGeometryComponent", args: ["blue"] },
                { name: "RectangleGeometryComponent", args: [100, 15] },
              ]
            }, x: -135, y: -135
          },
          {
            gameObject: {
              name: "Vertical",
              components: [
                { name: "DrawGeometryComponent", args: ["blue"] },
                { name: "RectangleGeometryComponent", args: [15, 100] },
              ]
            }, x: -135, y: 100
          },
          {
            gameObject: {
              name: "Horizontal",
              components: [
                { name: "DrawGeometryComponent", args: ["blue"] },
                { name: "RectangleGeometryComponent", args: [100, 15] },
              ]
            }, x: 135, y: -42.5
          },
          {
            gameObject: {
              name: "Vertical",
              components: [
                { name: "DrawGeometryComponent", args: ["blue"] },
                { name: "RectangleGeometryComponent", args: [15, 100] },
              ]
            }, x: -177.5, y: -90
          },
          {
            gameObject: {
              name: "Vertical",
              components: [
                { name: "DrawGeometryComponent", args: ["blue"] },
                { name: "RectangleGeometryComponent", args: [15, 100] },
              ]
            }, x: 135, y: -100
          },
          {
            gameObject: {
              name: "Horizontal",
              components: [
                { name: "DrawGeometryComponent", args: ["blue"] },
                { name: "RectangleGeometryComponent", args: [100, 15] },
              ]
            }, x: 135, y: 0
          },
          {
            gameObject: {
              name: "Vertical",
              components: [
                { name: "DrawGeometryComponent", args: ["blue"] },
                { name: "RectangleGeometryComponent", args: [15, 45] },
              ]
            }, x: 135, y: 28
          },
          {
            gameObject: {
              name: "Horizontal",
              components: [
                { name: "DrawGeometryComponent", args: ["blue"] },
                { name: "RectangleGeometryComponent", args: [100, 15] },
              ]
            }, x: -85, y: -180
          },
          {
            gameObject: {
              name: "Vertical",
              components: [
                { name: "DrawGeometryComponent", args: ["blue"] },
                { name: "RectangleGeometryComponent", args: [15, 100] },
              ]
            }, x: 190, y: 100
          },
          {
            gameObject: {
              name: "Vertical",
              components: [
                { name: "DrawGeometryComponent", args: ["blue"] },
                { name: "RectangleGeometryComponent", args: [15, 100] },
              ]
            }, x: -227.5, y: 40
          },
          {
            gameObject: {
              name: "Horizontal",
              components: [
                { name: "DrawGeometryComponent", args: ["blue"] },
                { name: "RectangleGeometryComponent", args: [100, 15] },
              ]
            }, x: -230, y: -47.5
          },
          {
            gameObject: {
              name: "Horizontal",
              components: [
                { name: "DrawGeometryComponent", args: ["blue"] },
                { name: "RectangleGeometryComponent", args: [100, 15] },
              ]
            }, x: 50, y: -182.5
          },
          {
            gameObject: {
              name: "Horizontal",
              components: [
                { name: "DrawGeometryComponent", args: ["blue"] },
                { name: "RectangleGeometryComponent", args: [100, 15] },
              ]
            }, x: 140, y: -145
          },
          {
            gameObject: {
              name: "Horizontal",
              components: [
                { name: "DrawGeometryComponent", args: ["blue"] },
                { name: "RectangleGeometryComponent", args: [100, 15] },
              ]
            }, x: 178, y: 44.5
          },
          {
            gameObject: {
              name: "Horizontal",
              components: [
                { name: "DrawGeometryComponent", args: ["blue"] },
                { name: "RectangleGeometryComponent", args: [100, 15] },
              ]
            }, x: -185, y: 95
          },
          {
            gameObject: {
              name: "Horizontal",
              components: [
                { name: "DrawGeometryComponent", args: ["blue"] },
                { name: "RectangleGeometryComponent", args: [100, 15] },
              ]
            }, x: -220, y: 172.5
          },
          {
            gameObject: {
              name: "Horizontal",
              components: [
                { name: "DrawGeometryComponent", args: ["blue"] },
                { name: "RectangleGeometryComponent", args: [100, 15] },
              ]
            }, x: -235, y: -225
          },
          {
            gameObject: {
              name: "Vertical",
              components: [
                { name: "DrawGeometryComponent", args: ["blue"] },
                { name: "RectangleGeometryComponent", args: [15, 100] },
              ]
            }, x: 182.5, y: -140
          },
          {
            gameObject: {
              name: "Vertical",
              components: [
                { name: "DrawGeometryComponent", args: ["blue"] },
                { name: "RectangleGeometryComponent", args: [15, 120] },
              ]
            }, x: -272.5, y: 20
          },
          {
            gameObject: {
              name: "Vertical",
              components: [
                { name: "DrawGeometryComponent", args: ["blue"] },
                { name: "RectangleGeometryComponent", args: [15, 100] },
              ]
            }, x: 100, y: 170
          },
          {
            gameObject: {
              name: "Vertical",
              components: [
                { name: "DrawGeometryComponent", args: ["blue"] },
                { name: "RectangleGeometryComponent", args: [15, 100] },
              ]
            }, x: 220.5, y: 2
          },
          {
            gameObject: {
              name: "Vertical",
              components: [
                { name: "DrawGeometryComponent", args: ["blue"] },
                { name: "RectangleGeometryComponent", args: [15, 100] },
              ]
            }, x: -225, y: -100
          },
          {
            gameObject: {
              name: "Vertical",
              components: [
                { name: "DrawGeometryComponent", args: ["blue"] },
                { name: "RectangleGeometryComponent", args: [15, 80] },
              ]
            }, x: -190, y: -220
          },
          {
            gameObject: {
              name: "Vertical",
              components: [
                { name: "DrawGeometryComponent", args: ["blue"] },
                { name: "RectangleGeometryComponent", args: [15, 100] },
              ]
            }, x: -272.5, y: 130
          },
          {
            gameObject: {
              name: "Vertical",
              components: [
                { name: "DrawGeometryComponent", args: ["blue"] },
                { name: "RectangleGeometryComponent", args: [15, 100] },
              ]
            }, x: -272.5, y: 170
          },
          {
            gameObject: {
              name: "Vertical",
              components: [
                { name: "DrawGeometryComponent", args: ["blue"] },
                { name: "RectangleGeometryComponent", args: [15, 70] },
              ]
            }, x: -205, y: 170
          },
          {
            gameObject: {
              name: "Horizontal",
              components: [
                { name: "DrawGeometryComponent", args: ["blue"] },
                { name: "RectangleGeometryComponent", args: [100, 15] },
              ]
            }, x: -150, y: -225
          },
          {
            gameObject: {
              name: "Horizontal",
              components: [
                { name: "DrawGeometryComponent", args: ["blue"] },
                { name: "RectangleGeometryComponent", args: [100, 15] },
              ]
            }, x: -45, y: 172.5
          },
          {
            gameObject: {
              name: "Horizontal",
              components: [
                { name: "DrawGeometryComponent", args: ["blue"] },
                { name: "RectangleGeometryComponent", args: [100, 15] },
              ]
            }, x: 190, y: 130
          },
          {
            gameObject: {
              name: "Vertical",
              components: [
                { name: "DrawGeometryComponent", args: ["blue"] },
                { name: "RectangleGeometryComponent", args: [15, 100] },
              ]
            }, x: -277.5, y: -170
          },
          {
            gameObject: {
              name: "Vertical",
              components: [
                { name: "DrawGeometryComponent", args: ["blue"] },
                { name: "RectangleGeometryComponent", args: [15, 50] },
              ]
            }, x: -42, y: -200
          },
          {
            gameObject: {
              name: "Horizontal",
              components: [
                { name: "DrawGeometryComponent", args: ["blue"] },
                { name: "RectangleGeometryComponent", args: [100, 15] },
              ]
            }, x: -10, y: -225
          },
          {
            gameObject: {
              name: "Horizontal",
              components: [
                { name: "DrawGeometryComponent", args: ["blue"] },
                { name: "RectangleGeometryComponent", args: [100, 15] },
              ]
            }, x: 200, y: -185
          },
          {
            gameObject: {
              name: "Vertical",
              components: [
                { name: "DrawGeometryComponent", args: ["blue"] },
                { name: "RectangleGeometryComponent", args: [15, 50] },
              ]
            }, x: 100, y: -200
          },
          {
            gameObject: {
              name: "Vertical",
              components: [
                { name: "DrawGeometryComponent", args: ["blue"] },
                { name: "RectangleGeometryComponent", args: [15, 80] },
              ]
            }, x: 200, y: -220
          },
          {
            gameObject: {
              name: "Horizontal",
              components: [
                { name: "DrawGeometryComponent", args: ["blue"] },
                { name: "RectangleGeometryComponent", args: [140, 15] },
              ]
            }, x: 220, y: -225
          },
          {
            gameObject: {
              name: "Vertical",
              components: [
                { name: "DrawGeometryComponent", args: ["blue"] },
                { name: "RectangleGeometryComponent", args: [15, 80] },
              ]
            }, x: 283, y: -190
          },
          {
            gameObject: {
              name: "Vertical",
              components: [
                { name: "DrawGeometryComponent", args: ["blue"] },
                { name: "RectangleGeometryComponent", args: [15, 100] },
              ]
            }, x: 230, y: -140
          },
          {
            gameObject: {
              name: "Horizontal",
              components: [
                { name: "DrawGeometryComponent", args: ["blue"] },
                { name: "RectangleGeometryComponent", args: [30, 15] },
              ]
            }, x: 250, y: -97.5
          },
          {
            gameObject: {
              name: "Vertical",
              components: [
                { name: "DrawGeometryComponent", args: ["blue"] },
                { name: "RectangleGeometryComponent", args: [15, 100] },
              ]
            }, x: 270, y: -55
          },
          {
            gameObject: {
              name: "Horizontal",
              components: [
                { name: "DrawGeometryComponent", args: ["blue"] },
                { name: "RectangleGeometryComponent", args: [80, 15] },
              ]
            }, x: 230, y: 85
          },
          {
            gameObject: {
              name: "Vertical",
              components: [
                { name: "DrawGeometryComponent", args: ["blue"] },
                { name: "RectangleGeometryComponent", args: [15, 50] },
              ]
            }, x: -35, y: 195
          },
          {
            gameObject: {
              name: "Horizontal",
              components: [
                { name: "DrawGeometryComponent", args: ["blue"] },
                { name: "RectangleGeometryComponent", args: [50, 15] },
              ]
            }, x: 30, y: 172.5
          },
          {
            gameObject: {
              name: "Horizontal",
              components: [
                { name: "DrawGeometryComponent", args: ["blue"] },
                { name: "RectangleGeometryComponent", args: [160, 15] },
              ]
            }, x: 185, y: 185
          },
          {
            gameObject: {
              name: "Vertical",
              components: [
                { name: "DrawGeometryComponent", args: ["blue"] },
                { name: "RectangleGeometryComponent", args: [15, 135] },
              ]
            }, x: 272, y: 90
          },
          {
            gameObject: {
              name: "Horizontal",
              components: [
                { name: "DrawGeometryComponent", args: ["blue"] },
                { name: "RectangleGeometryComponent", args: [50, 15] },
              ]
            }, x: 295, y: 150
          },
          {
            gameObject: {
              name: "Horizontal",
              components: [
                { name: "DrawGeometryComponent", args: ["blue"] },
                { name: "RectangleGeometryComponent", args: [50, 15] },
              ]
            }, x: -260, y: -185
          },
          {
            gameObject: {
              name: "Vertical",
              components: [
                { name: "DrawGeometryComponent", args: ["blue"] },
                { name: "RectangleGeometryComponent", args: [15, 60] },
              ]
            }, x: -135, y: 170
          },
          {
            gameObject: {
              name: "Horizontal",
              components: [
                { name: "DrawGeometryComponent", args: ["blue"] },
                { name: "RectangleGeometryComponent", args: [60, 15] },
              ]
            }, x: -255, y: -90
          },
        ]
      }, y: 20
    },
  
    
    {
      prefabName: "MainController"
    },
    { prefabName: "Hero" },
    
  ]
}