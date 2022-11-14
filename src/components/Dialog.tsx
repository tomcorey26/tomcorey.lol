import '../styles/dialog.css';

import { useEffect, useState } from 'react';
import { dialogTree } from '../constants';

interface DialogOptionProps {
  option: { text: string; next: string };
  onClick: () => void;
}
const DialogOption: React.FC<DialogOptionProps> = ({ option, onClick }) => {
  return (
    <button className="dialog-option" onClick={onClick}>
      {option.text}
    </button>
  );
};

export const Dialog: React.FC = (props) => {
  const [dialog, setDialog] = useState<keyof typeof dialogTree>('1');
  const [dialogText, setDialogText] = useState<string>('');

  useEffect(() => {
    const text = dialogTree[dialog].text;

    const interval = setInterval(() => {
      setDialogText((prev) => {
        if (prev === text) {
          clearInterval(interval);
          return prev;
        }
        return prev + text[prev.length];
      });
    }, 50);

    return () => {
      clearInterval(interval);
      setDialogText('');
    };
  }, [dialog]);

  const currentDialog = dialogTree[dialog];
  return (
    <div className="dialog">
      <img
        className="dialog__img"
        src="facetime-hamster.jpeg"
        alt="placeholder"
      />
      <div className="dialog__text">
        <p>{dialogText}_</p>
        {currentDialog.options.map((option) => (
          <DialogOption
            key={option.text}
            option={option}
            onClick={() => setDialog(option.next)}
          />
        ))}
        {dialog}
      </div>
    </div>
  );
};
