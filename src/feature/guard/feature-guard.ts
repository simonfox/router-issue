import { customElement } from "aurelia";

@customElement("feature-guard")
export class FeatureGuard {
  canLoad() {
    return "feature/workspace";
  }
}