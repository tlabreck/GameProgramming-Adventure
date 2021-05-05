export default {
    name: "Cloud", 
    components: [
        { name: "DrawGeometryComponent", args: ["white"] },
        { name: "RectangleGeometryComponent", args: [50, 30] },
        { name: "MoveCloudComponent"}
      ], children: [
        {
            gameObject: {
              name: "CloudTop",
              components: [
                { name: "DrawGeometryComponent", args: ["white"] },
                { name: "CircleGeometryComponent", args: [25] },
              ]
            },y:-10, drawLayer: "wrap"
          },
          {
            gameObject: {
              name: "CloudLeft",
              components: [
                { name: "DrawGeometryComponent", args: ["white"] },
                { name: "CircleGeometryComponent", args: [15] },
              ]
            }, x:-25, y:0, drawLayer: "wrap"
          },
          {
            gameObject: {
              name: "CloudRight",
              components: [
                { name: "DrawGeometryComponent", args: ["white"] },
                { name: "CircleGeometryComponent", args: [15] },
              ]
            }, x:25, y:0, drawLayer: "wrap"
          },
        ]
      }