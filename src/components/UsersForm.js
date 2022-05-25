import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './UsersForm.css'

const UsersForm = ({ update, selected }) => {

    const [name, setName] = useState('')
    const [firstName, setFirstName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [date, setDate] = useState('')

    useEffect(() => {
        console.log(selected)
        if (selected !== null) {
            setName(selected.first_name)
            setFirstName(selected.last_name)
            setEmail(selected.email)
            setPassword(selected.password)
            setDate(selected.birthday)
        }
    }, [selected])
    //console.log(selected)
    const add = e => {
        e.preventDefault();
        console.log('add user')
        const user = {
            first_name: name,
            last_name: firstName,
            email: email,
            password: password,
            birthday: date

        }
        if (selected !== null) {
            axios.put(`https://users-crud1.herokuapp.com/users/${selected.id}/`, user).then(() => update())
        } else {
            axios.post('https://users-crud1.herokuapp.com/users/', user).then(() => update())
        }
    }


    return (
        <div>
            <form className='form' onSubmit={add} >
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                        Name:
                    </label>

                    <input type="text"
                        className='form-control'
                        id='name'
                        placeholder='name'
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="firstname" className="form-label">
                        Apellido:
                    </label>

                    <input type="text"
                        className='form-control'
                        id='firstname'
                        placeholder='firstname'
                        value={firstName}
                        onChange={e => setFirstName(e.target.value)}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                        Email:
                    </label>

                    <input type="email"
                        className='form-control'
                        id='email'
                        placeholder='email'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                        Contraseña:
                    </label>

                    <input type="text"
                        className='form-control'
                        id='password'
                        placeholder='password'
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="date" className="form-label">
                        Fecha de Nacimiento:
                    </label>

                    <input type="date"
                        className='form-control'
                        id='date'
                        placeholder='date'
                        value={date}
                        onChange={e => setDate(e.target.value)}
                    />

                    <button type='submit' >Add user</button>
                </div>
            </form>

        </div>
    );
};

export default UsersForm;