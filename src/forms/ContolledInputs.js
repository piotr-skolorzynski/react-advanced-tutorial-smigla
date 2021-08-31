import { useState } from "react";

//JS
// f.e. const input = document.getElementById('myText');
// f.e. const inputValue = input.value
// React
// value, onChange

const ContolledInputs = () => {

    const [firstName, setFirstName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        console.log(firstName, email);
    }

    return (
        <>
            <article>
                <form className="form" onSubmit={handleSubmit}>
                    <div className="form-control">
                        <label htmlFor="firstName">Name : </label>
                        <input type="text" id="firstName" name="firstName" value={firstName} onChange={e => setFirstName(e.target.value)}/>
                    </div>
                    <div className="form-control">
                        <label htmlFor="email">Email : </label>
                        <input type="text" id="email" name="email" value={email} onChange={e => setEmail(e.target.value)}/>
                    </div>
                    <button type="submit">add person</button>
                </form>
            </article>
        </>
    );
}
 
export default ContolledInputs;