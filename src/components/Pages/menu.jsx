import Background from "../Elements/Background";
import Button from "../Elements/Button";
import { Link } from "react-router-dom";

const MenuPage = (props) => {
  const { children } = props;
  return (
    <Background>
      <div className="min-h-screen flex justify-center items-center text-center">
        <div className="max-w-xl mx-auto bg-white/80 backdrop-blur-[2px] rounded-xl md:py-5 border-[3px] border-solid border-black">
          <h2 className="text-xl font-semibold p-4 px-16 sm:px-24  md:px-32">
            Select Menu Difficulty
          </h2>
          <div className="mx-auto max-w-min flex flex-col justify-center items-center pb-4">
            <Link to="/game" state={{ difficulty: "Easy" }}>
              <Button variant="my-2 bg-orange-500">Easy</Button>
            </Link>
            <Link to="/game" state={{ difficulty: "Medium" }}>
              <Button variant="my-2 bg-orange-500">Medium</Button>
            </Link>
          </div>
        </div>
      </div>
    </Background>
  );
};

export default MenuPage;
