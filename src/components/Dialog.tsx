import '../styles/dialog.css';

import { useEffect, useState } from 'react';
import { dialogTree } from '../constants';

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
  const [dialog, setDialog] = useState<keyof typeof dialogTree>('1');
  const [dialogText, setDialogText] = useState<string>('');
  const [active, setActive] = useState<boolean>(false);
  const [isTalking, setIsTalking] = useState<boolean>(true);

  useEffect(() => {
    if (!active) {
      return;
    }

    const text = dialogTree[dialog].text;

    // generate random number 1 - 5
    const random = () => Math.floor(Math.random() * 5) + 1;
    let audio = new Audio(`hamster${random()}.mp3`);
    audio.play();

    const interval = setInterval(() => {
      if (audio.ended) {
        audio = new Audio(`hamster${random()}.mp3`);
        audio.play();
      }

      setDialogText((prev) => {
        if (prev === text) {
          clearInterval(interval);
          setTimeout(() => setIsTalking(false), 2000);

          return prev;
        }
        return prev + text[prev.length];
      });
    }, 50);

    return () => {
      clearInterval(interval);
      setDialogText('');
      audio.pause();
    };
  }, [dialog, active]);

  const startTalking = (dialogNum: keyof typeof dialogTree) => {
    setDialog(dialogNum);
    setIsTalking(true);
  };

  if (!active) {
    return <button onClick={() => setActive(true)}>Talk to hamster</button>;
  }

  const currentDialog = dialogTree[dialog];
  return (
    <div className="dialog">
      <img
        className="dialog__img"
        src="facetime-hamster.jpeg"
        alt="placeholder"
      />
      <div className="dialog__text">
        {isTalking ? (
          <p>{dialogText}_</p>
        ) : (
          currentDialog.options.map((option) => (
            <DialogOption
              key={option.text}
              option={option}
              onClick={() => startTalking(option.next)}
            />
          ))
        )}
      </div>
    </div>
  );
};
