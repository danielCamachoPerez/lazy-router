import 'bulma/css/bulma.css';
import '../styles.css';
import logo from '../logo.svg';
import { BrowserRouter as Router, NavLink, Switch, Route, Redirect } from 'react-router-dom';
//import {LazyPage1, LazyPage2, LazyPage3} from '../01-lazy-load/pages';
import { routes } from '../01-lazy-load/router/routes';
import { Suspense } from 'react';

const Navigation = () => {
    return (
        <Suspense fallback={<h1>loading...</h1>}>
            <Router>
                <div className="ml-3 is-flex">
                    <aside className="menu ml-1">
                        <figure className="image is-128x128">
                            <img src={logo} className="App-logo" alt="logo" />
                        </figure>
                        <p className="menu-label">
                            General
                        </p>
                        <ul className="menu-list">
                            {routes.map(({id, path, name}) => (
                                <li key={id}>
                                    <NavLink 
                                        to={path} 
                                        activeClassName='is-active' 
                                        exact
                                    >
                                        {name}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                        <p className="menu-label">
                            Administration
                        </p>
                        <ul className="menu-list">
                            <li><a>Team Settings</a></li>
                            <li>
                                <a>Manage Your Team</a>
                                <ul>
                                    <li><a>Members</a></li>
                                    <li><a>Plugins</a></li>
                                    <li><a>Add a member</a></li>
                                </ul>
                            </li>
                            <li><a>Invitations</a></li>
                            <li><a>Cloud Storage Environment Settings</a></li>
                            <li><a>Authentication</a></li>
                        </ul>
                        <p className="menu-label">
                            Transactions
                        </p>
                        <ul className="menu-list">
                            <li><a>Payments</a></li>
                            <li><a>Transfers</a></li>
                            <li><a>Balance</a></li>
                        </ul>
                    </aside>
                    <div className='container mt-5'>
                        <Switch>
                            {routes.map(({id, path, component:Component}) => (
                                <Route 
                                    key={id} 
                                    path={path} 
                                    render={() => <Component />}    
                                />
                            ))}
                            <Redirect to={routes[0].path} />
                        </Switch>
                    </div>
                </div>
            </Router>
        </Suspense>
    )
}

export default Navigation; 