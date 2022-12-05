import {HttpClient} from '@angular/common/http';
import {
  TRANSLOCO_LOADER,
  TranslocoLoader,
  TRANSLOCO_CONFIG,
  translocoConfig,
  TranslocoModule, TranslocoService, Translation
} from '@ngneat/transloco';
import {APP_INITIALIZER, Injectable, NgModule} from '@angular/core';
import {environment} from "../../environments/environment";

@Injectable({providedIn: 'root'})
export class TranslocoHttpLoader implements TranslocoLoader {
  constructor(private http: HttpClient) {
  }

  getTranslation(langPath: string) {
    console.log(langPath, 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')

    return this.http.get(`./assets/i18n/${langPath}.json`);
  }
}

@NgModule({
  exports: [TranslocoModule],
  providers: [
    {
      provide: TRANSLOCO_CONFIG,
      useValue: translocoConfig({
        availableLangs: ['en'],
        defaultLang: 'en',
        // Remove this option if your application
        // doesn't support changing language in runtime.
        reRenderOnLangChange: true,
        prodMode: environment.production,
      })
    },
    {provide: TRANSLOCO_LOADER, useClass: TranslocoHttpLoader},
    //preload default language before the app starts, to prevent empty/jumping content
    {
      provide: APP_INITIALIZER,
      deps: [TranslocoService],
      useFactory: (translocoService: TranslocoService) => (): Promise<Translation | undefined> => {
        const defaultLang = 'en';
        translocoService.setActiveLang(defaultLang);
        return translocoService.load(defaultLang).toPromise();
      },
      multi: true
    }
  ]
})
export class TranslocoApp3RootModule {
}
