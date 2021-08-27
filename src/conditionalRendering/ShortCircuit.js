import { useState } from "react";

// short-circuit evaluation
// ternary operator

//tutaj robimy troszkę innaczej tzn. mamy jedno renderowanie ale warunkowe, dlatego powyższe operatory się przydają, if wywala błąd


const ShortCircuit = () => {

    const [text, setText] = useState('');
    const [isError, setIsError] = useState(false);

    // const firstValue = text || 'hello world'; //tutaj zawsze coś zwraca bo jeśli pierwszy warunek jest false to drugi nawet jeśli jest false to zostanie zwrócony (np. zamiast pustego stringa wpiszę mleko to zwróci mi mleko)
    // const secondValue = text && 'hello world'; //tutaj zawsze zwracany jest drugi warunek przy założeniu że pierwszy jest truthy (tutaj jak wpiszę np. mleko to zwróci hello world)

    return (
        <>
        {/* <h1>{ firstValue }</h1>
        <h1>value: { secondValue }</h1> */}

        <h1>{ text || 'john doe' }</h1>
        <button className="btn" onClick={() => setIsError(!isError)}>toggle error</button>
        { isError && <h1>Error...</h1>}
        
        {/*
        przykład użycia ternary operator 
        {isError ? <h1>There is error...</h1> : <h1>There is no error...</h1>}     
        */}

        </>
    );
}

export default ShortCircuit;