import "./index.css";
import { useTranslation } from 'react-i18next';
import SkeletonLoader from "../skeletonLoader";
import QuickStatItem from "../quickStatItem";
import {VoiceNarration} from "../voiceNarration";
import {Person} from "../../../../types/swapi.ts";
import staticCharactersDataEn from "../../../../assets/data/charactersEn.ts"
import staticCharactersDataDe from "../../../../assets/data/charactersDe.ts"

const CharacterInfo =({character, loading} : { character?: Person, loading: boolean }) => {
  const { t, i18n } = useTranslation();

  // Translating static copy text when app language changes
  // Normally this would come already translated from the API, and would be unnecessary
  const staticData = i18n.language === "en" ? staticCharactersDataEn : staticCharactersDataDe;
  const staticCharacterData = staticData.find((char) => char.id.toString() === character?.id)

  return (
    <div className="col-span-12 md:col-span-7">
      {loading ? (
        <SkeletonLoader/>
      ) : (
        character && (
          <div className="p-6 sm:p-14">
            <h1 className="name sm:text-5xl">{character.name}</h1>
            <p className="quote">{staticCharacterData?.quote}</p>
            <div>
              <h2 className="flex flex-row section-name justify-between">
                <span>{character.name} {t("about")} Hamburg</span> <VoiceNarration character={character}/>
              </h2>
              <p className="description">{staticCharacterData?.description}</p>
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