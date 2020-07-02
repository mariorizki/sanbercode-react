import React from 'react';
import Navigation from '../components/Navigation';
import './Layout.css';
import { Switch, Route, Link, useRouteMatch } from 'react-router-dom';
import Article from '../components/Article';

const Articles = () => {
  let match = useRouteMatch();

  return (
    <React.Fragment>
      <Navigation />
      <div className="Layout">
        <h1>Articles</h1>
        <h3>
          <Link to={`${match.url}/article1`}>Article 1</Link>
        </h3>
      </div>

      <Switch>
        <Route path={`${match.url}/:article1`}>
          <Article />
        </Route>
      </Switch>
    </React.Fragment>
  );
};

export default Articles;
