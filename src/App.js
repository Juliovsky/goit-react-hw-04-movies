import React, {lazy,Suspense} from 'react';
import {Route, Switch} from 'react-router-dom';
import MoviesPage from "./pages/MoviesPage";
import Home from './pages/Home';
import Nav  from './components/Nav';
import FilmPage from "./pages/FilmPage";

const AsyncHome = lazy(()=>
    import('./pages/Home'),
);
const AsyncFilmPage = lazy(()=>
    import('./pages/FilmPage'),
);
const AsyncMoviesPage = lazy(()=>
    import('./pages/MoviesPage'),
);

const App = () => (

    <div>
        <Nav/>
        <Suspense fallback={<h1>Loading...</h1>}>
        <Switch>
                <Route exact path='/'  component={AsyncHome}/>
                <Route path='/movies/:movieId' component={AsyncFilmPage}/>
                <Route path='/movies' component={AsyncMoviesPage}/>
        <Route component={Home}/>
        </Switch>
    </Suspense>
    </div>

);

export default App;
