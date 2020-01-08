
class ApplicationButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clicked: false };
  }

  render() {
    if (this.state.clicked) {
      ReactDOM.render(<Login/>, document.getElementById('root'));
    }
    return (
      <a  className="btton btton-login"
              onClick={() => this.setState({ clicked: true })}>
        Sign in <i className="fas fa-sign-in-alt tab"></i>
      </a>
    );
  }
}