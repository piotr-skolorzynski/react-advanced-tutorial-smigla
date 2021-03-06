import { useState, useReducer } from 'react'; 
import Modal from './Modal';
import { data } from '../data';
import { reducer } from './reducer';
//reducer function
// w useReducer pierwszym argumentem jest funkcja zwana reducer i jak chcesz zrobić coś ze stanem to za każdym razem używasz dispatch. Reducer bierze stary state i działa z nim i zwraca!  nowy stan (bez zwracania nowego stanu działanie tej funckji nie ma sensu i wywala błąd). Reducer wyrzuca się poza komponent. Drugi komponent to tzw. initial state (dane wejściowe), też można to wyrzucić poza komponent

const defaultState = {
    people: data,
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

    const closeModal = () => {
        dispatch({type:'CLOSE_MODAL'});
    }

    return (
        <>
            {state.isModalOpen && <Modal modalContent={state.modalContent} closeModal={closeModal} />}
            <form className="form" onSubmit={handleSubmit}>
                <div>
                    <input type="text" value={name} onChange={e => setName(e.target.value)} />
                </div>
                <button type="submit">add </button>
            </form>
            {state.people.map(person => {
                return (
                    <div key={person.id} className="item">
                        <h4>{person.name}</h4>
                        <button onClick={() => dispatch({type:'REMOVE_ITEM', payload: person.id})}>remove</button>
                    </div>
                );
            })}
        </>
    );
}

export default Index;