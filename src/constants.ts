// create a dialog tree

type DialogKey = '1' | '2' | '3' | '4';

type DialogOption = { text: string; next: DialogKey };

type Dialog = { text: string; options: DialogOption[] };

type DialogTree = { [key in DialogKey]: Dialog };

export const dialogTree: DialogTree = {
  '1': {
    text: 'Hello, I am a dialog',
    options: [
      {
        text: 'Yes',
        next: '2',
      },
      {
        text: 'No',
        next: '3',
      },
    ],
  },
  '2': {
    text: 'You said yes',
    options: [
      {
        text: 'Ok',
        next: '4',
      },
    ],
  },
  '3': {
    text: 'You said no',
    options: [
      {
        text: 'Ok',
        next: '4',
      },
    ],
  },
  '4': {
    text: 'The end',
    options: [],
  },
};
