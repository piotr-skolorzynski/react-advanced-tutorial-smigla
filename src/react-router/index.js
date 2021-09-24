//router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//pages
import Home from './Home';
import About from './About';
import People from './People';
import Error from './Error';
import Person from './Person';
//navbar
import Navbar from './Navbar';

const ReacRouterSetup = () => {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path="/">
                    <Home /> 
                </Route>
                <Route path="/about">
                    <About /> 
                </Route>
                <Route path="/people">
                    <People /> 
                </Route>
                {/* inny sposób przekazania komponentu jako docelowy element route'a jako attribute children */}
                <Route path="/person/:id" children={<Person />}></Route> 
                <Route path="*">
                    <Error />
                </Route>
            </Switch>
        </Router>
    )
};

export default ReacRouterSetup;