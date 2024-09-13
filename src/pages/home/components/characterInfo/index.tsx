import "./index.css";
import { useTranslation } from 'react-i18next';
import SkeletonLoader from "../skeletonLoader";
import QuickStatItem from "../quickStatItem";
import {VoiceNarration} from "../voiceNarration";

const CharacterInfo = ({character, loading} : any) => {
  const { t } = useTranslation();
  return (
    <div className="col-span-12 md:col-span-7">
      {loading ? (
        <SkeletonLoader/>
      ) : (
        character && (
          <div className="p-14">
            <h1 className="name">{character.name}</h1>
            <p className="quote">{character.quote}</p>
            <div>
              <h2 className="flex flex-row section-name justify-between">
                <span>{t("about")} {character.name}</span> <VoiceNarration character={character}/>
              </h2>
              <p className="description">{character.description}</p>
            </div>
            <div>
              <h3 className="section-name">{t("quickstats")}</h3>
              <div>
                <QuickStatItem label={t("gender")} value={character.gender}/>
                <QuickStatItem label={t("height")} value={character.height}/>
                <QuickStatItem label={t("mass")} value={character.mass}/>
                <QuickStatItem label={t("year of birth")} value={character.birth_year}/>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
}

export default CharacterInfo;