export default {
  name: "WinScene",
  children: [
    {
      gameObject: {
        name:"MainCamera",components:[
          {name:"WorldCameraComponent"}
        ]
      },sx:.5,sy:.5
    },
    {
      gameObject:{
        name:"ScreenCamera",components:[
          {name:"ScreenCameraComponent"}
        ],children:[
          
          { gameObject: { name: "ScreenTextShadow", components: [{ name: "ScreenTextComponent", args: ["Adventure", { color: "gray" }] }] }, x: 112, y: 22 },
          { gameObject: { name: "ScreenText", components: [{ name: "ScreenTextComponent", args: ["Adventure", { color: "white" }] }] }, x: 110, y: 20 },
        ]
      }
    },
    //{ gameObject: { name: "MainController", components: [{ name: "SceneChangerComponent" }, {name: "TitleSceneCountdownComponent"}] } },
    { gameObject: { name: "ScreenTextShadow", components: [{ name: "ScreenTextComponent", args: ["You Won!", { color: "gray", font: "100pt arial" }] }] }, x: -127, y: 42 },
    { gameObject: { name: "ScreenText", components: [{ name: "ScreenTextComponent", args: ["You Won!", { color: "white", font: "100pt arial" }] }] }, x: -125, y: 40 },
  ]
}