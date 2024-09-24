const P = (props) => {
  const { children = "...", variant } = props;
  return (
    <p
      className={`text-lg font-semibold border-2 border-solid border-black rounded-lg px-8 bg-white ${variant} py-2`}>
      {children}
    </p>
  );
};

export default P;
