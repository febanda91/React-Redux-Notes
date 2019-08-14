import React, { Component } from "react";
import axios from "axios";

export class Post extends Component {
  state = {
    post: null
  };

  //make a fetch request to the dummy API with the post_id passed with the Router
  componentDidMount() {
    let id = this.props.match.params.post_id;
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`).then(res => {
      this.setState({
        post: res.data
      });
      console.log(res);
    });
  }

  render() {
    const post = this.state.post ? (
      <div className="post">
        <h4 className="center">{this.state.post.title}</h4>
        <p>{this.state.post.body}</p>
      </div>
    ) : (
      <div className="center">This Post does not exist</div>
    );

    return <div className="container">{post}</div>;
  }
}

export default Post;
