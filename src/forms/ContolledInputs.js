import { useState } from "react";

//JS
// f.e. const input = document.getElementById('myText');
// f.e. const inputValue = input.value
// React
// value, onChange

const ContolledInputs = () => {

    const handleSubmit = e => {
        e.preventDefault();
        console.log('hello world!!!');
    }

    return (
        <>
            <article>
                <form className="form" onSubmit={handleSubmit}>
                    <div className="form-control">
                        <label htmlFor="firstName">Name : </label>
                        <input type="text" id="firstName" name="firstName"/>
                    </div>
                    <div className="form-control">
                        <label htmlFor="email">Email : </label>
                        <input type="text" id="email" name="email"/>
                    </div>
                    <button type="submit">add person</button>
                </form>
            </article>
        </>
    );
}
 
export default ContolledInputs;