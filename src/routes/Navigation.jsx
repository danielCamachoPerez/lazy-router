import 'bulma/css/bulma.css';
import '../styles.css';
import logo from '../logo.svg';
import { BrowserRouter as Router, NavLink, Switch, Route, Redirect } from 'react-router-dom';
//import {LazyPage1, LazyPage2, LazyPage3} from '../01-lazy-load/pages';
import { routes } from './routes';
import { Suspense } from 'react';
import { ErrorBoundary } from '../01-lazy-load/components/ErrorBoundary';

const Navigation = () => {
    return (
        <ErrorBoundary fallback={<h2>algo fallo :(</h2>}>
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
                            {/* <NoLazy /> */}
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
        </ErrorBoundary>
    )
}

export default Navigation; 