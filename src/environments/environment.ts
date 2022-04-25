// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    projectId: 'hci-web-app',
    appId: '1:168137609675:web:7f9c6f2b1ac97d0193664e',
    databaseURL: 'https://hci-web-app-default-rtdb.europe-west1.firebasedatabase.app',
    storageBucket: 'hci-web-app.appspot.com',
    apiKey: 'AIzaSyA0XMsY99ip3C6sGSCSZmFOlgYdiSL1TOk',
    authDomain: 'hci-web-app.firebaseapp.com',
    messagingSenderId: '168137609675',
    measurementId: 'G-NM708RFLN2',
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
