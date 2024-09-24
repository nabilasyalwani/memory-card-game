const Background = (props) => {
  return (
    <div className="bg-[url('/img/back_ground.png')] bg-cover bg-fixed min-h-screen">
      {props.children}
    </div>
  );
};

export default Background;
