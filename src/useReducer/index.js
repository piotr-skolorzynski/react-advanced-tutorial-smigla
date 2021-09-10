import { useState, useReducer } from 'react'; 
import Modal from './Modal';
import { data } from '../data';

//reducer function
// w useReducer pierwszym argumentem jest funkcja zwana reducer i jak chcesz zrobić coś ze stanem to za każdym razem używasz dispatch. Reducer bierze stary state i działa z nim i zwraca nowy stan. Reducer wyrzuca się poza komponent. Drugi komponent to tzw. initial state (dane wejściowe), też można to wyrzucić poza komponent

const reducer = (state, action) => {

};

const defaultState = {
    people: [],
    isModalOpen: false,
    modalContent: 'hello world!'
}

const Index = () => {
    const [name, setName] = useState('');
    const [state, dispatch] = useReducer(reducer, defaultState);

    const handleSubmit = e => {
        e.preventDefault();
        if(name) {

        } else {

        }
    }

    return (
        <>
            {state.isModalOpen && <Modal modalContent={state.modalContent} />}
            <form className="form" onSubmit={handleSubmit}>
                <div>
                    <input type="text" value={name} onChange={e => setName(e.target.value)} />
                </div>
                <button type="submit">add </button>
            </form>
            {state.people.map(person => {
                return (
                    <div key={person.id}>
                        <h4>{person.name}</h4>
                    </div>
                );
            })}
        </>
    );
}

export default Index;