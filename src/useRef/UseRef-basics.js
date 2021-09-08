import { useEffect, useRef } from "react";

//ten hook służy do złapania jakiegoś konkretnego węzła, elementu i do zrobienia z nim czegoś (zamiast getElemntBy... albo querySelector...)

//preserves value
//DOES NOT trigger re-render so you can use useEffect without second parameter as a dependency 
//target DOM nodes/elements

//current wskazuje na element na którym ustawiony jest jako atrybut ref

const UseRefBasics = () => {

    const refContainer = useRef(null);
    const divContainer = useRef(null);

    const handleSubmit = e => {
        e.preventDefault();
        console.log(refContainer.current.value);
        console.log(divContainer.current);
    }

    useEffect(() => {
        console.log(refContainer.current);
        refContainer.current.focus(); //dodaje efekt focus na tym elemencie
    })

    return (
        <>
        <form className="form" onSubmit={handleSubmit}>
            <div>
                <input type="text" ref={refContainer} />
                <button type="submit">submit</button>
            </div>
        </form>
        <div ref={divContainer}>hello world</div>
        </>
    );
};

export default UseRefBasics;