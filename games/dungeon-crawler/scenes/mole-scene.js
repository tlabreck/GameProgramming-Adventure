export default {
  name: "MoleScene",
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
        ]
      }
    },
    {
      gameObject: {
        name: "ProgressBar",
        components: [
          { name: "DrawGeometryComponent", args: ["black"] },
          { name: "RectangleGeometryComponent", args: [520, 1] },
        ], children: [
          {
            gameObject: {
              name: "VertProgressBar",
              components: [
                { name: "DrawGeometryComponent", args: ["black"] },
                { name: "RectangleGeometryComponent", args: [1, 30] },
              ]
            },x: -259.5, y: -15, drawLayer: "foreground"
          },
          {
            gameObject: {
              name: "VertProgressBar",
              components: [
                { name: "DrawGeometryComponent", args: ["black"] },
                { name: "RectangleGeometryComponent", args: [1, 30] },
              ]
            },x: 259.5, y: -15, drawLayer: "foreground"
          },
        ]
      }, x: -10, y: -200, drawLayer:"foreground"
    },
    {
      gameObject: {
        name: "Ground",
        components: [
          { name: "DrawGeometryComponent", args: ["lightblue"] },
          { name: "RectangleGeometryComponent", args: [640, 480] },
        ]
      }//, x:-320, y:-240
    },
    {
      gameObject: {
        name: "Mole",
        components: [
          { name: "DrawGeometryComponent", args: ["brown"] },
          { name: "RectangleGeometryComponent", args: [30, 30] },
        ]
      }, x: 100, y: 100//, drawLayer: "foreground"
    },
    {
      prefabName: "MainController"
    },
    { 
      prefabName: "Hero",
      drawLayer: "foreground"
    },
  ]
}