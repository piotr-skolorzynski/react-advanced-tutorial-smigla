import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import { data } from "../data";

const Person = () => {
    const [name, setName] = useState('default name');
    const { id } = useParams();

    useEffect(() => {
        //normalnie po pobraniu id powinniśmy zrobić fetch do bazy danych żeby operować na najświeższych danych
        const newPerson = data.find(person => person.id === parseInt(id));
        setName(newPerson.name)
    }, [id])

    return (
        <div>
            <h1>{name}</h1>
            <Link to="/people" className="btn">
                Back To People
            </Link>
        </div>

    );
}
 
export default Person;