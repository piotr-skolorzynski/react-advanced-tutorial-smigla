import { useState, useEffect } from "react";

const url = 'https://api.github.com/users/QuincyLarson';

// na bazie pewnych warunków można zwracać różne dane

const MultipleReturns = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [user, setUser] = useState('default user');

    useEffect(() => {
        fetch(url)
            .then(response => {
                //z fetch jest taki problem, że jeżeli zasób nie istnieje bo np. nie ma takiego w bazie to nie dostaniemy żadnego błędu bo połączenie zaszło prawidłowo dlatego dodatkowo robi się sprawdzenie czy pobrane dane to nie jest pusty obiekt
                if (response.status >= 200 && response.status <= 299) {
                    return response.json();
                } else {
                    throw new Error('uuppssss! sth wrong happened');
                }
            })
            .then(user => {
                const { login } = user;
                setUser(login);
                setIsLoading(false);
            })
            .catch(error => {
                console.log(error.message);
                setIsLoading(false);
                setIsError(true);
            })
    }, []);

    if (isLoading) {
        return <h2>Loading...</h2>
    }

    if (isError) {
        return <h2>Error...</h2>
    }

    if (user) {
        return <h2>{ user }</h2>
    }

    //nowsza wersja będzie w późniejszych modułach przy ternanry operator
    // return (
    //     <div>
    //         {isLoading && <div><h2>Loading...</h2></div>}
    //         {isError && <div><h2>Error....</h2></div>}
    //         {user && <div><h2>{ user }</h2></div>}
    //     </div>
    // );
}

export default MultipleReturns;