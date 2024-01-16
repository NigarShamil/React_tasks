import React from 'react';
import UserData from './UserData';
import userData from './userdata.json'; 
import './user.css'

export default function List() {
    return (
        <div>
            <h1>User List</h1>
            <div  className='container_m'>
            {userData.map((user, index) => (
                <UserData key={index} {...user} isSenior={user.age > 60} isChild={user.age < 18} />
            ))}
            </div>
        </div>
    );
}


