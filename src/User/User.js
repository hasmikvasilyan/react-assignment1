import React from 'react';
import './User.css';

export const UserInput=(props)=>{
    return(
        <div className="userInput">
            <input style={props.style} onChange={props.change} value={props.username}/>
        </div>
    )
}
 export const UserOutput=(props)=>{
    return(
        <div className="userOutput">
            <p>Username</p>
            <p>{props.username}</p>
        </div>
    )
 }



