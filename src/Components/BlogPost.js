import React, { Component } from 'react';
import axios from 'axios';

class BlogPost extends Component {
  constructor(props) {
    super(props)
    console.log(props);
    this.state = {
      loading: true,
      id: "",
      post_title: "",
      post_content: "",
      post_image_url: "",
      blurb: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    axios.get(`http://localhost:3000/api/blog_posts/${this.props.match.params.id}`)
      .then(response => {
        console.log(response.data);
        this.setState({
          id: response.data.id,
          post_title: response.data.post_title,
          post_content: response.data.post_content,
          post_image_url: response.data.post_image_url,
          blurb: response.data.blurb,
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
    const { post_title, post_content, post_image_url, blurb } = this.state;
    axios
      .patch(
        'http://localhost:3000/api/blog_posts/' + this.state.id,
        {
          post_title: post_title,
          post_content: post_content,
          post_image_url: post_image_url,
          blurb: blurb
        }
      )
      .catch(error => {
        console.log('blog post update error', error);
      });
    event.preventDefault();
  }

  handlePostDelete() {
    axios
      .delete(
        'http://localhost:3000/api/blog_posts/' + this.state.id,
        { headers: { "Authorization": `Bearer ${localStorage.token}` } }
      )
      .then(response => {
        console.log(response);
        if (response.data.message) {
          this.props.history.push('/blog_posts');
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
      <h1 className="jumbotron-major">Today I Blogged</h1>
        <div className="card-deck">
          <div className="card">
          <div className="card-body">
            <h1>
              {this.state.post_title}
            </h1> 
            <h2>
              {this.state.blurb}
            </h2>
          </div>
          </div>
          <div className="card">
          <div className="card-body">
            <img className="portfolio" align="center" src={this.state.post_image_url} alt="portfolio"/>
          </div>
          </div>
      </div>
      </div>

      <div className="column">
        <div className="card">
        <div className="card-body">
        <div className="card-text">{this.state.post_content}</div>
        </div>
        </div>

        <div className="column">
        
          {!localStorage.token || !localStorage.user_id ? null :
          <div className="card">
              <div className="card-body">
                <div className="card-title"> Update Blog Post</div>
                <form onSubmit={this.handleSubmit}>
                  <label>Post Title</label>
                  <br/>
                  <textarea
                    type="textarea"
                    value={this.state.post_title}
                    name="post_title"
                    placeholder={this.state.post_title}
                    onChange={this.handleChange}
                    rows={2}
                    cols={120}
                  />
                  <br />
                  <label>Blurb</label>
                  <br/>
                  <textarea
                    type="textarea"
                    value={this.state.blurb}
                    name="blurb"
                    placeholder={this.state.blurb}
                    onChange={this.handleChange}
                    rows={5}
                    cols={120}
                  />
                  <br />
                  <label>Post Content</label>
                  <br/>
                  <textarea
                    type="textarea"
                    value={this.state.post_content}
                    name="post_content"
                    placeholder={this.state.post_content}
                    onChange={this.handleChange}
                    rows={10}
                    cols={120}
                  />
                  <br />
                  <label>Post Image URL</label>
                  <br/>
                  <textarea
                    type="textarea"
                    value={this.state.post_image_url}
                    name="post_image_url"
                    placeholder={this.state.post_image_url}
                    onChange={this.handleChange}
                    rows={2}
                    cols={120}
                  />
                  <br />
                  <div>
                    <button style={{backgroundColor: "#08a0d3"}} className="btn btn-info" type="submit">Update Post</button>
                  </div>
                </form>
                <br />
                <button
                    onClick={() => this.handlePostDelete()}
                    className="btn btn-danger">
                    Delete Post
                </button>

              </div>
          </div>
        }
      </div>
    </div>
    </div>
    )
  }
}

export default BlogPost;