
class Bed extends React.Component {
  constructor(props) {
    super(props);
    this.state = { api:'http://lvh.me:8080/',loaded: false, user: "", noises: [], temperatures: [], humidities: [], positions: [], weights: [], alarms: [], habits: [] };
  }
  componentDidMount() {
    fetch(this.state.api+'noises/user/'+this.props.user)
      .then(res => res.json())
      .then((data) => {
        this.setState({ noises: data })
      })
      .catch(console.log);

    fetch(this.state.api+'temperatures/user/'+this.props.user)
      .then(res => res.json())
      .then((data) => {
        this.setState({ temperatures: data })
      })
      .catch(console.log);
    fetch(this.state.api+'humidities/user/'+this.props.user)
      .then(res => res.json())
      .then((data) => {
        this.setState({ humidities: data })
      })
      .catch(console.log);
    fetch(this.state.api+'positions/user/'+this.props.user)
      .then(res => res.json())
      .then((data) => {
        this.setState({ positions: data })
      })
      .catch(console.log);
    fetch(this.state.api+'weights/user/'+this.props.user)
      .then(res => res.json())
      .then((data) => {
        this.setState({ weights: data })
      })
      .catch(console.log);
    fetch(this.state.api+'alarms/user/'+this.props.user)
      .then(res => res.json())
      .then((data) => {
        this.setState({ alarms: data })
      })
      .catch(console.log);
    fetch(this.state.api+'habits/user/'+this.props.user)
      .then(res => res.json())
      .then((data) => {
        this.setState({ habits: data })
      })
      .catch(console.log);
  }
  render() {
    const mainForm = (
      <div className="bg-loader">
        <div class="loader"></div>
      </div>);
    setTimeout(() => this.setState({ loaded: true }), 2000);
    if (this.state.loaded) {
      return (
        <Dashboard alarms={this.state.alarms} habits={this.state.habits} noises={this.state.noises} user={this.props.user} temperatures={this.state.temperatures} humidities={this.state.humidities} positions={this.state.positions} weights={this.state.weights} />
      );
    }
    return (
      mainForm
    );
  }
}
