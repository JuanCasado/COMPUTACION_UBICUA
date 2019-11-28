
class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return (
      <button className="btn btn-danger btn-lg"
              onClick={() => this.setState({ liked: true })}>
        Like
      </button>
    );
  }
}