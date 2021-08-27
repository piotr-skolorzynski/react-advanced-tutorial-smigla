import { useState, useEffect } from "react";

const url = 'https://api.github.com/users'; //można wykorzystać jako źródło do fetchowania użytkowników do zabawy coś jak jason-placeholder

//second argument

const UseEffectFetch = () => {

    const [users, setUsers] = useState([]);

    const getUsers = async () => {
        const response = await fetch(url);
        const users = await response.json();
        setUsers(users);
        // console.log(users);
    };

    useEffect(() => {
        //fetch można zrobić wewnątrz useEffect lub wyprowadzić na zewnątrz i tutaj wywołać
        //jeśli chcesz użyć async await nie można zrobić tego wewnątrz funkcji useEffect
        getUsers()
    }, []); //używamy drugiego argumentu żeby pobrać użytkownikow tylko raz i nie spowodować efektu nieskończonej pętli

    return (
        <>
            <h3>github users</h3>
            <ul className="users">
                {users.map(user => {
                    const {id, login, avatar_url, html_url } = user;
                    return (
                        <li key={ id }>
                            <img src={ avatar_url } alt={ login } />
                            <div>
                                <h4>{ login }</h4>
                                <a href={ html_url }>profile</a>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </>
    );
}

export default UseEffectFetch;