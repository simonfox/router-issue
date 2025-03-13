import { IRouter } from "@aurelia/router-lite";
import { customElement, inject, PLATFORM } from "aurelia";

let loaded = false;
@inject(IRouter)
@customElement("feature-workspace")
export class FeatureWorkspace {
  constructor(
    private readonly _router: IRouter) { }

  canLoad() {
    if (!loaded) {
      loaded = true;
      return "feature/load";
    }
    else
      return true;
  }

  unload() {
    loaded = false;
    this._router.load("feature/browse");
  }

  refresh() {
    PLATFORM.window.location.reload();
  }
}