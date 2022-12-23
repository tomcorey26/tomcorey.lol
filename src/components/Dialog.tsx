import '../styles/dialog.css';

import { useEffect, useRef, useState } from 'react';
import { dialogTree } from '../constants';
import { Card } from './Card';

interface DialogOptionProps {
  option: { text: string; next: string };
  onClick: () => void;
}

const DialogOption: React.FC<DialogOptionProps> = ({ option, onClick }) => {
  return (
    <button className="dialog__option" onClick={onClick}>
      {option.text}
    </button>
  );
};

// TODO:
// rap battle with the hamster where 90s hip hop beat plays and he wears a sideways hat and timberlands
// add googly eyes to my self portrait

export const Dialog: React.FC = (props) => {
  const [dialogText, setDialogText] = useState<string>('');

  const [dialogKey, setDialogKey] = useState<keyof typeof dialogTree>('1');
  const [active, setActive] = useState<boolean>(false);
  const [isTalking, setIsTalking] = useState<boolean>(true);
  const interval = useRef<NodeJS.Timeout>();
  const audio = useRef<HTMLAudioElement>();

  const init = () => {
    setActive(true);
    talk('1');
  };

  const talk = (dialogKey: keyof typeof dialogTree) => {
    setIsTalking(true);
    setDialogText('');
    setDialogKey(dialogKey);

    const text = dialogTree[dialogKey].text;

    // generate random number 1 - 5
    const random = () => Math.floor(Math.random() * 5) + 1;
    audio.current = new Audio(`hamster${random()}.mp3`);
    audio.current.play();

    interval.current = setInterval(() => {
      if (audio.current?.ended) {
        audio.current = new Audio(`hamster${random()}.mp3`);
        audio.current.play();
      }

      setDialogText((prev) => {
        if (prev === text) {
          clearInterval(interval.current);
          setTimeout(() => setIsTalking(false), 2000);

          return prev;
        }
        return prev + text[prev.length];
      });
    }, 50);
  };

  const closeDialog = () => {
    clearInterval(interval.current);
    setDialogText('');
    audio.current?.pause();
    interval.current = undefined;
    audio.current = undefined;

    setActive(false);
    setIsTalking(false);
    setDialogText('');
    setDialogKey('1');
  };

  if (!active) {
    return <button onClick={init}>Talk to hamster</button>;
  }

  const currentDialog = dialogTree[dialogKey];
  return (
    <Card className="dialog">
      <div>
        <button onClick={closeDialog}>X</button>
      </div>
      <img
        className="dialog__img"
        src="facetime-hamster.jpeg"
        alt="FaceTime hamster"
      />
      <div className="dialog__text">
        {isTalking ? (
          <p>{dialogText}_</p>
        ) : (
          currentDialog.options.map((option) => (
            <DialogOption
              key={option.text}
              option={option}
              onClick={() => talk(option.next)}
            />
          ))
        )}
      </div>
    </Card>
  );
};
