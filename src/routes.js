import {BrowserRouter as Router , Switch, Route} from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
const Routes  = () =>{
   return(
        <Router>
            <Header/>
            <Switch>
                <Route path="/" exact component={Home}/>
            </Switch>
        </Router>
   )

}
export default Routes;