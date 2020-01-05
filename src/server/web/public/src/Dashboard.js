
class Dashboard extends React.Component {

  constructor(props) {
    // Get parameters from parent.
    super(props);

    // Define states to use in the web.
    this.state = { time: 0, days: [0, 0, 0, 0, 0, 0, 0], alarms: this.props.alarms, user: "user", height: 170, weight: 60, bmi: <p> </p>, bmiResult: <p> </p>, positionImage: "../img/back.jpg", positionText: "Oops! We don't have any record yet", lastPosition: "", alarmResult: <p> </p> };

    // Bind all functions.
    this.handleHeight = this.handleHeight.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTime = this.handleTime.bind(this);
    this.handleDays = this.handleDays.bind(this);
    this.handleNewAlarm = this.handleNewAlarm.bind(this);
    this.handleHeight = this.handleHeight.bind(this);
    this.handleActive = this.handleActive.bind(this);
    this.removeAlarm = this.removeAlarm.bind(this);
    this.drawAlarms = this.drawAlarms.bind(this);
    this.getAlarms = this.getAlarms.bind(this);
    this.testAlarm = this.testAlarm.bind(this);
  }

  // Create refs for the canvas of charts.
  sleepRef = React.createRef();
  tempRef = React.createRef();
  noiseRef = React.createRef();
  humidityRef = React.createRef();

  componentDidMount() {
    // Create graphs.
    this.sleepPolar();
    this.tempLine();
    this.noiseBar();
    this.humidityBar();
    this.drawAlarms()
    // Set user id.
    this.setState({ user: this.props.user });
    // Get last weight from API Rest.
    const weights = this.props.weights.map((weight) => weight.value);
    this.setState({ weight: weights[weights.length - 1] });

    // Get last position from API Rest.
    const positions = this.props.positions.map((position) => position.position);
    var last = positions[positions.length - 1];
    this.setState({ lastPosition: last });

    // Show the data, text and image, for that last position
    if (last === "back") {
      this.setState({ positionImage: "../img/back.jpg" });
      this.setState({ positionText: "You are sleeping in your back, it is not a bad position, but you should try side one" });
    } else if (last === "side") {
      this.setState({ positionImage: "../img/side.jpg" });
      this.setState({ positionText: "You are sleeping in the best position, keep going!" });
    } else if (last === "stomach") {
      this.setState({ positionImage: "../img/stomach.jpg" });
      this.setState({ positionText: "You are sleeping in the worst position, try a new one!" });
    }
  }

  // Get the height from the input box.
  handleHeight(event) {
    this.setState({ height: event.target.value });
  }

  handleTime(event) {
    this.setState({ time: event.target.value });
  }
  handleDays(pos) {
    var daysUpdate = this.state.days;
    daysUpdate[pos] = Math.pow((daysUpdate[pos] - 1), 2);
    this.setState({ days: daysUpdate });
  }

  // Calculate and draw the BMI for the data.
  handleSubmit(event) {
    event.preventDefault();
    // Calculate BMI with formula.
    var bmi = this.state.weight / ((this.state.height * this.state.height) / 10000);
    console.log("height");
    console.log(bmi);

    // Set a type of BMI.
    var bmiType = "obese";
    if (bmi < 17) {
      bmiType = "underweight";
    }
    else if (bmi < 25) {
      bmiType = "normal";
    }
    else if (bmi < 30) {
      bmiType = "overweight";
    }
    // Add BMI to state to use it in render.
    this.setState({ bmi: bmi });
    // Scales by 2 the BMI, to visualize it.
    var bmiWidth = 2 * bmi + "%";

    // Displays a progress bar with the BMI
    const result = <div className="progress" >
      <div className="progress-bar progress-bar-striped active" role="progressbar" style={{ width: bmiWidth }}>Your BMI: {bmiType}</div>
    </div>;
    this.setState({ bmiResult: result });
  }

  handleNewAlarm(event) {
    event.preventDefault();
    var created = new Date();
    // Alarm 5 seconds after creation.
    var alarm = (this.state.time).split(":");
    var seconds = parseInt(alarm[0])*3600+(alarm[1])*60;
    var decibel = 20;
    var duration = 10;
    var active = true;
    console.log(decibel)

    // POST call to create the alarm
    fetch('http://localhost:8080/alarm/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body:
        JSON.stringify({
          "userId": this.props.user,
          "duration": duration,
          "active": active,
          "time": seconds,
          "days": this.state.days,
          "decibel": decibel,
          "created": created
        })
    }).then(() => {
      this.getAlarms();
    });
  }
  // Sleep polar graphic
  sleepPolar = () => {
    // Get the data of sleep and filter what we want.
    const yesterday = this.props.habits.map((habit) => (habit.name === "sleep-yesterday") ? habit.value : undefined);
    const week = this.props.habits.map((habit) => (habit.name === "sleep-week") ? habit.value : undefined);
    // Set our data
    var sleepData = {
      labels: ["Sleeped", "Max", "Min", "Last Week"],
      datasets: [{
        // Remove undefined
        data: [yesterday.filter(Number), 9, 7, week.filter(Number)],
        backgroundColor: [
          "#003f5c",
          "#f95d6a",
          "#ffa600",
          "#665191"
        ]
      }]
    };
    // Chart with Chart.js.
    this.sleepChart = new Chart(this.sleepRef.current, {
      type: 'polarArea',
      options: {
        responsive: true,
        maintainAspectRatio: false,
        title: {
          display: true,
          text: 'Sleep time and recommendations'
        }
      },
      data: sleepData
    });
  };

  // Temperature line chart.
  tempLine = () => {
    // Get the data of temperature from API.
    const temperatures = this.props.temperatures.map((temperature) => temperature.value);
    console.log("temperature")
    console.log(temperatures.slice(-24))

    var temperatureData = {
      labels: ["00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"],
      datasets: [{
        label: "Temperature in celsius",
        // Get last 24 values.
        data: temperatures.slice(-24),
        fill: 'none',
        backgroundColor: ["#003f5c"],
        pointRadius: 2,
        borderColor: ["#003f5c"],
        borderWidth: 1,
        lineTension: 0
      }]
    };

    // Chart with Chart.js.
    this.tempChart = new Chart(this.tempRef.current, {
      type: 'line',
      options: {
        responsive: true,
        title: {
          display: true,
          text: 'Temperature in the room'
        },
        maintainAspectRatio: false,
        scales: {
          yAxes: [
            {
              ticks: {
                min: 5,
                max: 30
              }
            }
          ]
        },
        annotation: {
          annotations: [{
            borderDash: [3, 3],
            type: 'line',
            mode: 'horizontal',
            scaleID: 'y-axis-0',
            value: 12,
            borderColor: '#3D5A6C',
            borderWidth: 3,
            label: {
              position: "right",
              fontSize: 8,
              enabled: true,
              content: 'Minimum'
            }
          }, {
            borderDash: [3, 3],
            type: 'line',
            mode: 'horizontal',
            scaleID: 'y-axis-0',
            value: 24,
            borderColor: '#DB5461',
            borderWidth: 3,
            label: {
              position: "left",
              fontSize: 8,
              enabled: true,
              content: 'Maximum'
            }
          }
          ]
        }
      },
      data: temperatureData
    });
  }

  // Humidity bar chart.
  humidityBar = () => {
    // Get the data of humidity from API.
    const humidities = this.props.humidities.map((humidity) => humidity.value);
    console.log("humidities")
    console.log(humidities.slice(-24))
    var humiditiesData = {
      labels: ["00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"],
      datasets: [{
        label: "Humidity percentage",
        // Get last 24 values.
        data: humidities.slice(-24),
        backgroundColor: ["#003f5c", "#2f4b7c", "#665191", "#a05195", "#d45087", "#f95d6a", "#ff7c43", "#ffa600", "#003f5c", "#2f4b7c", "#665191", "#a05195", "#d45087", "#f95d6a", "#ff7c43", "#ffa600", "#003f5c", "#2f4b7c", "#665191", "#a05195", "#d45087", "#f95d6a", "#ff7c43", "#ffa600"]
      }]
    };

    // Chart with Chart.js.
    this.humidityChart = new Chart(this.humidityRef.current, {
      type: 'bar',
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                min: 0,
                max: 100
              }
            }
          ]
        },
        annotation: {
          annotations: [{
            borderDash: [3, 3],
            type: 'line',
            mode: 'horizontal',
            scaleID: 'y-axis-0',
            value: 30,
            borderColor: '#3D5A6C',
            borderWidth: 3,
            label: {
              position: "right",
              fontSize: 8,
              enabled: true,
              content: 'Minimum'
            }
          }, {
            borderDash: [3, 3],
            type: 'line',
            mode: 'horizontal',
            scaleID: 'y-axis-0',
            value: 50,
            borderColor: '#DB5461',
            borderWidth: 3,
            label: {
              position: "left",
              fontSize: 8,
              enabled: true,
              content: 'Maximum'
            }
          }
          ]
        },
        responsive: true,
        maintainAspectRatio: false,
        title: {
          display: true,
          text: 'Humidity in the room'
        },

      },
      data: humiditiesData
    });
  };
  // Noise bar chart
  noiseBar = () => {
    // Get the data of noise from API.
    const noises = this.props.noises.map((noise) => noise.value);
    console.log("noises")
    console.log(noises.slice(-24))
    var noiseData = {
      labels: ["00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"],
      datasets: [{
        label: "Sound decibel",
        // Get last 24 values.
        data: noises.slice(-24),
        backgroundColor: ["#003f5c", "#2f4b7c", "#665191", "#a05195", "#d45087", "#f95d6a", "#ff7c43", "#ffa600", "#003f5c", "#2f4b7c", "#665191", "#a05195", "#d45087", "#f95d6a", "#ff7c43", "#ffa600", "#003f5c", "#2f4b7c", "#665191", "#a05195", "#d45087", "#f95d6a", "#ff7c43", "#ffa600"]
      }]
    };
    // Chart with Chart.js.
    this.noiseChart = new Chart(this.noiseRef.current, {
      type: 'bar',
      options: {
        responsive: true,
        maintainAspectRatio: false,
        title: {
          display: true,
          text: 'Sounds in the room'
        },
        annotation: {
          annotations: [{
            borderDash: [3, 3],
            type: 'line',
            mode: 'horizontal',
            scaleID: 'y-axis-0',
            value: 50,
            borderColor: '#DB5461',
            borderWidth: 3,
            label: {
              position: "left",
              fontSize: 8,
              enabled: true,
              content: 'Maximum'
            }
          }
          ]
        }
      },
      data: noiseData
    });
  };
  drawAlarms() {
    const result = this.state.alarms.map((alarm) =>
      <div className="row my-3" key={alarm._id}>
        <h4 className="card-text align-middle mr-3">{Math.floor(alarm.time / 3600)}:{((alarm.time % 3600) / 60 < 10) ? "0" + Math.floor((alarm.time % 3600) / 60) : Math.floor((alarm.time % 3600) / 60)}</h4>
        <label class="switch mr-3"><input type="checkbox" defaultChecked={alarm.active} onChange={() => this.handleActive(alarm._id, alarm.active)} />    <div></div>
        </label>

        <div className="list-group list-group-horizontal-xl">
          <li className={alarm.days[0] === 1 ? "list-group-item active" : "list-group-item"}>Mon.</li>
          <li className={alarm.days[1] === 1 ? "list-group-item active" : "list-group-item"}>Tue.</li>
          <li className={alarm.days[2] === 1 ? "list-group-item active" : "list-group-item"}>Wed.</li>
          <li className={alarm.days[3] === 1 ? "list-group-item active" : "list-group-item"}>Thu.</li>
          <li className={alarm.days[4] === 1 ? "list-group-item active" : "list-group-item"}>Fri.</li>
          <li className={alarm.days[5] === 1 ? "list-group-item active" : "list-group-item"}>Sat.</li>
          <li className={alarm.days[6] === 1 ? "list-group-item active" : "list-group-item"}>Sun.</li>
        </div>
        <button type="button" class="btn btn-danger mx-3 mt-2" onClick={() => this.removeAlarm(alarm._id)} >Delete</button>
      </div>
    );
    this.setState({ alarmResult: result }), this.render();
  };
  removeAlarm(alarm) {
    fetch('http://localhost:8080/alarm/' + alarm, {
      method: 'DELETE',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ _id: alarm })
    })
    this.getAlarms();
  }
  getAlarms() {
    fetch("http://localhost:8080/alarms/")
      .then(res => res.json())
      .then((data) => {
        this.setState({ alarms: data });
      })
      .catch(console.log)
      .then(() => {
        this.drawAlarms();
      });

  }

  handleActive(alarm, alarmActive) {
    fetch('http://localhost:8080/alarm/' + alarm, {
      method: 'PUT',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ active: !alarmActive })
    }).then(() => {
      this.getAlarms();
    });

  }
  // Creates an alarm for the next 5 seconds
  testAlarm() {
    var days = [1, 1, 1, 1, 1, 1, 1]
    var created = new Date();
    // Alarm 5 seconds after creation.
    var alarm = created.getSeconds() + created.getMinutes() * 60 + created.getHours() * 60 * 60 + 5;
    var decibel = 20;
    var duration = 10;
    var active = true;
    console.log(created.toDateString())
    console.log(decibel)

    // POST call to create the alarm
    fetch('http://localhost:8080/alarm/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body:
        JSON.stringify({
          "userId": this.props.user,
          "duration": duration,
          "active": active,
          "time": alarm,
          "days": days,
          "decibel": decibel,
          "created": created
        })
    }).then(() => {
      this.getAlarms();
    });

  };
  render() {
    // Main page of the dashboard
    const mainPage = (
      <div className="bg">
        <div className="top-menu">
          <h1 className="main-title">Smart <b className="blue-title">Bed</b> </h1>
          <p className="sub-title">Ubiquitous Computing at UAH</p>
        </div>
        <div className="row">
          <div className="main chart-wrapper">
            <canvas ref={this.humidityRef}  ></canvas>
          </div>
          <div className="card col-md-5">
            <div className="row no-gutters">
              <div className="card-body">
                <h3 className="card-title">Weight and BMI</h3>
                <form onSubmit={this.handleSubmit}>
                  <div >
                    <div>
                      <h4 className="card-text"><i className="fas fa-weight small-right-tab"></i>Your weight: <b className="blue-title">{this.state.weight}</b></h4>
                      <h4 className="card-text">Your body mass index: <b className="blue-title">{this.state.bmi}</b></h4>
                      <input className="input-box-dash right-tab" type="number" placeholder='Enter your height in cm' min="100" max="210" onChange={this.handleHeight} />
                      <button className="btton btton-presentation" type="submit" >Calculate</button>
                    </div>
                  </div>
                </form>
                <div className="progress">
                  <div className="progress-bar bg-warning bar-underweight" role="progressbar" >Underweight</div>
                  <div className="progress-bar bg-success bar-normal" role="progressbar">Normal</div>
                  <div className="progress-bar bg-warning bar-overweight" role="progressbar" >Overweight</div>
                  <div className="progress-bar bg-danger bar-obese" role="progressbar" >Obese</div>
                </div>
                {this.state.bmiResult}
              </div>
            </div>
          </div>
        </div>
        <div className="sub chart-wrapper">
          <canvas ref={this.tempRef}></canvas>
        </div>
        <div className="sub chart-wrapper">
          <canvas ref={this.noiseRef}></canvas>
        </div>
        <div className="sub chart-wrapper">
          <canvas ref={this.sleepRef}></canvas>
        </div>
        <div className="row mx-0">
          <div className="card col-md-5 ">
            <div className="row no-gutters">
              <div className="col-md-3 ">
                <img src={this.state.positionImage} className="card-img" alt="sleep-position"></img>
                <p className="card-text text-center"><small className="text-muted">Created by pikisuperstar - www.freepik.com</small></p>
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h3 className="card-title">Sleep position: <b className="blue-title">{this.state.lastPosition}</b></h3>
                  <p className="card-text">{this.state.positionText}</p>
                  <p className="card-text"><small className="text-muted">Updated last day</small></p>
                </div>
              </div>
            </div>
          </div>
          <div className="card col-md-1"></div>
          <div className="card col-md-5 ">
            <div className="card-body">
              <div class="row">              <h3 className="card-title">Alarms</h3>
                <button className="small-btton btton-login ml-3" onClick={this.testAlarm}>Test alarm</button></div>

              <form onSubmit={this.handleNewAlarm}>
                <div >
                  <div>
                    <h4 className="card-text ">Days</h4>
                    <div className="list-group list-group-horizontal-xl">
                      <button type="button" className={this.state.days[0] === 1 ? "list-group-item list-group-item-action active" : "list-group-item list-group-item-action"} onClick={() => this.handleDays(0)}>Mon.</button>
                      <button type="button" className={this.state.days[1] === 1 ? "list-group-item list-group-item-action active" : "list-group-item list-group-item-action"} onClick={() => this.handleDays(1)}>Tue.</button>
                      <button type="button" className={this.state.days[2] === 1 ? "list-group-item list-group-item-action active" : "list-group-item list-group-item-action"} onClick={() => this.handleDays(2)}>Wed.</button>
                      <button type="button" className={this.state.days[3] === 1 ? "list-group-item list-group-item-action active" : "list-group-item list-group-item-action"} onClick={() => this.handleDays(3)}>Thu.</button>
                      <button type="button" className={this.state.days[4] === 1 ? "list-group-item list-group-item-action active" : "list-group-item list-group-item-action"} onClick={() => this.handleDays(4)}>Fri.</button>
                      <button type="button" className={this.state.days[5] === 1 ? "list-group-item list-group-item-action active" : "list-group-item list-group-item-action"} onClick={() => this.handleDays(5)}>Sat.</button>
                      <button type="button" className={this.state.days[6] === 1 ? "list-group-item list-group-item-action active" : "list-group-item list-group-item-action"} onClick={() => this.handleDays(6)}>Sun.</button>
                    </div>
                    <h4 className="card-text">Hour</h4>
                    <input type="time" className="input-box-dash right-tab" required onChange={this.handleTime}></input>
                    <button className="btton btton-presentation" type="submit" >Add alarm</button>
                  </div>
                </div>
              </form>
              <h4 className="card-text">Created</h4>
              {this.state.alarmResult}
            </div>
          </div>
        </div>
      </div>
    );
    return mainPage;
  }
}