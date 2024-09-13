import { useState, useEffect } from 'react';
import "./index.css"
import {Person} from "../../../../types/swapi.ts";

interface Props {
  character?: Person;
}

const CharacterImage: React.FC<Props> = ({ character }) => {
  const [imgSrc, setImgSrc] = useState<string | null>(null);

  useEffect(() => {
    const loadImage = async () => {
      try {
        const imageModule = await import(`../../../../assets/characters/${character?.id}.png`);
        setImgSrc(imageModule.default);
      } catch (error) {
        console.error("Error loading image:", error);
      }
    };
    loadImage();
  }, [character]);


  return (
    <div className="col-span-12 md:col-span-5">
      {!imgSrc ? (
        <div className="h-full bg-gray-900 animate-pulse"/>
      ) : (
        imgSrc && <img
          src={imgSrc}
          alt="Darth Vader at a carnival"
          className="h-full object-cover"
        />
      )}
    </div>
  );
}

export default CharacterImage;