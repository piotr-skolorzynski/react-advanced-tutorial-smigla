import { useState, useReducer } from 'react'; 
import Modal from './Modal';
import { data } from '../data';

//reducer function
// w useReducer pierwszym argumentem jest funkcja zwana reducer i jak chcesz zrobić coś ze stanem to za każdym razem używasz dispatch. Reducer bierze stary state i działa z nim i zwraca!  nowy stan (bez zwracania nowego stanu działanie tej funckji nie ma sensu i wywala błąd). Reducer wyrzuca się poza komponent. Drugi komponent to tzw. initial state (dane wejściowe), też można to wyrzucić poza komponent

const reducer = (state, action) => {
    if (action.type === 'ADD_ITEM') {
        const newPeople = [...state.people, action.payload]
        return {
            ...state,
            people: newPeople,
            isModalOpen: true,
            modalContent: 'item added'
            }
    }

    if(action.type === 'NO_VALUE') {
        return {
            ...state,
            isModalOpen: true,
            modalContent: 'please enter value'
        }
    }

    throw new Error('no matching action type');
};

const defaultState = {
    people: [],
    isModalOpen: false,
    modalContent: ''
}

const Index = () => {
    const [name, setName] = useState('');
    const [state, dispatch] = useReducer(reducer, defaultState);

    const handleSubmit = e => {
        e.preventDefault();
        if(name) {
            const newItem = {
                id: new Date().getTime().toString(),
                name
            }
            //w dispatch zawsze podajemy obiekt
            dispatch({type:'ADD_ITEM', payload: newItem});
            setName('');
        } else {
            dispatch({type: 'NO_VALUE'}); //nadanie nazwy typowi akcji który służy do generowanie błędów
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