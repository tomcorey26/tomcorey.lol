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
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint aliquam
          modi nisi, corporis exercitationem voluptatibus suscipit assumenda
          dolorem eveniet sequi voluptatum omnis libero ipsam natus amet error
          veniam fuga quam quasi officia rem consequatur laboriosam perferendis
          rerum! Enim, itaque eligendi? Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Eveniet aliquid mollitia fuga dicta. Facilis eaque
          officia molestiae minima nisi quae molestias vitae similique placeat
          optio assumenda numquam sit saepe maxime fugiat soluta quasi,
          veritatis odio labore laudantium sapiente cumque. Amet.
        </p>
      </div>
    </div>
  );
};
