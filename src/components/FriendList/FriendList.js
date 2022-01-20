import PropTypes from "prop-types";
import s from "./FriendList.module.css";
import FriendListItem from "components/FriendListItem";

function FriendList({ friends }) {
  return (
    <ul className={s.list}>
      {friends.map((friend) => (
        <FriendListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </ul>
  );
}
FriendList.propTypes = {
  children: PropTypes.node,
};
export default FriendList;
