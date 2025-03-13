import { IRouter } from "@aurelia/router-lite";
import { customElement, inject } from "aurelia";

@inject(IRouter)
@customElement("feature-load")
export class FeatureLoad {
  constructor(
    private readonly _router: IRouter,
  ) { }

  loading() {
    const doActivate = async () => {
      // simulate loading data
      const p = new Promise<void>(resolve => {
        setTimeout(() => resolve(), 1000);
      });
      await p;

      const path = "feature/workspace";
      this._router.load(path);
    };
    doActivate();
  }
}