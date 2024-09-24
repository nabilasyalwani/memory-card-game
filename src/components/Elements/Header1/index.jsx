const Header1 = (props) => {
  const { children = "...", variant } = props;
  return (
    <h1
      className={`${variant} text-5xl font-poppins md:text-6xl p-5 px-8 rounded-full border-black border-[3px] m-5 text-center hover:shadow-lg`}>
      {props.children}
    </h1>
  );
};

export default Header1;
