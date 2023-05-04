import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

// @ts-ignore
i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        backend: {
            loadPath: process.env.PUBLIC_URL + '/locales/{{lng}}/{{ns}}.json',
        },
        fallbackLng: 'ru',
        debug: true,
        detection: {
            order: ["querystring", 'cookie'],
            cache: ['cookie']
        },
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
