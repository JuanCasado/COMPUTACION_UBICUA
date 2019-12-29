
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clicked: false};
    this.state = { error: false};
    this.handleUser = this.handleUser.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUser(event) {
    this.setState({user: event.target.value});
  }
  handlePassword(event) {
    this.setState({password: event.target.value});
  }
  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    const mainForm = (<form onSubmit={this.handleSubmit}>
      <div className="start-menu centered">
      <div>
					<h1 className="main-title">Smart <b className="blue-title">Bed</b> </h1> 
					<p className="sub-title">Improving your sleep</p>
				</div>
        <h2 className="section-title"><b>Login</b></h2>
        <div className="dropdown-divider"></div>
        <h3 className="form-title">Username</h3>
        <input className="input-box" type="text" placeholder='Enter Username'  value={this.state.user} onChange={this.handleUser} required/>
        <h3 className="form-title">Password</h3>
        <input  className="input-box" type='Password' placeholder='Enter password' value={this.state.password} onChange={this.handlePassword} required/>
        <div>
          <button className="btton btton-presentation" type="submit" onClick={() => this.setState({ clicked: true })} >Sign in</button>
        </div>
      </div>
    </form>);
    const errorForm = (<form onSubmit={this.handleSubmit}>
        <div className="start-menu centered">
        <div>
            <h1 className="main-title">Smart <b className="blue-title">Bed</b> </h1> 
            <p className="sub-title">Improving your sleep</p>
          </div>
          <h2 className="section-title">Login<b className="error-message"><i class="fas fa-exclamation-triangle"></i>  Error invalid login  </b> </h2>
          <div className="dropdown-divider"></div>
          <h3 className="form-title">Username</h3>
          <input className="input-box" type="text" placeholder='Enter Username'  value={this.state.user} onChange={this.handleUser} required/>
          <h3 className="form-title">Password</h3>
          <input  className="input-box" type='Password' placeholder='Enter password' value={this.state.password} onChange={this.handlePassword} required/>
          <div>
            <button className="btton btton-presentation" type="submit" onClick={() => this.setState({ clicked: true })} >Sign in</button>
          </div>
        </div>
      </form>);
  if (this.state.clicked) {
    if (this.state.user==="prueba" && this.state.password ==="prueba"){
        ReactDOM.render(<Bed/>, document.getElementById('root'));
    } else{
      this.setState({ clicked: false });
      this.setState({ error: true });
    }
  }
  if (this.state.error){
    return (
      errorForm
    );
  }
  return (
    mainForm
  );
  }
}
