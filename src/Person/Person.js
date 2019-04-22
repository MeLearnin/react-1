import React from 'react';

import classes from './Person.css';

const person = (props) => {

    const rnd = Math.random();
    if(rnd>0.7) {
        throw new Error("something went wrong")
    }

    return (
        <div className={classes.Person}>
            <p onClick={props.click}>im {props.name} and i am {props.age}</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.change} value={props.name}/>
        </div>
    )
};

export default person;