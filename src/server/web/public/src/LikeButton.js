
class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return  <p className="blend">You liked this :D</p>;
    }

    return (
      <button className="btn btn-danger btn-lg"
              onClick={() => this.setState({ liked: true })}>
        Like
      </button>
    );
  }
}