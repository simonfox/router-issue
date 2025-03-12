import { RouterConfiguration } from '@aurelia/router-lite';
import Aurelia /*, { StyleConfiguration }*/ from 'aurelia';
import { AppShell } from './app-shell';
// import shared from './shared.scss';

Aurelia
  /*
  .register(StyleConfiguration.shadowDOM({
    // optionally add the shared styles for all components
    sharedStyles: [shared]
  }))
  */
  .register(
    RouterConfiguration.customize({
      useUrlFragmentHash: true,
    }))
  .app(AppShell)
  .start();
