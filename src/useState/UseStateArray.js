import { useState } from "react";
import { data } from "../data";

const UseStateArray = () => {
    
    const [people, setPeople] = useState(data);

    const removeItem = id => {
        const newPeople = people.filter(person => person.id !== id);
        setPeople(newPeople);
    }

    //przykład z wykorzystaniem functional update
    // const removeItem = id => {
    //     setPeople( oldPeople => {
    //         const newPeople = oldPeople.filter(person => person.id !== id);
    //         return newPeople;
    //     })
    // }
    
    return (
        <>
            {
                people.map(person => {
                    const {id, name} = person;
                    return (
                        <div key={ id } className="item">
                            <h4>{ name }</h4>
                            <button className="btn" onClick={() => removeItem(id)}>remove item</button>
                        </div>
                    ) 
                })
            }
            <button className="btn" onClick={() => setPeople([])}>clear items</button>
        </>
    );
}

export default UseStateArray;