
class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return  <span><p className="message">You liked this :D</p><p id="heart"></p></span>;
    }

    return (
      <button className="btton btton-like"
              onClick={() => this.setState({ liked: true })}>
        Like
        <i className="fas fa-heart tab"></i>
      </button>
    );
  }
}