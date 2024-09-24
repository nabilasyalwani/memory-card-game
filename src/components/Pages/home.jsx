import Background from "../Elements/Background";
import Button from "../Elements/Button";
import Header1 from "../Elements/Header1";
import P from "../Elements/P";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <Background>
      <div className="min-h-screen mx-auto flex flex-col justify-center items-center text-center ">
        <Header1 variant="bg-white text-[#f06902] hover:shadow-black/20">
          Welcome to
        </Header1>
        <Header1 variant="bg-[#f06902] text-white hover:shadow-orange-500/30">
          Memory Card Game
        </Header1>
        <P variant="my-5">Wanna start the game?</P>
        <Link to="/menu">
          <Button variant="bg-orange-500">Yes</Button>
        </Link>
      </div>
    </Background>
  );
};

export default HomePage;
