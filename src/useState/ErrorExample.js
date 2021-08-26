import React from "react";

export const ErrorExample = () => {

    let title = 'random title'

    const handleClick = () => {
        title = 'hello people';
        console.log(title);
    }

    return (
        <React.Fragment>
            <h2>{title}</h2>
            <button type="button" className="btn" onClick={handleClick}>change title</button>
        </React.Fragment>
    );
}

// w czym jest problem ?????

// problem polega na tym, że jeśli klikniemy to wewnątrz funkcji dochodzi do zmiany wartości title ale nie wpływa to na wyrenderowanie komponentu, ja to rozumiem tak że zmiana na nową wartośc jest w zakresie lokalnym i metoda render nie ma dostępu do nowej wartości 

// dlatego potrzebne jest użycie hooks useState, który pozwala zmieniać stan zmiennej wewnątrz komponentu i udostępniać tą wartość metodzie render