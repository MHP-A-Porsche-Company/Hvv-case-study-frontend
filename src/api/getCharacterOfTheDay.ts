import { swapiService } from '../service/swapiService';
import { Person } from '../types/swapi';
import staticCharactersData from "../assets/data/characters.ts"

const STORAGE_KEY = 'SWCotD';
const DATE_KEY = 'SWCotDDate';

export async function getCharacterOfTheDay(): Promise<Person> {
  try {
    const storedCharacter = localStorage.getItem(STORAGE_KEY);
    const storedDate = localStorage.getItem(DATE_KEY);
    const today = new Date().toDateString();

    if (storedCharacter && storedDate === today) {
      return JSON.parse(storedCharacter);
    }

    // Since the API provides only text, we are complementing the API with our own static images (only 13 images) to make better interface.
    // Only Star Wars characters that have our image will be randomly fetched.
    // Normally we would fetch all people and use that number to pick random one (API has 82 characters)
    const randomIndex = Math.floor(Math.random() * staticCharactersData.length);
    const randomCharacterWithStaticImage = staticCharactersData[randomIndex]

    const data = await swapiService.getPerson(randomCharacterWithStaticImage.id.toString());

    if (!data) {
      throw new Error('No characters found');
    }

    const selectedCharacter = {
      ...data,
      quote: randomCharacterWithStaticImage.quote,
      description: randomCharacterWithStaticImage.description,
      id: randomCharacterWithStaticImage.id.toString(),
    };

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(selectedCharacter));
      localStorage.setItem(DATE_KEY, today);
    } catch (storageError) {
      console.warn('Failed to store character in localStorage:', storageError);
    }

    return selectedCharacter;
  } catch (error) {
    console.error('Error fetching character of the day:', error);
    throw error;
  }
}