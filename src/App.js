import { Fragment } from "react";
import Section from "components/Section";
import Container from "components/Container";
import Profile from "components/Profile";
import Statistics from "components/Statistics";
import FriendList from "components/FriendList";
import TransactionHistory from "components/TransactionHistory";

import user from "./user.json";
import data from "./data.json";
import friends from "./friends.json";
import transactions from "./transactions.json";

function App() {
  return (
    <Fragment>
      <Section type="profile">
        <Container>
          <Profile
            username={user.username}
            tag={user.tag}
            location={user.location}
            avatar={user.avatar}
            stats={user.stats}
          />
        </Container>
      </Section>
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <Section>
        <Container>
          <FriendList friends={friends} />
        </Container>
      </Section>
      <Section>
        <Container>
          <TransactionHistory items={transactions} />
        </Container>
      </Section>
    </Fragment>
  );
}
export default App;
