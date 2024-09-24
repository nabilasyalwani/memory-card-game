const Background = (props) => {
  return (
    <div className="bg-[url('img/background.png')] bg-cover bg-fixed min-h-screen">
      {props.children}
    </div>
  );
};

export default Background;
