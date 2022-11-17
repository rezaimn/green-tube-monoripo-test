import {TranslocoService} from "@ngneat/transloco";
import {SharedUiTranslatorService} from "../../../../../shared-ui-lib/src/lib/utils/shared-ui-translator.service";


export class AppTwoTranslatorClass implements SharedUiTranslatorService {

  constructor(private readonly transloco: TranslocoService) {
  }

  translate(key: string | Array<string>, params?: Object): string {
    console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',this.transloco.translate(key,params))

    return this.transloco.translate(key, params);
  }

  currentLocale(): string {
    return "fa";
  }
}
