import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styles from './App.module.css';
import ComicsPage from './components/ComicsPage';
import ErrorPage from './components/ErrorPage';
import SearchPage from './components/SearchPage';
import Header from './components/Header';

const App = (): JSX.Element => {
  return (
    <div className={styles.app}>
      <Router>
        <Header />
        <Switch>
          <Route path="/" component={SearchPage} exact />
          <Route path="/comics/:id" component={ComicsPage} />
          <Route component={ErrorPage} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
