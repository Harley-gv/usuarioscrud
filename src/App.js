import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import UsersList from './components/UsersList'

function App() {

   const [users, setUsers] = useState([]);
   const [userSelected, setUserSelected] = useState(null);


   useEffect(() => {
      axios.get('https://users-crud1.herokuapp.com/users/').then(res => setUsers(res.data))
   }, [])

   const update = () => {
      axios.get('https://users-crud1.herokuapp.com/users/').then(res => setUsers(res.data))
   }


   const deleteUser = (id) => {
      axios.delete(`https://users-crud1.herokuapp.com/users/${id}/`).then(() => update())
   }


   const selectedUser = user => setUserSelected(user);


   return (
      <div className="App">
         < Header />
         < UsersList users={users} update={update} selectedUser={selectedUser} selected={userSelected} deleteUser={deleteUser} />
      </div>
   );
}

export default App;
