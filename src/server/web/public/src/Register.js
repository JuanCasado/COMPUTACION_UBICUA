
class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = { error: false, login: {} };
        this.handleUser = this.handleUser.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleName = this.handleName.bind(this);
        this.handleAge = this.handleAge.bind(this);
        this.handleMail = this.handleMail.bind(this);
    }

    handleUser(event) {
        this.setState({ user: event.target.value });
    }
    handlePassword(event) {
        this.setState({ password: event.target.value });
    }
    handleName(event){
        this.setState({ name: event.target.value });
    }
    handleAge(event){
        this.setState({ age: event.target.value });
    }
    handleMail(event){
        this.setState({ mail: event.target.value });
    }


    handleSubmit(event) {
        event.preventDefault();

        fetch('http://163.172.80.168:8080/user/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:
                JSON.stringify({
                    "userId": this.state.user,
                    "name": this.state.name,
                    "age": this.state.age,
                    "mail": this.state.mail,
                    "passw": this.state.password,
                    "created": new Date()
                })
        }).then(() => {
            ReactDOM.render(<Login/>, document.getElementById('root'));
        });
    }

    render() {
        const mainForm = (
            <div className="start-menu centered">
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <h1 className="main-title">Smart <b className="blue-title">Bed</b> </h1>
                        <p className="sub-title">Improving your sleep</p>
                    </div>
                    <h2 className="section-title"><b>Register</b></h2>
                    <div className="dropdown-divider"></div>
                    <h3 className="form-title">Username</h3>
                    <input className="input-box" type="text" placeholder='Enter Username' value={this.state.user} onChange={this.handleUser} required />
                    <h3 className="form-title">Password</h3>
                    <input className="input-box" type='password' placeholder='Enter password' value={this.state.password} onChange={this.handlePassword} required />

                    <h3 className="form-title">Name</h3>
                    <input className="input-box" type="text" placeholder='Enter Name' value={this.state.name} onChange={this.handleName} required />
                    <h3 className="form-title">Age</h3>
                    <input className="input-box" type="number"  min="0" max="200" placeholder='Age' value={this.state.age} onChange={this.handleAge} required />
                    <h3 className="form-title">Mail</h3>
                    <input className="input-box" type="text" placeholder='Enter Mail' value={this.state.mail} onChange={this.handleMail} required />

                    <div>
                        <button className="btton btton-presentation" type="submit" onClick={() => this.setState({ clicked: true })} >Register</button>
                    </div>


                    <div className="dropdown-divider"></div>
                </form>
            </div>);

        const errorForm = (
            <div className="start-menu centered">
                <form onSubmit={this.handleSubmit}>

                    <div>
                        <h1 className="main-title">Smart <b className="blue-title">Bed</b> </h1>
                        <p className="sub-title">Improving your sleep</p>
                    </div>
                    <h2 className="section-title">Login<b className="error-message"><i className="fas fa-exclamation-triangle"></i>  Error invalid login  </b> </h2>
                    <div className="dropdown-divider"></div>
                    <h3 className="form-title">Username</h3>
                    <input className="input-box" type="text" placeholder='Enter Username' value={this.state.user} onChange={this.handleUser} required />
                    <h3 className="form-title">Password</h3>
                    <input className="input-box" type='Password' placeholder='Enter password' value={this.state.password} onChange={this.handlePassword} required />
                    <h3 className="form-title">Name</h3>
                    <input className="input-box" type="text" placeholder='Enter Name' value={this.state.name} onChange={this.handleName} required />
                    <h3 className="form-title">Age</h3>
                    <input className="input-box" type="number"  min="0" max="200" placeholder='Age' value={this.state.age} onChange={this.handleAge} required />
                    <h3 className="form-title">Mail</h3>
                    <input className="input-box" type="text" placeholder='Enter Mail' value={this.state.mail} onChange={this.handleMail} required />

                    <div>
                        <button className="btton btton-presentation" type="submit" onClick={() => this.setState({ clicked: true })} >Register</button>
                    </div>
                    
                    <div className="dropdown-divider"></div>
                </form>
            </div>);
        if (this.state.error) {
            return (
                errorForm
            );
        }
        return (
            mainForm
        );
    }
}
