import { RouterConfiguration } from '@aurelia/router-lite';
import Aurelia, { valueConverter } /*, { StyleConfiguration }*/ from 'aurelia';
import { AppShell } from './app-shell';
// import shared from './shared.scss';

@valueConverter("firstNonEmpty")
export class FirstNonEmptyConverter {
  public toView(paths: string[]): string {
    for (const path of paths) {
      if (path) return path;
    }
  }
}

Aurelia
  /*
  .register(StyleConfiguration.shadowDOM({
    // optionally add the shared styles for all components
    sharedStyles: [shared]
  }))
  */
  .register(
    FirstNonEmptyConverter,
    RouterConfiguration.customize({
      useUrlFragmentHash: true,
    }))
  .app(AppShell)
  .start();
