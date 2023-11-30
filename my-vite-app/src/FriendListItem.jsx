
const FriendListItem = function(props) {

  return (
    <div className="FriendListItem">

      <li
        onClick={props.deleteItem}>
        {props.item.name}
      </li>

    </div>
  );

};

export default FriendListItem;