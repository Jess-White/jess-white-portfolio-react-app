import React, { Component } from 'react';
import axios from 'axios';

class BlogPostNew extends Component {
  constructor(props) {
    super(props);

    this.state = {
      post_title: "",
      post_content: "",
      blurb: "",
      post_image_url: "",
      tag_list: "",
      tags: []
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    axios.get('http://localhost:3000/api/tags')
      .then(response => {
        console.log(response)
        this.setState({ tags: response.data })
      })
      .catch(error => console.log(error))
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSelect = (event) => {
    let tag_list = this.state.tag_list
    tag_list += ` ${event.target.value},`
    this.setState({
      tag_list: tag_list
    })

  }

  handleSubmit(event) {
    const { 
      post_title, post_content, post_image_url, tag_list, blurb
    } = this.state;

    axios
      .post(
        "http://localhost:3000/api/blog_posts",
        {
          post_title: post_title,
          post_content: post_content,
          blurb: blurb,
          post_image_url: post_image_url,
          tag_list: tag_list
        }
      )

      .then(response => {
        if (response.data) {
          this.props.history.push("/blog_posts")
        }
      })
      .catch(error => {
        console.log("blog post creation error", error);
      });
    event.preventDefault();
  }

  render() {
    return (
      <div className="column">
      <div div className="card">
      <div className="card-body">
      <div className="card-title">New Blog Post</div>
          <form onSubmit={this.handleSubmit}>
            <textarea
              type="textarea"
              name="post_title"
              placeholder="Post Title"
              value={this.state.post_title}
              onChange={this.handleChange}
              rows={2}
              cols={120}
              required
            />

            <textarea
              type="textarea"
              name="blurb"
              placeholder="Blurb"
              value={this.state.blurb}
              onChange={this.handleChange}
              rows={5}
              cols={120}
              required
            />

            <textarea
              type="textarea"
              name="post_content"
              placeholder="Post Content"
              value={this.state.post_content}
              onChange={this.handleChange}
              rows={10}
              cols={120}
              required
            />

            <textarea
              type="textarea"
              name="post_image_url"
              placeholder="Post Image Url"
              value={this.state.post_image_url}
              onChange={this.handleChange}
              rows={2}
              cols={120}
              required
            />

            <br />

            <textarea
              type="textarea"
              name="tag_list"
              placeholder="Javascript, CSS, ...."
              value={this.state.tag_list}
              onChange={this.handleChange}
              rows={2}
              cols={120}
              required
            />
            <br />
            <select name="tag_list" onChange={this.handleSelect}>
              {this.state.tags.map((tag) => {
                return (
                  <option
                    key={tag.id}
                    value={tag.name}
                    onChange={this.handleChange}
                  >
                    {tag.name}
                  </option>
                )
              })}
            </select>

            <button type="submit">Add New Blog Post</button>

          </form>
        </div>
        </div>
      </div>
    );
  }
}





export default BlogPostNew;