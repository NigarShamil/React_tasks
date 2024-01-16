
import React from 'react';
import './user.css'

export default function UserData({ username, age, tel, isSenior, isChild }) {
    const cardBackgroundColor = isSenior ? 'darkviolet': isChild ? "khaki" : 'lightseagreen';

    return (
        <div className='card' style={{ backgroundColor: cardBackgroundColor }}>
            <p>Username: {username}</p>
            <p>Age: {age}</p>
            <p>Telephone: {tel}</p>
            <hr/>
        </div>
    );
}
