export default {
  name: "Hero", components: [
    {
      name: "KeyboardMoveComponent", args: [5]
    },
    { name: "DrawGeometryComponent", args: ["black"] },
    { name: "RectangleGeometryComponent", args: [10, 10] },
  // ], children: [
  //   {
  //     gameObject: {
  //       name: "HeroHat",
  //       components: [
  //         { name: "PolygonGeometryComponent", args: [[{x:-15, y:0}, {x:15, y:0}, {x:0, y:-15}]] },
  //         { name: "DrawGeometryComponent", args: ["brown"] }
  //       ]

  //     },sx:.5, sy:.5,x:5,y:0
  //   }
  ]
}