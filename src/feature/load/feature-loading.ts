import { IRouter } from "@aurelia/router-lite";
import { customElement, inject } from "aurelia";

@inject(IRouter)
@customElement("feature-loading")
export class FeatureLoading {
  constructor(
    private readonly _router: IRouter,
  ) { }

  loading(params: { id: number }) {
    const doActivate = async () => {
      console.log("loading component: ", params);
      const p = new Promise<void>(resolve => {
        setTimeout(() => resolve(), 1000);
      });
      await p;

      const path = "feature/2";
      this._router.load(path, { transitionPlan: "replace" });
    };
    doActivate();
  }
}