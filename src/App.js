import Profile from "components/Profile";
import user from "./user.json";
import Statistics from "components/Statistics";
import data from "./data.json";
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
      <Statistics stats={data} />
    </div>
  );
}
export default App;
