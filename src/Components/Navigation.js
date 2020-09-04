import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';

class Navigation extends Component {
  state = {}

  constructor(props) {
  super(props);

  this.handleLogoutClick = this.handleLogoutClick.bind(this);
  }

  handleLogoutClick() {
    console.log(this.props)
    localStorage.removeItem("token");
    localStorage.removeItem("user_id");
    this.props.history.push('/');
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light" >
            <div className="row">
              <div className="col">
              <NavLink style={{ color: "#add8e6" }} className="navbar-brand" to="/home">Home</NavLink>
              <NavLink style={{ color: "#add8e6" }} className="navbar-brand" to="/portfolio_projects">Portfolio</NavLink>
              <NavLink style={{ color: "#add8e6" }} className="navbar-brand" to="/bio">Bio</NavLink>
              <NavLink style={{ color: "#add8e6" }} className="navbar-brand" to="/blog_posts">Blog</NavLink>
              </div>
              {!localStorage.token || !localStorage.user_id ? null :
              <div className="col">
              <NavLink style={{ color: "#add8e6" }} className="navbar-brand" to="/blog_posts-new">New Blog Post</NavLink>
              <NavLink style={{ color: "#add8e6" }} className="navbar-brand" to="/portfolio_projects-new">New Portfolio Project</NavLink>
              <div style={{ color: "#add8e6" }} className="navbar-brand" onClick={() => this.handleLogoutClick()}>
                Log Out</div>
              </div>
              }
              </div>
        </nav>
      </div>
    );
  }
}

export default withRouter(Navigation);
