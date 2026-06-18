/* If you want the bot to support multiple languages, feel free to keep this file. Otherwise, you can safely remove it.
import i18next from 'i18next';
import Backend from 'i18next-fs-backend';
import path from 'path';

export default async function i18n() {
  await i18next.use(Backend).init({
    lng: 'en-US',
    fallbackLng: 'en-US',
    backend: {
      loadPath: path.join(process.cwd(), 'dist', 'locales', '{{lng}}.json'),
    },
    interpolation: { escapeValue: false },
  });
}
*/
