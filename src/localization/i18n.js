import i18next from 'i18next'
import languageEN from './en/translation.json'
import languageHN from './hn/translation.json'
import languageOR from './or/translation.json'
import { initReactI18next } from 'react-i18next'


i18next.use(initReactI18next).init({
    compatibilityJSON: 'v3', //i18next::pluralResolver: Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.
    lang: 'en',
    fallbackLng: 'en',
    resources: {
        en: {"translation": languageEN },
        hn: {"translation": languageHN },
        or: {"translation": languageOR }
    },
    interpolation: {
        escapeValue: false 
    },
    react: {
        useSuspense: false,
    }
});

export default i18next;
