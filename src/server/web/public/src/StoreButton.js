
class StoreButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return <h2 className="message">We are working hard in it!<i className="fas fa-hammer tab"></i></h2>;
    }
    return (
      <button className="btton btton-store"
              onClick={() => this.setState({ liked: true })}>
        Store
        <i className="fas fa-shopping-cart tab"></i>
      </button>
    );
  }
}