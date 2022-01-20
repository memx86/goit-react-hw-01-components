import Profile from "components/Profile";
import Statistics from "components/Statistics";
import FriendList from "components/FriendList";
import user from "./user.json";
import data from "./data.json";
import friends from "./friends.json";

function App() {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />;
    </div>
  );
}
export default App;
