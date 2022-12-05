import {TranslocoService} from "@ngneat/transloco";
import {SharedUiTranslatorService} from "../../../../../shared-ui-lib/src/lib/utils/shared-ui-translator.service";


export class AppThreeTranslatorClass implements SharedUiTranslatorService {

  constructor(private readonly transloco: TranslocoService) {
  }

  translate(key: string | Array<string>, params?: Object): string {
    console.log(key,'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',params)
    return this.transloco.translate(key, params);
  }

  currentLocale(): string {
    return "en";
  }
}
