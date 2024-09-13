import { useTranslation, Trans } from 'react-i18next';
import "./index.css";

const getDate = () => {
  const date = new Date();
  const options: Intl.DateTimeFormatOptions = {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  };
  return new Intl.DateTimeFormat('de-DE', options).format(date);
}

const Heading = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col justify-center items-center wrapper">
      <p className="first-line">{t("your star wars")}</p>
      <p className="second-line sm:text-5xl md:text-7xl">
        <Trans i18nKey="character of the day" components={{ 1: <br /> }} />
      </p>
      <p className="date">{getDate()}</p>
    </div>
  );
}

export default Heading;