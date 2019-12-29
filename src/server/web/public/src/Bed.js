
class Bed extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loaded: false};
  }

  render() {
    const mainForm = (
    <div className="bg-loader">
      <div class="loader"></div>
    </div>);
  setTimeout(() => this.setState({ loaded: true }), 2000);
  if (this.state.loaded){
    return (
      <Dashboard />
    );
  } 
  return (
    mainForm
  );
  }
}
