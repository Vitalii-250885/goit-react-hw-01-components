import friends from "../friends.json";
import user from '../user.json';
import stats from '../data.json';
import transactions from "../transactions.json"

import { FriendList } from "./FriendList/FriendList";
import { Profile } from "./Profile/Profile";
import { Statistics } from './Statistics/Statistics';
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";


export const App = () => {
  return  <>
            <Profile user={user} />
            <Statistics title="UPLOAD STATS" stats={stats} />
            <FriendList friends={friends} />
            <TransactionHistory transactions={transactions}/>
          </>
};