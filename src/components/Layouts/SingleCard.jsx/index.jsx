import "./style.css";

const SingleCard = (props) => {
  const { card, handleChoice, flipped, disabled } = props;

  const handleClick = () => {
    if (!disabled) {
      handleChoice(card);
    }
  };

  return (
    <div
      className={`card transition-all transform ease-in-out cursor-pointer ${
        flipped ? "" : "hover:scale-[1.05]"
      } `}>
      <div className={flipped ? "flipped" : ""}>
        <img
          src={card.src}
          className="front card block w-full rounded-lg border-2 border-solid border-black z-10"
          alt="front"
        />
        <img
          src="/img/cover.png"
          className="back card block w-full rounded-lg border-2 border-solid border-black z-0"
          alt="back"
          onClick={handleClick}
        />
      </div>
    </div>
  );
};

export default SingleCard;
