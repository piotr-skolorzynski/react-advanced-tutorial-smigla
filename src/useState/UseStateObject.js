import { useState } from "react";

//w przypadku obiektów jest problem bo jeśli przekażesz np. stringa do setPerson to ci wszystko wymaże
// jeśli przekażesz obiekt np. {message: hello world} to wymaże pozostałe klucze
// dlatego rozwiązaniem jest używanie spread operator


const UseStateObject = () => {

    const [person, setPerson] = useState({name: 'Peter', age: 39, message: 'random message'});

    const changeMessage = () => {
        setPerson({ ...person, message: 'hello world' }); //bardzo ważna sprawa do zapamiętania, SPREAD OPERATOR !!!!
    }

    return (
        <>
            <h3>{person.name}</h3>
            <h3>{person.age}</h3>
            <h3>{person.message}</h3>
            <button className="btn" onClick={changeMessage}>change message</button>
        </>

    );
}

//example of using multiple state values

// const UseStateWithMulitplyValues = () => {

//     const [name, setName] = useState('Peter');
//     const [age, setAge] = useState(39);
//     const [message, setMessage] = useState('random message');



//     const changeMessage = () => {
//         setMessage('hello world'); 
//     }

//     return (
//         <>
//             <h3>{name}</h3>
//             <h3>{age}</h3>
//             <h3>{message}</h3>
//             <button className="btn" onClick={changeMessage}>change message</button>
//         </>

//     );
// }

export default UseStateObject;