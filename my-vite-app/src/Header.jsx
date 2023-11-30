
const Header = function(props) {

  return (
    <div className="Header">
      <div>{props.text}</div>

      <div>
        You have <span>5</span> friends
      </div>

    </div>
  );

};

export default Header;