import i18n from "i18next";

i18n.init({
  resources: {
    en: {
      translation: {
        navDestinos: "Destinations",
        navNosotros: "About Us",
        navBlog: "Blog",
      },
    },
    es: {
      translation: {
        navDestinos: "Destinos",
        navNosotros: "Nosotros",
        navBlog: "Blog",
      },
    },
  },
  lng: "en", // Idioma por defecto
  fallbackLng: "es", // Idioma de respaldo
  interpolation: { escapeValue: false },
});

export const t = i18n.t.bind(i18n);
export default i18n;
