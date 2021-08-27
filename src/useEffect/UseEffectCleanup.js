import { useState, useEffect } from "react";

//cleanup function
//second argument


const UseEffectCleanup = () => {
    const [size, setSize] = useState(window.innerWidth);
    
    const checkSize = () => {
        setSize(window.innerWidth);
    }

    useEffect(() => {
        //tutaj pojawia się problem tzn. addEventListener z tym samym callbackiem może być podczepiony wielokrotnie
        //powoduje to pożeranie pamięci dlatego potrzebujem cleanup function
        //dałem jako drugi argument tablicę i zadziałało ale pytanie czy zawsze możemy sobie na to pozwilić (okazuje się że staje się to problematyczne gdy component znika ze strony bo wchodzi inny ale pozostaje listener i po ponownym załadowaniu komponentu ponownie dodamy listenera)
        
        console.log('useEffect');
        window.addEventListener('resize', checkSize);
        
        //wykorzystanie cleanup function: - to zastosowanie to jedna z dobrych praktyk

        return () => {
            console.log('cleanup');
            //tutaj odpinamy nasłuchiwanie i jednocześnie aktualizujemy szerokość okna
            window.removeEventListener('resize', checkSize);
        } 
    })

    console.log('render');
    return (
        <>
            <h1>window</h1>
            <h2>{size} PX</h2>
        </>
    );
}

export default UseEffectCleanup;