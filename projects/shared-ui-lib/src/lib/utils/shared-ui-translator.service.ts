export abstract class SharedUiTranslatorService {

  abstract translate(key: string | Array<string>, params?: Object): string;

  abstract currentLocale(): string;
}


