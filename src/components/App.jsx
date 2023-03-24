import { User } from "./User/User";
import user from '../user.json';

export const App = () => {
  return  <>
            <User user={user} />
          </>
};
