import { INavigationModel, IRouteConfig } from "@aurelia/router-lite";
import { customElement } from "aurelia";
import { FeatureShell } from "./feature/shell/feature-shell";

@customElement("app-shell")
//@inject(IRouteContext)
export class AppShell {
  // constructor(private readonly _context: IRouteContext) {
  //   this.navigation = _context.navigationModel;
  // }

  public navigation: INavigationModel;
  public message = 'Hello World!';

  // async binding(): Promise<void> {
  //   await this._context.navigationModel.resolve();
  // }

  public getRouteConfig(): IRouteConfig {
    return {
      routes: [
        { path: "", redirectTo: "feature" },
        {
          id: "feature-id",
          path: ["feature"],
          component: FeatureShell,
        }
      ],
    };
  }
}
