import { INavigationModel, IRouteConfig, IRouteContext } from "@aurelia/router-lite";
import { customElement, inject } from "aurelia";
import { FeatureBrowse } from "../browse/feature-browse";
import { FeatureGuard } from "../guard/feature-guard";
import { FeatureWorkspace } from "../workspace/feature-workspace";

@customElement("feature-shell")
@inject(IRouteContext)
export class FeatureShell {
  constructor(private readonly _context: IRouteContext) {
    this.navigation = _context.navigationModel;
  }

  public navigation: INavigationModel;

  async binding(): Promise<void> {
    await this._context.navigationModel.resolve();
  }

  public getRouteConfig(): IRouteConfig {
    return {
      routes: [
        { path: "", redirectTo: "browse" },
        {
          id: "feature-browse-id",
          path: "browse",
          title: "Browse",
          component: FeatureBrowse,
          nav: true,
        },
        {
          id: "feature-workspace-id",
          path: "workspace",
          title: "Workspace",
          component: FeatureWorkspace,
          nav: true,
        },
        {
          id: "feature-guard-id",
          path: "guard",
          title: "Guard",
          component: FeatureGuard,
          nav: true,
        },
      ],
    };
  }
}