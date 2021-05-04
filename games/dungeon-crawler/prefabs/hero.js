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
  //         { name: "PolygonGeometryComponent", args: [[{x:-10, y:0}, {x:10, y:0}, {x:0, y:-40}]] },
  //         { name: "DrawGeometryComponent", args: ["white"] }
  //       ]

  //     },sx:.5, sy:.5,y:-5
  //   }
  ]
}