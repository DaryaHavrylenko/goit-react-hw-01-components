import { UserCards } from './UserCards/UserCards';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import user from './user.json';
import data from './data.json'
import friends from './friends.json';



export const App = () => {
  return (
    <div>
      <UserCards username={user.username}
        tag={user.tag} location={user.location} avatar={user.avatar} stats={user.stats} />
      <Statistics title="Upload stats" stats={data} />

      <FriendList friends = {friends} />
  </div>
 )
  
    
  
}
