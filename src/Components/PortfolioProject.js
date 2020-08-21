import React, { Component } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

class PortfolioProject extends Component {
  constructor(props) {
    super(props)
    console.log(props);
    this.state = {
      loading: true,
      id: "",
      project_title: "",
      language: "",
      project_summary: "",
      project_image_url: "",
      project_video_link: "",
      project_github_link: "",
      project_github_url_frontend: "",
      project_github_url_backend: "",
      project_deploy_link: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    axios.get(`http://localhost:3000/api/portfolio_projects/${this.props.match.params.id}`)
      .then(response => {
        console.log(response.data);
        this.setState({
          id: response.data.id,
          project_title: response.data.project_title,
          language: response.data.language,
          project_summary: response.data.project_summary,
          project_image_url: response.data.project_image_url,
          project_video_link: response.data.project_video_link,
          project_github_link: response.data.project_github_link,
          project_github_url_frontend: response.data.project_github_url_frontend,
          project_github_url_backend: response.data.project_github_url_backend,
          project_deploy_link: response.data.project_deploy_link,
          loading: false
        });
      })
      .catch(error => {
        console.log(error);
      })
  }

  handleChange(event) {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit(event) {
    const { project_title, project_summary, language, project_image_url, project_video_link, project_github_link, project_github_url_frontend, project_github_url_backend, project_deploy_link } = this.state;
    axios
      .patch(
        'http://localhost:3000/api/portfolio_projects/' + this.state.id,
        {
          project_title: project_title,
          language: language,
          project_summary: project_summary,
          project_image_url: project_image_url,
          project_video_link: project_video_link,
          project_github_url_frontend: project_github_url_frontend,
          project_github_url_backend: project_github_url_backend,
          project_github_link: project_github_link,
          project_deploy_link: project_deploy_link


        }
      )
      .catch(error => {
        console.log('portfolio project update error', error);
      });
    event.preventDefault();
  }

  handleProjectDelete() {
    axios
      .delete(
        'http://localhost:3000/api/portfolio_projects/' + this.state.id,
        { headers: { "Authorization": `Bearer ${localStorage.token}` } }
      )
      .then(response => {
        console.log(response);
        if (response.data.message) {
          this.props.history.push('/portfolio_projects');
        }
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    if (this.state.loading) {
      return (
        <h1>Loading....</h1>
      )
    }
    return (
      <div>
      <div className="jumbotron">
        <div className="card-deck">
          <div className="card">
          <div className="card-body">
            <h1>
              {this.state.project_title}
            </h1> 
            <h2>{this.state.language}</h2>
            <h4>
              {this.state.project_summary}
            </h4> 
            <ButtonGroup>
            {this.state.project_github_url_frontend ? 
            <Button className="repo-button" href={`${this.state.project_github_url_frontend}`}>Frontend</Button>
            : null}
            {this.state.project_github_url_backend ?  
            <Button className="repo-button" href={`${this.state.project_github_url_backend}`}>Backend</Button>
            : null}
            {this.state.project_deploy_link ? 
            <Button className="repo-button" href={`${this.state.project_deploy_link}`}>Deployed</Button> 
            : null}
            </ButtonGroup>
          </div>
          </div>
          <div className="card">
          <div className="card-body">
            <img className="portfolio" align="center" src={this.state.project_image_url} alt="portfolio"/>
          </div>
          </div>
      </div>
      </div>

      <div className="column">

        {!localStorage.token || !localStorage.user_id ? null :
        <div className="card">
            <div className="card-body">
              <div className="card-title"> Update Portfolio Project</div>
              <form onSubmit={this.handleSubmit}>
                <br/>
                <label>Project Title</label>
                <br/>
                <textarea
                  type="textarea"
                  value={this.state.project_title}
                  name="project_title"
                  placeholder={this.state.project_title}
                  onChange={this.handleChange}
                  rows={2}
                  cols={120}
                />
                <br/>
                <label>Project Languages</label>
                <br/>
                <textarea
                  type="textarea"
                  value={this.state.language}
                  name="language"
                  placeholder={this.state.language}
                  onChange={this.handleChange}
                  rows={2}
                  cols={120}
                />
                <br/>

                <label>Project Summary</label>
                <br/>
                <textarea
                  type="textarea"
                  value={this.state.project_summary}
                  name="project_summary"
                  placeholder={this.state.project_summary}
                  onChange={this.handleChange}
                  rows={10}
                  cols={120}
                />
                <br/>
                <label>Project Image URL</label>
                <br/>
                <textarea
                  type="textarea"
                  value={this.state.project_image_url}
                  name="project_image_url"
                  placeholder={this.state.project_image_url}
                  onChange={this.handleChange}
                  rows={2}
                  cols={120}
                />
                <br/>

                <label>Project Video Link</label>
                <br/>
                <textarea
                  type="textarea"
                  value={this.state.project_video_link}
                  name="project_video_link"
                  placeholder={this.state.project_video_link}
                  onChange={this.handleChange}
                  rows={2}
                  cols={120}
                />
                <br/>

                <label>Github Link - Frontend:</label>
                <br/>
                <textarea
                  type="textarea"
                  value={this.state.project_github_url_frontend}
                  name="project_github_url_frontend"
                  placeholder={this.state.project_github_url_frontend}
                  onChange={this.handleChange}
                  rows={2}
                  cols={120}
                />
                <br/>
                <label>Github Link - Backend:</label>
                <br/>
                <textarea
                  type="textarea"
                  value={this.state.project_github_url_backend}
                  name="project_github_url_backend"
                  placeholder={this.state.project_github_url_backend}
                  onChange={this.handleChange}
                  rows={2}
                  cols={120}
                />
                <br/>
                <label>Project Deploy Link</label>
                <br/>
                <textarea
                  type="textarea"
                  value={this.state.project_deploy_link}
                  name="project_deploy_link"
                  placeholder={this.state.project_deploy_link}
                  onChange={this.handleChange}
                  rows={2}
                  cols={120}
                />
                <br/>
                <button style={{backgroundColor: "#08a0d3"}} className="btn btn-info" type="submit">Update Project</button>
              </form>
              <br/>
              <button
                  onClick={() => this.handleProjectDelete()}
                  className="btn btn-danger">
                  Delete Project
              </button>

            </div>
        </div>
      }
      </div>
    </div>
    )
  }
}

export default PortfolioProject;