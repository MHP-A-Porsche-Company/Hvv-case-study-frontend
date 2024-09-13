import { useEffect, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { Person } from '../../../../types/swapi';
import { useTranslation } from 'react-i18next';

interface VoiceNarrationProps {
  character: Person;
}

export function VoiceNarration({ character }: VoiceNarrationProps) {
  const { t } = useTranslation();
  const [isSpeaking, setIsSpeaking] = useState(false);

  const speak = () => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance();
      utterance.text = character.description;
      utterance.lang = 'en-US';
      utterance.rate = 0.8;
      utterance.pitch = 0.5;

      utterance.onstart = () => setIsSpeaking(true);
      utterance.onend = () => setIsSpeaking(false);

      speechSynthesis.speak(utterance);
    }
  };

  const stopSpeaking = () => {
    if ('speechSynthesis' in window) {
      speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  };

  useEffect(() => {
    return () => {
      stopSpeaking();
    };
  }, []);

  return (
    <button
      onClick={isSpeaking ? stopSpeaking : speak}
      className="flex"
    >
      {isSpeaking ? t("stop narration") : t("start narration")}
      {isSpeaking ? <VolumeX className="h-4 w-4 mr-1 ml-2" /> : <Volume2 className="h-4 w-4 mr-1 ml-2" />}
    </button>
  );
}