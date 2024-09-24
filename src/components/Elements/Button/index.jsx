const Button = (props) => {
  const { children = "...", variant = "bg-black", onClick } = props;
  return (
    <button
      className={`h-10 px-6 font-semibold rounded-lg ${variant} text-white border-2 border-black hover:bg-white hover:text-orange-500`}
      type="submit"
      onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
