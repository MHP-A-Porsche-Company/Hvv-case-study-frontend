import React, { useEffect, useState, useCallback } from 'react';
import { Person } from '../../types/swapi.ts';
import { getCharacterOfTheDay } from '../../api/getCharacterOfTheDay.ts';
import Heading from "./components/heading";
import background from "../../assets/background.png";
import CharacterImage from "./components/characterImage";
import CharacterInfo from "./components/characterInfo";
import {LanguageSwitcher} from "./components/languageSwitcher";
import "./home.css"
import ErrorMessage from "./components/errorMessage";

const Home: React.FC = () => {
  const [character, setCharacter] = useState<Person>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchPeople = useCallback(async () => {
    try {
      const character: Person = await getCharacterOfTheDay();
      if (character) {
        setCharacter(character);
      }
    } catch {
      setError('Failed to fetch character.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchPeople();
  }, [fetchPeople]);

  return (
    <div className="flex flex-col min-h-screen home-container items-center"
         style={{backgroundImage: `url(${background})`}}>
      <Heading/>
      {error ? <ErrorMessage error={error}/> : <>
        <div className="grid grid-cols-12 rounded-lg overflow-hidden card-wrapper">
          <CharacterImage character={character}/>
          <CharacterInfo character={character} loading={loading}/>
        </div>
      </>
      }
      <LanguageSwitcher/>
    </div>
  );
};

export default Home;
