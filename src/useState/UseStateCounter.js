import { useState } from "react";

const UseStateCounter = () => {

    const [value, setValue] = useState(0);

    //oczywiście zamiast pisać funkcje liniowo można je wyprowadzić właśnie tutaj jak w poprzednich przykład, jak kto woli albo jak zespół ustali

    const complexIncrease = () => {
        setTimeout(() => {
            // setValue(value + 1); //jeżeli zrobimy w ten sposób to jeśli w ciągu 2 sek (czyli opóźnienia tego timeout) klikniemy np. trzy razy to wartość nie podniesie się o 3 tylko o 1 ponieważ w każdym z tych kliknięć funkcja pobiera aktualne value które wynosi zero. Aktualizacja jest dopiero po 2 sek. dlatego stosuje się funkcje. 
            //Niektórzy stosują tylko taką metodę aktualizacji. Tutaj jest niezbędna bo mamy opóźnienie
            //Przykład poniżej:
            setValue(prevState => prevState +=1);
        }, 2000);
    };

    return (
        <>
            <section style={{margin: '4rem 0'}}>
                <h2>regular counter</h2>
                <h1>{ value }</h1>
                <button className="btn" onClick={() => setValue(value - 1)}>decrease</button>
                <button className="btn" onClick={() => setValue(0)}>reset</button>
                <button className="btn" onClick={() => setValue(value + 1)}>increase</button>
            </section>  

            <section style={{margin: '4rem 0'}}>
                <h2>more complex counter</h2>
                <h1>{ value }</h1>
                <button className="btn" onClick={complexIncrease}>increase later</button>
            </section>

        </>
    );
}

export default UseStateCounter;