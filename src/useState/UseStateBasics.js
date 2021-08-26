import React, { useState } from "react";

//use - hooks zaczynaja się zawsze od słowa use (useEffect, useState itd)
//nazwa komponentu musi być uppercase
// musi się znajdować wewnątrz funkcji/ ciała komponentu
// nie można wywołać hook warunkowo



const UseStateBasics = () => {
    // console.log(useState('hello world'));
    // const value = useState(1)[0];
    // const handler = useState(1)[1];
    // console.log(value, handler);

    const [text, setText] = useState('random title'); //tutaj podaje się default value, więc jeśli takiej nie ma to daj null

    const handleClick = () => {
        if (text === 'random title') {
            setText('hello world !!!'); //dzięki useState zmieniamy wartość zmiennej text i można ją wyrenderować
        } else {
            setText('random title');
        }
    }

    return (
        <React.Fragment>
            <h1>{text}</h1>
            <button className="btn" onClick={handleClick}>change title</button>
        </React.Fragment>
    )
};

export default UseStateBasics;