import React, { Component } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

class PortfolioProjects extends Component {
  constructor(props) {
    super(props)
    this.state = {
      portfolio_projects: []
    }
  }
  componentDidMount() {
    axios.get('http://localhost:3000/api/portfolio_projects')
      .then(response => {
        console.log(response)
        this.setState({ portfolio_projects: response.data })
      })
      .catch(error => console.log(error))
  }
  render() {
    return (
      <div className="column">
        <h1 className="sub-header">Portfolio Projects:</h1>
        {this.state.portfolio_projects.map((portfolio_project) => {
          return (
            <div className="jumbotron">
            <div className="card-deck">
            <div className="card" key={portfolio_project.id} >
            <div className="card-body">
            <NavLink className="card-title" to={`/portfolio_projects/${portfolio_project.id}`}>{portfolio_project.project_title}</NavLink>
            <h3>
              {portfolio_project.language}
            </h3>
            <h4>
              {portfolio_project.project_summary}
            </h4>
            <Button className="header-button" href={`${portfolio_project.project_github_url_frontend}`}><i className="fa fa-2x fa-github-square" aria-hidden="true"></i></Button>
            <Button className="header-button" href={`${portfolio_project.project_github_url_backend}`}><i className="fa fa-2x fa-github-square" aria-hidden="true"></i></Button>
            <Button className="header-button" href={`${portfolio_project.project_deploy_link}`}><i className="fa fa-2x fa-server" aria-hidden="true"></i></Button>  
          </div>
          </div>
          <div className="card">
          <div className="card-body">
            <img className="portfolio" align="center" src={portfolio_project.project_image_url} alt="portfolio"/>
          </div>
          </div>
      </div>
      </div>
          );
        })}
      </div>
    );
  }
}

export default PortfolioProjects;

// <NavLink style={{ color: "green" }} className="navbar-brand" to={`/portfolio_projects/${portfolio_project.id}`}>Show Portfolio Project</NavLink>
