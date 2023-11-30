import FriendListItem from "./FriendListItem";

const FriendList = function(props) {

  const list = props.items.map(item => {
    return (
      <FriendListItem
        key={item.uid}
        item={item}
        deleteItem={() => props.deleteItem(item.uid)}
      />
    );
  });

  return (
    <div className="FriendList">

      <ul>
        {list}
      </ul>

    </div>
  );

};

export default FriendList;