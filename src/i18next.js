import i18next from "i18next";
import {initReactI18next} from "react-i18next";
import ru from "./locales/ru/translation.json"
import uz from "./locales/uz/translation.json"
import en from "./locales/en/translation.json"
import LanguageDetector from "i18next-browser-languagedetector"
i18next
.use(initReactI18next)
.use(LanguageDetector)
.init({
  resources:{
    uz:{
      translation: uz
    },
    ru:{
      translation: ru
    },
    en:{
      translation: en
    }
  },
  lng: document.cookie,
  fallbackLng: 'uz',
  detection:{
    order:['htmlTag' , 'cookie', 'localStorage', 'path', 'subdomain'],
    caches:['cookie' , 'localStorage']
  }
})
export default i18next