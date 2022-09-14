import ActiveUsers from './ActiveUsers/ActiveUsers';
import InactiveUsers from './InactiveUsers/InactiveUsers';
import { BodyComponent } from './Body.model';


const Body = ({ isShowActive, users }) => (
  <BodyComponent>
    {
      isShowActive ? <ActiveUsers users={users}/> : <InactiveUsers users={users}/>
    }
  </BodyComponent>
)

export default Body;