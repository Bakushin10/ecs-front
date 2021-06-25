import { enableProdMode, NgZone } from '@angular/core';
// 単特で起動する場合は必要
import 'zone.js/dist/zone';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Router } from '@angular/router';
import { ɵAnimationEngine as AnimationEngine } from '@angular/animations/browser';
import {
  singleSpaAngular,
  getSingleSpaExtraProviders,
} from 'single-spa-angular';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { singleSpaPropsSubject } from './single-spa/single-spa-props';

if (environment.production) {
  enableProdMode();
}

if (!(window as any).__POWERED_BY_QIANKUN__) {
  console.log('# [FNOL] Standalone startup mode used...');
  platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch((err) => console.error('-----[FNOL]-[main.ts]-ERROR>>>', err));
}

const lifecycles = singleSpaAngular({
  bootstrapFunction: (singleSpaProps) => {
    singleSpaPropsSubject.next(singleSpaProps);

    return platformBrowserDynamic(getSingleSpaExtraProviders()).bootstrapModule(
      AppModule
    );
  },
  // add the other options to singleSpaAngular, too. See "Basic usage" for more info
  template: '<dcp-sub-fnol-root/>',
  Router,
  NgZone,
  AnimationEngine,
});

export const bootstrap = lifecycles.bootstrap;
// export const mount = lifecycles.mount;
export const unmount = lifecycles.unmount;

export function mount(props) {
  console.log('-----[FNOL]-[mount]', props);
  if (typeof lifecycles.mount === 'function') {
    return lifecycles.mount(props);
  } else {
    return Promise.all(lifecycles.mount.map((mount) => mount(props)));
  }
}

// export function mount(props) {
//   props.onGlobalStateChange((state, prevState) => {
//    console.log(state, prevState);
//  });
// }
