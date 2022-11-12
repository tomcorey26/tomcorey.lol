import '../styles/dialog.css';

export const Dialog: React.FC = (props) => {
  return (
    <div className="dialog">
      <img
        className="dialog__img"
        src="facetime-hamster.jpeg"
        alt="placeholder"
      />
      <div className="dialog__text">
        <p>sup bitch, welcome to the website. My names hamster. Fuck you lol</p>
      </div>
    </div>
  );
};
