import { useContext} from 'react';
import { Store } from '../utils/Store';
import {Scrap} from '../component/scrap'


function Home() {
  const {state} = useContext(Store);
  const {userInfo} = state;
  
  return (
  <div>
      <div> <Scrap/></div>:      
  </div>);
}

export default Home;
