import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enLang from './locales/en/en.json';
import frLang from './locales/fr/fr.json';

const resources = {
    en: {
        // translation: {
        //      //when using useTranslation
        //     // welcomeMessage_one: 'You have {{count}} notification',
        //     // welcomeMessage_other: "You have {{count}} notifications"
        //     welcomeMesage: 'Welcome, <1>user</1>! <3>Test</3>',
        // },
        translation: enLang,
    },
    fr: {
        // translation: {

        //     //when using useTranslation
        // //    welcomeMessage_one: "Vous avez {{count}} notification",
        // //    welcomeMessage_other: "Vous avez {{count}} notifications"
        //  welcomeMesage: 'Bonjour, <1>user</1>! <3>Test</3>',
        // },
        translation: frLang,
    }
};

i18n
.use(initReactI18next)
.init({
    resources,
    fallbackLng: 'en',
    lng: "fr",
    interpolation: {
        escapeValue: false,
    },
})

export default i18n;