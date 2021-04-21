export default {
  name: "MainScene",
  children: [
    {
      gameObject: {
        name:"MainCamera",components:[
          {name:"WorldCameraComponent"}
        ]
      },sx:.75,sy:.75
    },
    {
      gameObject:{
        name:"ScreenCamera",components:[
          {name:"ScreenCameraComponent"}
        ],children:[
          
          { gameObject: { name: "ScreenTextShadow", components: [{ name: "ScreenTextComponent", args: ["Adventure", { color: "gray" }] }] }, x: 111, y: 21 },
          { gameObject: { name: "ScreenText", components: [{ name: "ScreenTextComponent", args: ["Adventure", { color: "white" }] }] }, x: 110, y: 20 },
          { gameObject: { name: "PuzzleComp", components: [{ name: "ScreenTextComponent", args: ["Number of puzzles completed: ", { color: "gray", font: "16pt arial" }] }] }, x: 75, y: 180 },
          { gameObject: { name: "CompNum", components: [{ name: "ScreenTextComponent", args: ["0", { color: "gray", font: "16pt arial" }] }] }, x: 225, y: 180 },
          { gameObject: { name: "PuzzleComp", components: [{ name: "ScreenTextComponent", args: ["Number of puzzles completed: ", { color: "black", font: "16pt arial" }] }] }, x: 74.5, y: 179.5 },
          { gameObject: { name: "CompNum1", components: [{ name: "ScreenTextComponent", args: ["0", { color: "black", font: "16pt arial" }] }] }, x: 224.5, y: 179.5 },
        ]
      }
    },
    {
      gameObject: {
        name: "Ground",
        components: [
          { name: "DrawGeometryComponent", args: ["lightgreen"] },
          { name: "RectangleGeometryComponent", args: [640, 480] },
        ]
      }//, x:-320, y:-240
    },
    {
      gameObject: {
        name: "Castle",
        components: [
          { name: "DrawGeometryComponent", args: ["gray"] },
          { name: "RectangleGeometryComponent", args: [100, 100] },
        ], children:[
          {
            gameObject: {
              name: "CastleTop",
              components: [
                { name: "DrawGeometryComponent", args: ["gray"] },
                { name: "RectangleGeometryComponent", args: [20, 20] },
              ]
            }, x:-40, y:-60
          },
          {
            gameObject: {
              name: "CastleTop",
              components: [
                { name: "DrawGeometryComponent", args: ["gray"] },
                { name: "RectangleGeometryComponent", args: [20, 20] },
              ]
            }, x:40, y:-60
          },
          {
            gameObject: {
              name: "CastleTop",
              components: [
                { name: "DrawGeometryComponent", args: ["gray"] },
                { name: "RectangleGeometryComponent", args: [20, 20] },
              ]
            }, x:0, y:-60
          },
          {
            gameObject: {
              name: "CastleBridge",
              components: [
                { name: "DrawGeometryComponent", args: ["brown"] },
                { name: "RectangleGeometryComponent", args: [30, 40] },
              ]
            }, x:0, y:30
          },
          {
            gameObject: {
              name: "CastleBridge",
              components: [
                { name: "DrawGeometryComponent", args: ["brown"] },
                { name: "CircleGeometryComponent", args: [15] },
              ]
            }, x:0, y:10
          },
          {
            gameObject: {
              name: "CastleWindow",
              components: [
                { name: "DrawGeometryComponent", args: ["black"] },
                { name: "RectangleGeometryComponent", args: [10, 10] },
              ]
            }, x:20, y:-20
          },
          {
            gameObject: {
              name: "CastleWindow",
              components: [
                { name: "DrawGeometryComponent", args: ["black"] },
                { name: "RectangleGeometryComponent", args: [10, 10] },
              ]
            }, x:-20, y:-20
          },
          {
            gameObject: {
              name: "CastleWindow",
              components: [
                { name: "DrawGeometryComponent", args: ["black"] },
                { name: "CircleGeometryComponent", args: [4] },
              ]
            }, x:-20, y:-25
          },
          {
            gameObject: {
              name: "CastleWindow",
              components: [
                { name: "DrawGeometryComponent", args: ["black"] },
                { name: "CircleGeometryComponent", args: [4] },
              ]
            }, x:20, y:-25
          },
        ]
      }, x:-50, y:-150
    },
    
    {
      prefabName: "MainController"
    },
    { prefabName: "Hero"},
    
  ]
}