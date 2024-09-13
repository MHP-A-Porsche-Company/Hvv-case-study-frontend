import { useTranslation } from 'react-i18next';
import "./index.css"

export function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('language', lng);
  };

  return (
    <div className="flex justify-center space-x-2 mt-4" style={{ color: "#fff"}}>
      <span className="lang-item" onClick={() => changeLanguage('en')} style={{
        background: i18n.language === 'en' ? '#fff' : 'initial',
        color: i18n.language === 'en' ? '#000' : '#fff'
      }}
      >
        EN
      </span>
      <span className="lang-item" onClick={() => changeLanguage('de')} style={{
        background: i18n.language === 'de' ? '#fff' : 'initial',
        color: i18n.language === 'de' ? '#000' : '#fff'
      }}>
        DE
      </span>
    </div>
  );
}