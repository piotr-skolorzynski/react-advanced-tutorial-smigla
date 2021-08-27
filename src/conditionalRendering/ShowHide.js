import { useState, useEffect } from "react";

const ShowHide = () => {
    const [show, setShow] = useState(false);

    return (
        <>
            <button className="btn" onClick={() => setShow(!show)}>show/hide</button> {/*sztuczka ze zmianą boolean w reactie*/}
            {show && <Item />}
        </>
    );
}

//inny component do pokazywania na stronie
const Item = () => {
    const [size, setSize] = useState(window.innerWidth);

    const checkSize = () => {
        setSize(window.innerHeight);
    }

    useEffect(() => {
        window.addEventListener('resize', checkSize);
        return () => window.removeEventListener('resize', checkSize) //cleanup function żeby był tylko jeden eventlistner
    }, [])

    return (
        <div style={{marginTop:'2rem'}}>
            <h1>window</h1>
            <h2>size: { size } px </h2>
        </div>
    );
}

export default ShowHide;