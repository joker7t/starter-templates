import en from '../i18n/locales/en';
import vi from '../i18n/locales/vi';

export default {
    defaultLocale: 'en',
    locales: [
        {
            code: 'en',
            name: 'English',
        },
        {
            code: 'vi',
            name: 'Vietnamese',
        },
    ],
    vueI18n: {
        fallbackLocale: 'en',
        messages: {
            en,
            vi,
        },
    },
};
