import { HttpClient } from '@angular/common/http';
import {
  TRANSLOCO_LOADER,
  Translation,
  TranslocoLoader,
  TRANSLOCO_CONFIG,
  translocoConfig,
  TranslocoModule, TranslocoService
} from '@ngneat/transloco';
import {APP_INITIALIZER, Injectable, NgModule} from '@angular/core';
import {environment} from "../../environments/environment";

@Injectable({ providedIn: 'root' })
export class TranslocoHttpLoader implements TranslocoLoader {
  constructor(private http: HttpClient) {
  }

  getTranslation(lang: string) {
    return this.http.get<Translation>(`./assets/i18n/${lang}.json`);
  }
}

@NgModule({
  exports: [ TranslocoModule ],
  providers: [
    {
      provide: TRANSLOCO_CONFIG,
      useValue: translocoConfig({
        availableLangs: ['fa'],
        defaultLang: 'fa',
        // Remove this option if your application
        // doesn't support changing language in runtime.
        reRenderOnLangChange: true,
        prodMode: environment.production,
      })
    },
    { provide: TRANSLOCO_LOADER, useClass: TranslocoHttpLoader },
    {
      provide: APP_INITIALIZER,
      deps: [TranslocoService],
      useFactory: (translocoService: TranslocoService) => (): Promise<Translation | undefined> => {
        const defaultLang = 'fa';
        translocoService.setActiveLang(defaultLang);
        return translocoService.load(defaultLang).toPromise();
      },
      multi: true
    }
  ]
})
export class TranslocoApp2RootModule {}
