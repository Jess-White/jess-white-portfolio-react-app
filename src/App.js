import React, { Component } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import PortfolioProjects from './Components/PortfolioProjects';
import Login from './Components/Login';
import PortfolioProject from './Components/PortfolioProject';
import PortfolioProjectNew from './Components/PortfolioProjectNew';
import BlogPosts from './Components/BlogPosts';
import BlogPost from './Components/BlogPost';
import BlogPostNew from './Components/BlogPostNew';
import Bio from './Components/Bio';
import Navigation from './Components/Navigation';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Navigation/>
        <Header />
        <Switch>
          <Route
            exact path={"/login"} component={Login}
            />
          <Route
            exact path={"/blog_posts"} component={BlogPosts}
          />
          <Route
            exact path={"/portfolio_projects"} component={PortfolioProjects}
          />
          <Route
              exact path={"/blog_posts/:id"} component={BlogPost}
            />
            <Route
              exact path={"/blog_posts-new"} component={BlogPostNew}
            />
          <Route
              exact path={"/portfolio_projects/:id"} component={PortfolioProject}
            />
          <Route
              exact path={"/portfolio_projects-new"} component={PortfolioProjectNew}
            />
          <Route
              exact path={"/bio"} component={Bio}
            />
        </Switch>
      </HashRouter>


      <Footer />
    </div>
  );
}

export default App;
