import { useContext} from 'react';
import { Store } from '../utils/Store';
import axios from 'axios';

function Scrap() {
  const {state} = useContext(Store);
  const url = 'http://localhost/api/scrap/';

//   save to database
  const handleSaveScrap=()=>{
    e.preventDefault();
    console.log(email, password)
        axios.post(url, {email:email,product:product, price:price}, {
        headers: {
        'Content-Type': 'application/json',
        'cb-client-api-key': '6df22a6a-c971-493f-9161-6ecfc72ddc35'
        },
    }).then((response) => {
        console.log(response.data)
        }).catch((error) => {
        console.log(error)
      })
  }
  return (
  <div>
            
  </div>);
}

export default Scrap;
