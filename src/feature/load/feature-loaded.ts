import { customElement } from "aurelia";
import { ChildOne } from "./child-one/child-one";

@customElement("feature-loaded")
export class FeatureLoaded {
  constructor(
  ) { }

  getRouteConfig() {
    return {
      routes: [
        { path: "", redirectTo: "child-one" },
        {
          id: "child-one-id",
          path: "child-one",
          title: "Child One",
          component: ChildOne,
          nav: true,
        },
      ]
    };
  }

  loading(params: { id: number }) {
    console.log("loaded... ", params);
  }
}