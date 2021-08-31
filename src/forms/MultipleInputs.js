import { useState } from "react";


//situation when you have more inputs
//dynamic object properties

const MultipleInputs = () => {

    //idea jest taka, że jak rośnie nam liczba inputów to robi się masakra z robotą
    //chodzi o to żeby korzystać z jednego stanu i jednej funkcji
    // const [firstName, setFirstName] = useState('');
    // const [email, setEmail] = useState('');
    // const [age, setAge] = useState('');


    const [person, setPerson] = useState({ firstName: '', email: '', age: '' });
    const [people, setPeople] = useState([]);

    const handleChange = e => {
        //tutaj wykorzystamy nasz event, który pokaże nazwę naszego inputa bo mu nadaliśmy więc można ją wykorzystać do ustawienia odpowiedniej wartośćw obiekcie
        const name = e.target.name;
        const value = e.target.value;
        //bardzo ważne, trzeba najpierw skopiować cały obiekt i dopiero wtedy podmieniamy poszczególne wartości
        setPerson({...person, [name]: value});
    };

    const handleSubmit = e => {
        e.preventDefault();
        if (person.firstName && person.email && person.age) {
            const newPerson = { ...person, id: new Date().getTime().toString()};
            setPeople([...people, newPerson]);
            setPerson({firstName: '', email: '', age: ''});
        }
    }

    return (
        <>
            <article>
                <form className="form" onSubmit={handleSubmit}>
                    <div className="form-control">
                        <label htmlFor="firstName">Name : </label>
                        <input type="text" id="firstName" name="firstName" value={person.firstName} onChange={handleChange}/>
                    </div>
                    <div className="form-control">
                        <label htmlFor="email">Email : </label>
                        <input type="text" id="email" name="email" value={person.email} onChange={handleChange}/>
                    </div>
                    <div className="form-control">
                        <label htmlFor="age">Age : </label>
                        <input type="text" id="age" name="age" value={person.age} onChange={handleChange}/>
                    </div>
                    <button type="submit">add person</button>
                </form>
                {
                    people.map(person => {
                        const {id, firstName, email, age} = person;
                        return <div className="item" key={id}>
                            <h4>{firstName}</h4>
                            <p>{email}</p>
                            <p>{age}</p>
                        </div>
                    })
                }
            </article>
        </>
    );
}
 
export default MultipleInputs;