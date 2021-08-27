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

    //funkcja useEffect odpala callback za każdym razem gdy dochodzi do ponownego renderowania strony, przykład bez drugiego argumnetu
    // useEffect(() => {
    //     console.log('call useEffect');
    //     //example of using conditional in callback function to re-render
    //     if (value > 0) document.title = `New Messages(${value})`
    // });

    //przykład useEffect z wykorzystaniem drugiego argumentu tzw. dependency list w postaci tabblicy,
    // pozwala określić jakiej zależności ma dotyczyć renderowanie
    // jeżeli jest pusta to odpala renderowanie tylko raz przy tzw. initial render
    // wewnątrz tablicy można wypisać tyle zależności ile chcemy żeby wykonał się callback w tym useEffect
    useEffect(() => {
        console.log('call useEffect');
        //example of using conditional in callback function to re-render
        if (value > 0) document.title = `New Messages(${value})`
    }, [value]);

    useEffect(() => {
        console.log('hello world');
    }, []);

    console.log('render component');
    return (
        <>
            <h1>{value}</h1>
            <button className="btn" onClick={handleClick}>increase</button>
        </>
    );
}

export default UseEffectBasics;