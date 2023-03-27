import { User } from "./User/User";
import user from '../user.json';
import statistics from '../data.json';
import { StatisticList } from './Statistics/StatisticList';
import { Friend } from "./Friends/Friend";
import friends from "../friends.json";
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";
import transactions from "../transactions.json"

export const App = () => {
  return  <>
            <User user={user} />
            <StatisticList statistics={statistics} />
            <Friend friends={friends} />
            <TransactionHistory transactions={transactions}/>
          </>
};