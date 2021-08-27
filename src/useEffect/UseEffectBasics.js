import { useState, useEffect } from "react";


//  useEffect:
//by default runs after every re-render
// Reminder: we cannot use conditional in hooks !!!!! - solutions?? use conditional iside callback function
//cleanup function
//second parameter

const UseEffectBasics = () => {

    const [value, setValue] = useState(0);

    const handleClick = () => {
        setValue(value + 1)
    }

    //funkcja useEffect odpala callback za każdym razem gdy dochodzi do ponownego renderowania strony
    useEffect(() => {
        console.log('call useEffect');
        //example of using conditional in callback function to re-render
        if (value > 0) document.title = `New Messages(${value})`
    })
    console.log('render component');
    return (
        <>
            <h1>{value}</h1>
            <button className="btn" onClick={handleClick}>increase</button>
        </>
    );
}

export default UseEffectBasics;