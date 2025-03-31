import { RecognizedRoute } from "@aurelia/route-recognizer";
import { INavigationModel, IRouteConfig, IRouteContext, IViewportInstruction, NavigationStrategy, RouteNode } from "@aurelia/router-lite";
import { customElement, inject } from "aurelia";
import { FeatureBrowse } from "../browse/feature-browse";
import { FeatureLoaded } from "../load/feature-loaded";
import { FeatureLoading } from "../load/feature-loading";
// import { FeatureGuard } from "../guard/feature-guard";
// import { FeatureWorkspace } from "../workspace/feature-workspace";

@customElement("feature-shell")
@inject(IRouteContext)
export class FeatureShell {
  private _loaded = false;
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
        //{ path: "", redirectTo: "browse" },
        {
          id: "feature-browse-id",
          path: ["", "browse"],
          title: "Browse",
          component: FeatureBrowse,
          nav: true,
        },
        // {
        //   id: "feature-workspace-id",
        //   path: "workspace",
        //   title: "Workspace",
        //   component: FeatureWorkspace,
        //   nav: true,
        // },
        // {
        //   id: "feature-guard-id",
        //   path: "guard",
        //   title: "Guard",
        //   component: FeatureGuard,
        //   nav: true,
        // },
        {
          id: "feature-load-id",
          path: ":id",
          title: "Load",
          component: new NavigationStrategy((viewportInstruction: IViewportInstruction, ctx: IRouteContext, node: RouteNode, recognizedRoute: RecognizedRoute<unknown>) => {
            console.log("nav strategy: ", viewportInstruction.params, ctx);
            console.log("recognized: ", recognizedRoute.params);
            if (!this._loaded) {
              this._loaded = true;
              return FeatureLoading;
            } else {
              return FeatureLoaded;
            }
          }),
          nav: false,
        },
      ],
    };
  }
}