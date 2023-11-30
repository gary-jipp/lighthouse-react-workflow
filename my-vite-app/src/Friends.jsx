import FriendList from "./FriendList";
import Input from "./Input";

const Friends = function(props) {
  console.log(props.items);

  return (
    <div className="Friends">
      <Input />
      <FriendList items={props.items}
        deleteItem={props.deleteItem} />
    </div>
  );

};

export default Friends;