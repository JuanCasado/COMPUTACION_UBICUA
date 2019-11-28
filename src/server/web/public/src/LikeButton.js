
class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return  <text className="blend">
                You liked this :D
              </text>;
    }

    return (
      <button className="btn btn-danger btn-lg"
              onClick={() => this.setState({ liked: true })}>
        Like
      </button>
    );
  }
}