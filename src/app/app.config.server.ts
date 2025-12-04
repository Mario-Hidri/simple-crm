import { ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

import { provideNoopAnimations } from '@angular/platform-browser/animations';

import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),
    provideRouter(routes),
    provideNoopAnimations(),
    provideFirebaseApp(() =>
      initializeApp({
        apiKey: 'AIzaSyC3OtpK-0eMW-nm5MYN5JyY_qaNsf91Gh0',
        authDomain: 'simple-crm-ceac0.firebaseapp.com',
        projectId: 'simple-crm-ceac0',
        storageBucket: 'simple-crm-ceac0.firebasestorage.app',
        messagingSenderId: '896286293972',
        appId: '1:896286293972:web:374dd951f3fdb014052041',
        measurementId: 'G-XEMFBY4FQ5'
      })
    ),
    provideFirestore(() => getFirestore())
  ]
};
