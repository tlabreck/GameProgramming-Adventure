export default {
  name: "TitleScene",
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
    { gameObject: { 
      name: "MainController", components: [
        { name: "SceneChangerComponent" }, {name: "TitleSceneCountdownComponent"}] } },
    { gameObject: { 
      name: "ScreenTextShadow", components: [
        { name: "ScreenTextComponent", args: ["Explore the puzzles", { color: "gray" }] }] }, x: -102, y: -14 },
    { gameObject: { 
      name: "ScreenText", components: [
        { name: "ScreenTextComponent", args: ["Explore the puzzles", { color: "white" }] }] }, x: -100, y: -16 },
    { gameObject: { 
      name: "ScreenText", components: [
        { name: "ScreenTextComponent", args: ["Play", { color: "white" }] }] }, x: -30, y: 100 },
  ]
}