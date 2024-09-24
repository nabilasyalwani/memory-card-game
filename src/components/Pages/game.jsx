import React, { useEffect } from "react";
import Background from "../Elements/Background";
import Button from "../Elements/Button";
import Header1 from "../Elements/Header1/index.jsx";
import P from "../Elements/P";
import SingleCard from "../Layouts/SingleCard.jsx";
import { Link, useLocation } from "react-router-dom";

const cardImages_1 = [
  { src: "img/alfa.jpg", matched: false },
  { src: "img/bentley.jpg", matched: false },
  { src: "img/bmw.jpg", matched: false },
  { src: "img/ferrari.jpg", matched: false },
  { src: "img/jaguar.jpg", matched: false },
  { src: "img/audi.jpg", matched: false },
];

const cardImages_2 = [
  { src: "img/ford.jpg", matched: false },
  { src: "img/mercedes.jpg", matched: false },
  { src: "img/nissan.jpg", matched: false },
  { src: "img/porsche.jpg", matched: false },
  { src: "img/toyota.jpg", matched: false },
  { src: "img/volkswagen.jpg", matched: false },
];

function MemoryCardGame({ difficulty }) {
  const [cards, setCards] = React.useState([]);
  const [turns, setTurns] = React.useState(0);
  const [choiceOne, setChoiceOne] = React.useState(null);
  const [choiceTwo, setChoiceTwo] = React.useState(null);
  const [disabled, setDisabled] = React.useState(false);
  const [gameWon, setGameWon] = React.useState(false);

  const shuffleCards = () => {
    const cardImages =
      difficulty === "Easy" ? cardImages_1 : [...cardImages_1, ...cardImages_2];

    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setChoiceOne(null);
    setChoiceTwo(null);
    setCards(shuffledCards);
    setTurns(0);
    setGameWon(false);
  };

  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);
      if (choiceOne.src === choiceTwo.src) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.src === choiceOne.src) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        resetTurn();
      } else {
        setTimeout(() => resetTurn(), 500);
      }
    }
  }, [choiceOne, choiceTwo]);

  useEffect(() => {
    if (cards.length > 0 && cards.every((card) => card.matched)) {
      setGameWon(true);
    }
  }, [cards]);

  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurns) => prevTurns + 1);
    setDisabled(false);
  };

  useEffect(() => {
    shuffleCards();
  }, []);

  return (
    <Background>
      <div className="max-w-xl mx-auto ">
        <div className="flex flex-col justify-center items-center ">
          <Header1 variant="bg-white text-[#f06902]">Memory Card</Header1>
          <div className="flex flex-row gap-10">
            <Button variant="bg-orange-500" onClick={shuffleCards}>
              New Game
            </Button>
            <Link to="/">
              <Button variant="bg-orange-500">Back to Menu</Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="sm:max-w-md max-w-lg mx-auto lg:max-w-4xl">
        <div
          className={`mt-[40px] mx-5 grid gap-4  ${
            difficulty === "Medium"
              ? "lg:grid-cols-8 grid-cols-6"
              : "lg:grid-cols-6 grid-cols-4 "
          } `}
          data-aos="zoom-in">
          {cards.map((card) => (
            <SingleCard
              key={card.id}
              card={card}
              handleChoice={handleChoice}
              flipped={card === choiceOne || card === choiceTwo || card.matched}
              disabled={disabled}
            />
          ))}
        </div>
        <div className=" mt-10 pb-10">
          <div className=" justify-around items-center flex flex-row text-md font-semibold border-2 border-solid border-black rounded-lg px-8 bg-white ">
            <p>Turns: {turns}</p>
            <p>Mode: {difficulty}</p>
          </div>
        </div>
      </div>

      {gameWon && (
        <div className="w-full h-full fixed top-0 left-0 flex items-center justify-center backdrop-filter backdrop-blur-sm backdrop-brightness-75 z-50">
          <div className="bg-white p-10 rounded-lg text-center shadow-lg border-2 border-solid border-black">
            <h2 className="text-3xl font-bold mb-4">Congratulations!</h2>
            <p className="text-lg">
              You've matched all the cards in {turns} turns!
            </p>
            <Button variant="bg-orange-500 mt-5" onClick={shuffleCards}>
              Play Again
            </Button>
          </div>
        </div>
      )}
    </Background>
  );
}

function GameWrapper() {
  const location = useLocation();
  const difficulty = location.state?.difficulty || "Easy";

  return <MemoryCardGame difficulty={difficulty} />;
}

export default GameWrapper;
