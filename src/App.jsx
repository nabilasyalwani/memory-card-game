import React, { useEffect } from "react";
import Button from "./components/Elements/Button";
import P from "./components/Elements/P";
import Header1 from "./components/Elements/Header1/index.jsx";
import SingleCard from "./components/Layouts/SingleCard.jsx";
import Background from "./components/Elements/Background";
import { Link } from "react-router-dom";

const cardImages_1 = [
  { src: "img/alfa.jpg", matched: false },
  { src: "img/bentley.jpg", matched: false },
  { src: "img/bmw.jpg", matched: false },
  { src: "img/ferrari.jpg", matched: false },
  { src: "img/jaguar.jpg", matched: false },
  { src: "img/audi.jpg", matched: false },
];

const cardImages_2 = [
  { src: "img/daihatsu.jpg" },
  { src: "img/ford.jpg" },
  { src: "img/mercedes.jpg" },
  { src: "img/nissan.jpg" },
  { src: "img/porsche.jpg" },
  { src: "img/toyota.jpg" },
  { src: "img/volkswagen.jpg" },
  { src: "img/mg.jpg" },
];

function App() {
  const [cards, setCards] = React.useState([]);
  const [turns, setTurns] = React.useState(0);
  const [choiceOne, setChoiceOne] = React.useState(null);
  const [choiceTwo, setChoiceTwo] = React.useState(null);
  const [disabled, setDisabled] = React.useState(false);

  const shuffleCards = () => {
    const shuffledCards = [...cardImages_1, ...cardImages_1]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setChoiceOne(null);
    setChoiceTwo(null);
    setCards(shuffledCards);
    setTurns(0);
  };

  // console.log(cards, turns);

  const handleChoice = (card) => {
    console.log(card);
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);
      if (choiceOne.src === choiceTwo.src) {
        console.log("match");
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
        console.log("doesnt match");
        setTimeout(() => resetTurn(), 500);
      }
    }
  }, [choiceOne, choiceTwo]);

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
          className="mt-[40px] mx-5 grid grid-cols-4 gap-4 lg:grid-cols-6 "
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
        <div className="justify-center items-center text-center mt-10 pb-10">
          <P variant="w-full">Turns: {turns}</P>
        </div>
      </div>
    </Background>
  );
}

export default App;
