import 'bulma/css/bulma.css';
import { Link, Switch, Route, Redirect, useRouteMatch } from 'react-router-dom';
import {LazyPage1, LazyPage2, LazyPage3} from '../pages';

const Navigation = () => {
    const {url, path} = useRouteMatch()
    return (
       <>
       <h2>No Lazy</h2>
        <ul>
            <li><Link to={`${url}/lazy1`}>Members</Link></li>
            <li><Link to={`${url}/lazy2`}>Plugins</Link></li>
            <li><Link to={`${url}/lazy3`}>Add a member</Link></li>
        </ul>
                
        <div className='container mt-5'>
            <Switch>
                <Route exact path={`${path}/lazy1`}>
                    <LazyPage1 />
                </Route>
                <Route exact path={`${path}/lazy2`}>
                    <LazyPage2 />
                </Route>
                <Route exact path={`${path}/lazy3`}>
                    <LazyPage3 />
                </Route>
                <Redirect to={`${path}/lazy1`} />
            </Switch>
        </div>
        </>
    )
}

export default Navigation; 