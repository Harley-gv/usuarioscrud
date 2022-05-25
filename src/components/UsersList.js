
import './UsersList.css'
import UsersForm from './UsersForm';

const UsersList = ({ users, update, selectedUser, selected, deleteUser }) => {




    return (
        <div>

            <UsersForm update={update} selected={selected} />



            <ul key={users.id} className='user-list'>
                {
                    users.map(user => (
                        <li className='card' key={user.id}>
                            <p>{user.first_name} {user.last_name}</p>
                            <h3>Correo:</h3>
                            <p>{user.email}</p>
                            <h3>Cumpleaños:</h3>
                            <p>{user.birthday}</p>

                            <button onClick={() => selectedUser(user)} >edit</button>
                            <button onClick={() => deleteUser(user.id)}>delete</button>
                            <p>{user.id}</p>
                        </li>

                    ))

                }

            </ul>
        </div>
    );
};

export default UsersList;