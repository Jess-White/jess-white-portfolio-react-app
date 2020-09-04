import React, { Component } from 'react';
import axios from 'axios';

class PortfolioProjectNew extends Component {
  constructor(props) {
    super(props);

    this.state = {
      project_title: "",
      project_summary: "",
      project_image_url: "",
      project_video_link: "",
      project_github_link: "",
      project_deploy_link: ""
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    const { 
      project_title, project_summary, project_image_url, project_video_link, project_github_link, project_deploy_link
    } = this.state;

    axios
      .post(
        "/api/portfolio_projects",
        {
          project_title: project_title,
          project_summary: project_summary,
          project_image_url: project_image_url,
          project_video_link: project_video_link,
          project_github_link: project_github_link,
          project_deploy_link: project_deploy_link
        }
      )

      .then(response => {
        if (response.data) {
          this.props.history.push("/portfolio_projects")
        }
      })
      .catch(error => {
        console.log("portfolio project creation error", error);
      });
    event.preventDefault();
  }

  render() {
    return (
      <div className="column">
      <h1 className="sub-header">New Portfolio Project:</h1>
      <div div className="card">
      <div className="card-body">
        <form onSubmit={this.handleSubmit}>
          <textarea
            type="textarea"
            name="project_title"
            placeholder="Project Title"
            value={this.state.project_title}
            onChange={this.handleChange}
            rows={2}
            cols={120}
            required
          />

          <textarea
            type="textarea"
            name="language"
            placeholder="Languages"
            value={this.state.language}
            onChange={this.handleChange}
            rows={2}
            cols={120}
            required
          />

          <textarea
            type="textarea"
            name="project_summary"
            placeholder="Project Summary"
            value={this.state.project_summary}
            onChange={this.handleChange}
            rows={10}
            cols={120}
            required
          />

          <textarea
            type="textarea"
            name="project_image_url"
            placeholder="Project Image Url"
            value={this.state.project_image_url}
            onChange={this.handleChange}
            rows={2}
            cols={120}
            required
          />

          <textarea
            type="textarea"
            name="project_video_link"
            placeholder="Project Video Link"
            value={this.state.project_video_link}
            onChange={this.handleChange}
            rows={2}
            cols={120}
            required
          />

          <textarea
            type="textarea"
            value={this.state.project_github_url_frontend}
            name="project_github_url_frontend"
            placeholder="Project Github Frontend"
            onChange={this.handleChange}
            rows={2}
            cols={120}
          />

          <textarea
            type="textarea"
            value={this.state.project_github_url_backend}
            name="project_github_url_backend"
            placeholder="Project Github Backend"
            onChange={this.handleChange}
            rows={2}
            cols={120}
          />

          <textarea
            type="textarea"
            name="project_deploy_link"
            placeholder="Project Deploy Link"
            value={this.state.project_deploy_link}
            onChange={this.handleChange}
            rows={2}
            cols={120}
            required
          />
          <br/>
          <button type="submit">Add New Portfolio Project</button>

        </form>
        </div>
        </div>
      </div>
    );
  }
}

export default PortfolioProjectNew;