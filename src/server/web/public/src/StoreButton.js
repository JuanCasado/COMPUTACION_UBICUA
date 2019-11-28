
class StoreButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return <h2 className="blend">Coming soon!!!</h2>;
    }
    return (
      <button className="btn btn-success btn-lg"
              onClick={() => this.setState({ liked: true })}>
        Store
      </button>
    );
  }
}