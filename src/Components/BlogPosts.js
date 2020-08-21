import React, { Component } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

class BlogPosts extends Component {
  constructor(props) {
    super(props)
    this.state = {
      blog_posts: []
    }
  }
  componentDidMount() {
    axios.get('http://localhost:3000/api/blog_posts')
      .then(response => {
        console.log(response)
        this.setState({ blog_posts: response.data })
      })
      .catch(error => console.log(error))
  }
  render() {
    return (
      <div className="column">
      <h1 className="jumbotron-major">Today I Blogged</h1>
        {this.state.blog_posts.map((blog_post) => {
          return (
            <div className="jumbotron">
            <div className="card-deck">
            <div className="card" key={blog_post.id} >
            <div className="card-body" style={{width: "100%"}}>
              <NavLink className="card-title" to={`/blog_posts/${blog_post.id}`}>{blog_post.post_title}</NavLink>
              <h4 className="card-text">{blog_post.blurb}</h4>
              <div className="card-text">Tags:</div>
              <div>{blog_post.tags.map((tag, index) => {
                return (
                  <div className="card-text-tags" key={index}>{tag}</div>
                )
              })

              }</div>

              </div>
            </div>
            <div className="card">
            <div className="card-body">
              <img className="portfolio" align="center" src={blog_post.post_image_url} alt="portfolio"/>
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

export default BlogPosts;

// <NavLink style={{ color: "green" }} className="navbar-brand" to={`/portfolio_projects/${portfolio_project.id}`}>Show Portfolio Project</NavLink>
