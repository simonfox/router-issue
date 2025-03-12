import { customElement } from "aurelia";

@customElement("feature-guard")
export class FeatureGuard {
  canLoad() {
    //return { component: "feature-workspace-id" };
    return { component: "workspace" };
  }
}