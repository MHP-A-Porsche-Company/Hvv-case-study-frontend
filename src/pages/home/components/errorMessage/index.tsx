import { useTranslation } from 'react-i18next';
import "./index.css";

const ErrorMessage = ({ error } : {error: string}) => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col justify-center items-center error-wrapper">
      {t(error)}
    </div>
  );
}

export default ErrorMessage;