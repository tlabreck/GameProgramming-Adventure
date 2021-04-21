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
        name: "Ground",
        components: [
          { name: "DrawGeometryComponent", args: ["lightblue"] },
          { name: "RectangleGeometryComponent", args: [640, 480] },
        ]
      }//, x:-320, y:-240
    },
    {
      gameObject: {
        name: "CircleGameObject",
        components: [
          { name: "DrawGeometryComponent", args: ["brown"] },
          { name: "CircleGeometryComponent", args: [30] },
        ]
      }
    },
    {
      prefabName: "MainController"
    },
    { prefabName: "Hero"},
  ]
}