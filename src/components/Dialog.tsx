import '../styles/dialog.css';

import { useState } from 'react';
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

  const currentDialog = dialogTree[dialog];
  return (
    <div className="dialog">
      <img
        className="dialog__img"
        src="facetime-hamster.jpeg"
        alt="placeholder"
      />
      <div className="dialog__text">
        <p>{currentDialog.text}</p>
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
